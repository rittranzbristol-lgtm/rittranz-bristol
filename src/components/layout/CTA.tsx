import { Link } from "react-router";
import ArrowIcon from "../icons/ArrowIcon";

export default function CTA() {
  return <section className="bg-[#e00016] px-5 py-14 text-white sm:px-8"><div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="text-xs font-bold tracking-[0.15em] text-white">READY WHEN YOU ARE</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white">Let&apos;s get you moving.</h2><p className="mt-3 text-sm font-medium text-white">Free quote · No obligation · Replies in minutes.</p></div><Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#d10014] transition hover:bg-[#020f2d] hover:text-white">Get a free quote <ArrowIcon /></Link></div></section>;
}
