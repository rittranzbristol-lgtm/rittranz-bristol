import { Link } from "react-router";
import { facebookUrl, instagramUrl, navItems } from "../../data/site";
import SocialIcon from "../icons/SocialIcon";
import VanIcon from "../icons/VanIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-[#020f2d] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
        <div><Link to="/" className="flex items-center gap-3"><span className="grid h-16 w-16 place-items-center overflow-hidden rounded-full border-2 border-white/80"><VanIcon /></span><strong className="text-lg tracking-[0.08em]">RIT TRANZ, Man &amp; Van Bristol</strong></Link><p className="mt-4 max-w-sm text-sm leading-6 text-white/70">Man and van serving Bristol and all surrounding areas</p></div>
        <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-white/70" aria-label="Footer navigation">{navItems.map(([label, path]) => <Link key={path} to={path} className="transition hover:text-white">{label}</Link>)}<Link to="/privacy" className="transition hover:text-white">Privacy &amp; Cookies</Link><Link to="/terms" className="transition hover:text-white">Terms &amp; Conditions</Link></nav>
        <div><div className="flex items-center gap-2"><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#ff5968] hover:text-[#ff5968]"><SocialIcon network="facebook" /></a><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#ff5968] hover:text-[#ff5968]"><SocialIcon network="instagram" /></a><a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" aria-label="Message RIT TRANZ on WhatsApp" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/75 transition hover:border-[#ff5968] hover:text-[#ff5968]"><WhatsAppIcon /></a></div></div>
      </div>
      <div className="mx-auto mt-6 flex max-w-[1240px] flex-col justify-between gap-3 text-sm leading-6 text-white/65 lg:flex-row"><p>© {new Date().getFullYear()} RIT TRANZ. All rights reserved.</p><p><a href="https://environment.data.gov.uk/public-register/view/search-waste-carriers-brokers" target="_blank" rel="noreferrer" className="underline decoration-white/30 underline-offset-4 transition hover:text-white">Environment Agency Licensed Waste Carrier (Reg: CBDU651708)</a> · £2M public liability · £15K goods in transit cover.</p></div>
    </footer>
  );
}
