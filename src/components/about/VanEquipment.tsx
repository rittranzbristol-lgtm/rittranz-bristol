export default function VanEquipment() {
  return (
    <section className="bg-[#071a3d] px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px]">
          <img className="absolute inset-0 h-full w-full object-cover object-center" src="https://images.unsplash.com/photo-1769159511492-aa484c036c06?auto=format&fit=crop&w=1400&q=88" alt="Ford Transit Custom short wheelbase van" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020f2d]/75 via-transparent to-transparent" />
          <div className="absolute inset-x-5 bottom-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-[#020f2d]/90 text-center backdrop-blur-md">
            {[["6.0 m³", "Load space"], ["800 kg", "Typical payload"], ["SWB", "Easy access"]].map(([value, label]) => (
              <div key={label} className="border-r border-white/10 px-3 py-4 last:border-r-0">
                <strong className="block text-xl text-white">{value}</strong>
                <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-white/55">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[#ff5968]">THE VAN &amp; EQUIPMENT</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">The right van for Bristol streets</h2>
          <p className="mt-6 text-base leading-8 text-white/70">A white Ford Transit Custom SWB with 6.0 m³ of load space and a typical payload of 800 kg. It is compact enough for narrow residential streets, tight parking, and low-clearance university housing where big Luton box vans get stuck. Your property is secured, strapped, and protected with care.</p>
          <ul className="mt-9 space-y-4">
            {[
              "Load area: 2.55 m long, 1.77 m wide, 1.40 m high",
              "1.39 m clearance between the wheel arches",
              "Thick padded moving blankets & load-rated ratchet straps",
              "Heavy-duty sack truck and stair-climbing trolley (ideal for flats without lifts)",
              "On-board toolkit for basic furniture dismantling",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-white/90">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e00016] text-xs text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
