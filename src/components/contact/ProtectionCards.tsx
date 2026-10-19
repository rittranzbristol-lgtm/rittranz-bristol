export default function ProtectionCards() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-xl"><p className="text-[10px] font-bold tracking-[0.18em] text-[#d10014]">PROTECTION INCLUDED</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">Protection you can understand.</h2><p className="mt-3 text-sm leading-6 text-[#5f687b]">The essentials are visible, specific and part of the service.</p></div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            ["£2M", "Public liability", "Cover for accidental property damage while we complete your job.", "bg-[#fff0f1]"],
            ["£15K", "Goods in transit", "Cover for your belongings while they are being transported.", "bg-[#eef5f2]"],
            ["EA", "Licensed clearance", "Environment Agency registered for responsible waste transport.", "bg-[#071a3d] text-white"],
          ].map(([value, title, text, color]) => (
            <article key={title} className={`rounded-2xl p-7 ${color}`}>
              <strong className="text-3xl text-[#d10014]">{value}</strong>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className={`mt-2 text-xs leading-5 ${title === "Licensed clearance" ? "text-white/55" : "text-[#697386]"}`}>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
