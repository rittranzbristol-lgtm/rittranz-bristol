import { FormEvent, useEffect, useRef, useState } from "react";
import { whatsAppLink } from "../../utils/whatsapp";
import Icon from "../icons/Icon";

type ChatMessage = { role: "user" | "assistant"; content: string };

const greeting: ChatMessage = {
  role: "assistant",
  content: "Hi! I'm the RIT TRANZ assistant. Ask me about moves, pickups, waste clearance, prices or the areas we cover.",
};

const suggestions = ["How much is a flat move?", "Do I need to help load?", "Can you take garden waste?", "Do you cover Portishead?"];

// Floating chat assistant shown on every page. Replies come from /api/chat.
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([greeting]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is UI-only, so it isn't sent to the assistant.
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages([...next, { role: "assistant", content: data.reply ?? "Sorry, something went wrong. Please message us on WhatsApp on 07584 201972." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "Sorry, I couldn't connect. Please message us on WhatsApp on 07584 201972." }]);
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send(input);
  }

  // Hand the conversation over to WhatsApp with the visitor's questions pre-filled.
  const visitorLines = messages.filter((m) => m.role === "user").map((m) => `- ${m.content}`);
  const whatsAppHref = whatsAppLink(
    visitorLines.length ? `Hi RIT TRANZ, I was chatting with your website assistant about:\n${visitorLines.slice(-5).join("\n")}` : "Hi RIT TRANZ, I'd like a quote.",
  );

  return (
    <>
      {open && (
        <section
          className="fixed inset-x-3 bottom-24 z-40 flex max-h-[min(600px,calc(100dvh-8rem))] flex-col overflow-hidden rounded-[22px] border border-[#dfe4ec] bg-white text-[#071a3d] shadow-2xl sm:inset-x-auto sm:right-6 sm:w-[380px]"
          aria-label="Chat with the RIT TRANZ assistant"
        >
          <header className="flex items-center gap-3 bg-[#071a3d] px-4 py-3 text-white">
            <img className="h-10 w-10 rounded-full border-2 border-white/80 object-cover" src="/assets/rit-tranz-logo.png" alt="" />
            <div className="min-w-0 flex-1">
              <strong className="block text-sm">RIT TRANZ assistant</strong>
              <span className="block text-xs text-white/65">Instant answers · AI-powered</span>
            </div>
            <button onClick={() => setOpen(false)} className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white/10" aria-label="Close chat">
              <Icon name="x" size={18} />
            </button>
          </header>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-[#f6f8fc] p-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                    m.role === "user" ? "rounded-br-md bg-[#e00016] text-white" : "rounded-bl-md border border-[#dfe4ec] bg-white text-[#263653]"
                  }`}
                >
                  {m.content}
                </p>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-[#d10014]/25 bg-white px-3 py-1.5 text-xs font-semibold text-[#d10014] transition hover:bg-[#e00016] hover:text-white">
                    {s}
                  </button>
                ))}
              </div>
            )}
            {loading && (
              <div className="flex justify-start" aria-label="Assistant is typing">
                <span className="flex gap-1 rounded-2xl rounded-bl-md border border-[#dfe4ec] bg-white px-4 py-3.5">
                  {[0, 150, 300].map((delay) => (
                    <span key={delay} className="h-2 w-2 animate-bounce rounded-full bg-[#9aa3b5]" style={{ animationDelay: `${delay}ms` }} />
                  ))}
                </span>
              </div>
            )}
          </div>

          <div className="border-t border-[#dfe4ec] bg-white p-3">
            <a href={whatsAppHref} target="_blank" rel="noreferrer" className="mb-3 flex items-center justify-center gap-2 rounded-xl bg-[#071a3d] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#e00016]">
              <Icon name="whatsapp" size={16} /> Continue on WhatsApp for a quote
            </a>
            <form onSubmit={submit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={1000}
                placeholder="Type your question…"
                aria-label="Your question"
                className="min-w-0 flex-1 rounded-full border border-[#dfe4ec] bg-[#f6f8fc] px-4 py-2.5 text-sm outline-none transition focus:border-[#e00016] focus:bg-white"
              />
              <button type="submit" disabled={loading || !input.trim()} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e00016] text-white transition hover:bg-[#071a3d] disabled:opacity-40" aria-label="Send">
                <Icon name="send" size={17} />
              </button>
            </form>
            <p className="mt-2 text-center text-[10px] leading-4 text-[#697386]">AI assistant; answers may not be perfect. Prices are confirmed before booking.</p>
          </div>
        </section>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-4 z-40 flex h-14 items-center gap-2 rounded-full bg-[#e00016] pl-4 pr-5 text-sm font-bold text-white shadow-xl shadow-[#071a3d]/25 transition hover:bg-[#071a3d] sm:right-6"
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat with the RIT TRANZ assistant"}
      >
        <Icon name={open ? "x" : "chat"} size={22} />
        <span>{open ? "Close" : "Ask us"}</span>
      </button>
    </>
  );
}
