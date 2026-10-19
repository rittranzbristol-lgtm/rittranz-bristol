import TrustIcon from "../icons/TrustIcon";

export default function WhyChooseUs() {
  return (
    <section className="border-y border-[#dfe4ec] bg-[#f2f5fa] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[820px]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#d10014]">WHY CHOOSE US</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Professional service, without the premium price tag.</h2>
          <p className="mt-5 text-base leading-8 text-[#465269]">Quick communication, punctual arrivals, and costs explained before the job begins. Whether it’s student accommodation or a single sofa, every job gets the same careful attention.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "shield" as const, title: "£2 Million", text: "Public Liability Insurance" },
            { icon: "box" as const, title: "£15,000", text: "Goods in Transit Cover" },
            { icon: "license" as const, title: "Environment Agency", text: "Registered Upper Tier Waste Carrier" },
            { icon: "location" as const, title: "Serving locally", text: "Bristol, North Somerset, Bath and Cardiff" },
          ].map((item) => (
            <article key={item.text} className="rounded-[24px] border border-[#dfe4ec] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#d10014]/30 hover:shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#fff0f1] text-[#d10014]"><TrustIcon type={item.icon} /></span>
              <h3 className="mt-7 text-2xl font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-[#5f687b]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
