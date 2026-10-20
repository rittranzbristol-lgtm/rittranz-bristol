import type { ReactNode } from "react";
import { promo } from "../../data/promo";
import { whatsAppLink } from "../../utils/whatsapp";

// Thin strip at the top of the header. Shows the current promo when one is
// enabled in src/data/promo.ts, otherwise the standard insurance/WhatsApp line.
export default function HeaderStrip({ className, whatsAppIcon }: { className: string; whatsAppIcon: ReactNode }) {
  return (
    <div className={className}>
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between gap-3">
        {promo.enabled ? (
          <>
            <span className="truncate text-white">
              <span className="sm:hidden">🎓 {promo.shortText}</span>
              <span className="hidden sm:inline">🎓 <strong className="font-bold">{promo.label}</strong> | {promo.text}</span>
            </span>
            <a href={whatsAppLink(promo.whatsAppMessage)} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e00016] px-3 py-1 font-bold text-white transition hover:bg-white hover:text-[#d10014]">
              {whatsAppIcon}
              <span className="sm:hidden">{promo.shortCta}</span>
              <span className="hidden sm:inline">{promo.cta}</span>
            </a>
          </>
        ) : (
          <>
            <span><span className="sm:hidden">Fully insured</span><span className="hidden sm:inline">Fully insured Bristol man &amp; van service</span></span>
            <a href="https://wa.me/447584201972" className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#e00016] px-3 py-1 font-bold text-white">{whatsAppIcon}<span className="sm:hidden">WhatsApp</span><span className="hidden sm:inline">WhatsApp replies in minutes</span></a>
          </>
        )}
      </div>
    </div>
  );
}
