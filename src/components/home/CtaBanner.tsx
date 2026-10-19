import Icon from "../icons/Icon";

export default function CtaBanner() {
  return (
    <section className="bg-[#e00016] px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
        <div className="text-white">
          <p className="text-xs font-bold tracking-[0.16em] text-white">READY WHEN YOU ARE</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Let&apos;s get you moving.</h2>
          <p className="mt-3 text-sm font-medium text-white">Free quote · No obligation · Replies in minutes.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="tel:+447584201972" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#d10014] transition hover:bg-[#071a3d] hover:text-white"><Icon name="phone" size={18} /> 07584 201972</a>
          <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-[#071a3d] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#d10014]">Get your free quote <Icon name="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  );
}
