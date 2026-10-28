import { ChangeEvent, FormEvent, useState } from "react";
import { formatDate, openWhatsApp } from "../../utils/whatsapp";
import Icon, { type IconName } from "../icons/Icon";

const MOVE = "Home or flat move";
const CLEARANCE = "Waste clearance";
const ASSEMBLY = "Furniture assemble/dismantle";

const tabs: [value: string, icon: IconName, label: string][] = [
  [MOVE, "home", "Moving"],
  ["Item pickup", "box", "Pickup"],
  [CLEARANCE, "waste", "Clearance"],
  // Zero-width space lets the long label wrap after the slash on narrow screens.
  [ASSEMBLY, "tools", "Assemble/​Dismantle"],
];

export default function QuoteForm() {
  const [service, setService] = useState(MOVE);
  // Kept in state so values survive switching between service types.
  const [fields, setFields] = useState({ from: "", to: "", items: "", assembly: "", date: "" });
  const [needsDismantling, setNeedsDismantling] = useState(false);
  const isClearance = service === CLEARANCE;
  const isAssembly = service === ASSEMBLY;

  function updateField(event: ChangeEvent<HTMLInputElement>) {
    setFields({ ...fields, [event.target.name]: event.target.value });
  }

  function sendQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const from = fields.from.trim();
    const to = fields.to.trim();
    const items = fields.items.trim();
    const lines = ["Hi RIT TRANZ, I'd like a free quote.", `Service: ${service}`];
    if (isAssembly) {
      lines.push(`Postcode: ${from || "Not provided"}`);
      lines.push(`Items to assemble/dismantle: ${fields.assembly.trim() || "Not provided"}`);
    } else {
      lines.push(`Pickup postcode: ${from || "Not provided"}`);
      if (!isClearance || to) lines.push(`Drop-off postcode: ${to || "Not provided"}`);
      if (isClearance || items) lines.push(`Items to be collected: ${items || "Not provided"}`);
      if (service === MOVE && needsDismantling) lines.push("Furniture dismantling/assembly: Yes, needed (flat fee per item)");
    }
    lines.push(`Preferred date: ${formatDate(fields.date) || "Flexible"}`);
    openWhatsApp(lines);
  }

  return (
    <form id="quote" onSubmit={sendQuote} className="quote-card mx-auto w-full max-w-[430px] rounded-[26px] bg-white p-6 text-[#071a3d] shadow-2xl sm:p-7 lg:justify-self-end">
      <div className="mb-5 flex items-start justify-between">
        <div>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#c2152c]">QUICK QUOTE</span>
          <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em]">Where can we help?</h2>
        </div>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f2f5fa] text-[#d10014]"><Icon name="sparkle" /></span>
      </div>
      <label className="mb-2 block text-xs font-bold">What do you need?</label>
      <div className="grid grid-cols-4 gap-2">
        {tabs.map(([value, icon, label]) => (
          <button
            type="button"
            key={value}
            onClick={() => setService(value)}
            aria-pressed={service === value}
            className={`quote-option rounded-xl border px-1.5 py-3 text-center text-[11px] font-bold leading-4 transition ${service === value ? "active" : "border-[#dfe4ec] text-[#697386]"}`}
          >
            <span className="mx-auto mb-1.5 grid place-items-center"><Icon name={icon} size={19} /></span>{label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-3">
        <label>
          <span className="mb-2 block text-xs font-bold">{isAssembly ? "Postcode" : "Pickup postcode"}</span>
          <span className="input-shell"><Icon name="map" size={18} /><input name="from" required placeholder="e.g. BS1 5TY" value={fields.from} onChange={updateField} /></span>
        </label>
        {isAssembly ? (
          <label>
            <span className="mb-2 block text-xs font-bold">Items to assemble/dismantle</span>
            <span className="input-shell"><Icon name="tools" size={18} /><input name="assembly" required placeholder="e.g. IKEA wardrobe, double bed" value={fields.assembly} onChange={updateField} /></span>
          </label>
        ) : isClearance ? (
          <label>
            <span className="mb-2 block text-xs font-bold">Items to be collected</span>
            <span className="input-shell"><Icon name="waste" size={18} /><input name="items" required placeholder="e.g. sofa, bags and garden waste" value={fields.items} onChange={updateField} /></span>
          </label>
        ) : (
          <label>
            <span className="mb-2 block text-xs font-bold">Drop-off postcode</span>
            <span className="input-shell"><Icon name="map" size={18} /><input name="to" required placeholder="e.g. BS8 2PS" value={fields.to} onChange={updateField} /></span>
          </label>
        )}
        {service === MOVE && (
          <label className="flex cursor-pointer items-start gap-2.5 rounded-xl border border-[#dfe4ec] bg-[#f6f8fc] px-3 py-2.5 text-xs font-semibold leading-5 text-[#263653]">
            <input type="checkbox" checked={needsDismantling} onChange={(e) => setNeedsDismantling(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-[#e00016]" />
            <span>Need furniture dismantled or assembled? <span className="text-[#697386]">(Flat fee per item)</span></span>
          </label>
        )}
        <label>
          <span className="mb-2 block text-xs font-bold">Preferred date</span>
          <span className="input-shell"><Icon name="calendar" size={18} /><input name="date" type="date" value={fields.date} onChange={updateField} /></span>
        </label>
      </div>
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a3d] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#d10014]">
        Continue on WhatsApp <Icon name="arrow" size={17} />
      </button>
      <p className="mt-3 text-center text-xs font-semibold leading-5 text-[#465269]">Free quote · No obligation · Usually replies in minutes</p>
    </form>
  );
}
