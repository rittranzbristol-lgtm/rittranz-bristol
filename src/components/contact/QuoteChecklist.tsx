export default function QuoteChecklist() {
  return (
    <section className="bg-[#020f2d] px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[28px] border border-white/10 lg:grid-cols-[.9fr_1.1fr]">
        <img className="min-h-[460px] h-full w-full object-cover" src="https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?auto=format&fit=crop&w=1200&q=85" alt="Mover carrying boxes beside a delivery van" />
        <div className="p-8 sm:p-12">
          <p className="text-[10px] font-bold tracking-[0.18em] text-[#ff5968]">FOR AN ACCURATE QUOTE</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Show us the whole job.</h2>
          <p className="mt-4 leading-7 text-white/55">A few useful details prevent delays and make your quote more reliable.</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {[
              ["01", "Items and volume", "A list or clear photos"],
              ["02", "Floors and lifts", "At both addresses"],
              ["03", "Access", "Parking and narrow doors"],
              ["04", "Loading help", "Who will be available"],
              ["05", "Timing", "Preferred date and window"],
              ["06", "Special items", "Fragile, heavy or oversized"],
            ].map(([number, title, detail]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-xs font-bold text-[#ff5968]">{number}</span>
                <strong className="ml-3 text-sm">{title}</strong>
                <p className="mt-2 text-xs text-white/45">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
