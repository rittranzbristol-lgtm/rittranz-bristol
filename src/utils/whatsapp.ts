const whatsAppNumber = "447584201972";

/** Turns a date input value (YYYY-MM-DD) into e.g. "Sat 24 Oct 2026". */
export function formatDate(value: string) {
  if (!value) return "";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

export function openWhatsApp(lines: string[]) {
  const message = lines.join("\n");
  window.open(`https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
