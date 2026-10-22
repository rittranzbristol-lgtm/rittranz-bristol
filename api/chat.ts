// Vercel serverless function: POST /api/chat
// Answers visitor questions about RIT TRANZ using Google Gemini. The API key stays
// here on the server (GEMINI_API_KEY env var) and is never sent to the browser.
import { ApiError, FinishReason, GoogleGenAI, ThinkingLevel, type Content } from "@google/genai";
import { buildSystemPrompt } from "./_knowledge";

// Override with the GEMINI_MODEL env var to switch models without a code change.
const MODEL = process.env.GEMINI_MODEL || "gemini-3.8-flash";
const SYSTEM_PROMPT = buildSystemPrompt();

// Abuse limits: this endpoint is public and every call uses your API quota.
const MAX_MESSAGES = 20; // conversation turns sent per request
const MAX_CHARS = 1000; // per visitor message
const RATE_LIMIT = 30; // requests per IP per window (per server instance)
const RATE_WINDOW_MS = 10 * 60 * 1000;
const ALLOWED_ORIGINS = [/^https:\/\/(www\.)?rittranz\.co\.uk$/, /^https:\/\/rittranz-bristol[\w-]*\.vercel\.app$/, /^http:\/\/localhost(:\d+)?$/];

const FALLBACK_REPLY = "Sorry, the assistant is unavailable right now. Please message us on WhatsApp on 07584 201972 and we'll reply in minutes.";

// Created on first use so a missing API key returns a friendly reply instead of crashing the function.
let ai: GoogleGenAI | undefined;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
}

type IncomingMessage = { role: "user" | "assistant"; content: string };

// Validates the browser's chat history and converts it to Gemini's format.
function parseMessages(body: unknown): Content[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const messages = raw.slice(-MAX_MESSAGES) as IncomingMessage[];
  for (const m of messages) {
    if ((m?.role !== "user" && m?.role !== "assistant") || typeof m.content !== "string" || !m.content.trim()) return null;
    if (m.role === "user" && m.content.length > MAX_CHARS) return null;
  }
  // The conversation must start and end with the visitor.
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return null;
  return messages.map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content.slice(0, 4000) }] }));
}

const BLOCKED_REASONS = new Set<FinishReason | undefined>([
  FinishReason.SAFETY,
  FinishReason.RECITATION,
  FinishReason.BLOCKLIST,
  FinishReason.PROHIBITED_CONTENT,
  FinishReason.SPII,
]);

export async function POST(request: Request): Promise<Response> {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.some((re) => re.test(origin))) return json({ error: "Forbidden" }, 403);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return json({ reply: "You've sent a lot of messages in a short time. Please message us on WhatsApp on 07584 201972 and we'll help you directly." });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }
  const contents = parseMessages(body);
  if (!contents) return json({ error: "Invalid messages" }, 400);

  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return json({ reply: FALLBACK_REPLY });
  }

  try {
    ai ??= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        maxOutputTokens: 4096,
        thinkingConfig: { thinkingLevel: ThinkingLevel.LOW }, // short customer-service answers; keeps replies fast
      },
    });

    const finishReason = response.candidates?.[0]?.finishReason;
    if (response.promptFeedback?.blockReason || BLOCKED_REASONS.has(finishReason)) {
      return json({ reply: "Sorry, I can't help with that one. For anything about moves, pickups or clearances, message us on WhatsApp on 07584 201972." });
    }
    const reply = response.text?.trim();
    return json({ reply: reply || "Sorry, I didn't catch that. Could you rephrase your question?" });
  } catch (error) {
    if (error instanceof ApiError) {
      // 400 bad request/model name, 403 bad key, 429 quota exceeded, 5xx Google outage
      console.error(`Gemini API error ${error.status}:`, error.message);
    } else {
      console.error("Chat error:", error);
    }
    return json({ reply: FALLBACK_REPLY });
  }
}
