import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { facebookUrl, instagramUrl, navItems, quoteFormPath } from "../../data/site";
import Icon from "../icons/Icon";
import SocialIcon from "../icons/SocialIcon";
import VanIcon from "../icons/VanIcon";
import HeaderStrip from "./HeaderStrip";

// The site-wide header, used on every page.
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  // The home page has its own quote form, so its button stays on the page.
  const quoteLink = pathname === "/" ? "/#quote" : quoteFormPath;

  // A link to the page you're already on goes back to the top of it.
  function followLink(path: string) {
    setOpen(false);
    if (path === pathname) window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <HeaderStrip className="h-8 bg-[#071a3d] px-5 text-[10px] font-semibold text-white/70" whatsAppIcon={<Icon name="whatsapp" size={13} />} />
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between rounded-2xl border border-[#dfe4ec] bg-white px-4 text-[#071a3d] shadow-2xl sm:px-6">
        <Link to="/" onClick={() => followLink("/")} className="flex items-center gap-3" aria-label="RIT TRANZ home">
          <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-full border-2 border-white shadow-lg"><VanIcon /></span>
          <span className="leading-none">
            <strong className="block text-[18px] tracking-[0.14em]">RIT TRANZ</strong>
            <small className="mt-1 block text-[9px] font-semibold tracking-[0.2em] text-[#697386]">MAN & VAN BRISTOL</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex" aria-label="Main navigation">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => followLink(path)} className={({ isActive }) => isActive ? "text-[#e00016]" : "transition hover:text-[#e00016]"}>{label}</NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-1">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[#f2f5fa] hover:text-[#e00016]"><SocialIcon network="facebook" /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-[#f2f5fa] hover:text-[#e00016]"><SocialIcon network="instagram" /></a>
          </div>
          <a href="tel:+447584201972" className="flex items-center gap-2 text-sm font-semibold transition hover:text-[#e00016]">
            <Icon name="phone" size={17} /> 07584 201972
          </a>
          <Link to={quoteLink} className="rounded-full bg-[#e00016] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-white hover:text-[#071a3d]">Get a free quote</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4ec] lg:hidden" aria-label="Toggle menu">
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>

      {open && (
        <nav className="absolute inset-x-4 top-[114px] rounded-2xl bg-white p-5 text-[#071a3d] shadow-xl lg:hidden">
          {navItems.map(([label, path]) => (
            <Link key={path} to={path} onClick={() => followLink(path)} className="block border-b border-[#dfe4ec] py-3 text-sm font-semibold">{label}</Link>
          ))}
          <div className="mt-4 flex gap-2">
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa]"><SocialIcon network="facebook" /></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="RIT TRANZ on Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa]"><SocialIcon network="instagram" /></a>
          </div>
          <Link to={quoteLink} onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-[#e00016] px-5 py-3 text-center text-sm font-bold text-white">Get a free quote</Link>
        </nav>
      )}
    </header>
  );
}
