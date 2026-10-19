import { facebookUrl, instagramUrl } from "../../data/site";
import Icon from "../icons/Icon";

export default function HomeFooter() {
  return (
    <footer className="bg-[#020f2d] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div>
          <a href="/" className="flex items-center gap-3"><img className="h-16 w-16 rounded-full border-2 border-white/80 object-cover" src="/assets/rit-tranz-logo.png" alt="RIT TRANZ logo" /><strong className="text-lg tracking-[0.08em]">RIT TRANZ, Man &amp; Van Bristol</strong></a>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Man and van serving Bristol and all surrounding areas</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/70" aria-label="Footer navigation">
          <a className="transition hover:text-white" href="/">Home</a>
          <a className="transition hover:text-white" href="/services">Services</a>
          <a className="transition hover:text-white" href="/pricing">Pricing</a>
          <a className="transition hover:text-white" href="/about">About</a>
          <a className="transition hover:text-white" href="/contact">Contact</a>
          <a className="transition hover:text-white" href="/privacy">Privacy &amp; Cookies</a>
          <a className="transition hover:text-white" href="/terms">Terms &amp; Conditions</a>
        </nav>
        <div>
          <div className="flex items-center gap-2">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#e00016] hover:text-[#e00016]"><Icon name="facebook" size={19} /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#e00016] hover:text-[#e00016]"><Icon name="instagram" size={19} /></a>
            <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" aria-label="Message RIT TRANZ on WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#e00016] hover:text-[#e00016]"><Icon name="whatsapp" size={19} /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-[1240px] flex-col justify-between gap-3 text-sm leading-6 text-white/65 lg:flex-row">
        <p>© {new Date().getFullYear()} RIT TRANZ. All rights reserved.</p>
        <p><a href="https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers" target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-4 transition hover:text-white">Environment Agency Licensed Waste Carrier (Reg: CBDU651708)</a> · £2M public liability · £15K goods in transit cover.</p>
      </div>
    </footer>
  );
}
