import { Link } from "react-router";
import { plans } from "../../data/pricing";

export default function PricingPlans() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[760px]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#d10014]">PRICING OPTIONS</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Choose your service. Get a fixed, no-obligation quote.</h2>
          <p className="mt-5 text-base font-medium text-[#465269]">Direct driver-to-customer communication, no middlemen.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {plans.map((plan, index) => (
            // An odd last card spans both columns so it doesn't sit alone in its row.
            <article key={plan.name} className={`${index === plans.length - 1 && plans.length % 2 === 1 ? "lg:col-span-2 " : ""}flex h-full flex-col rounded-[28px] border border-[#dfe4ec] bg-white p-7 transition hover:-translate-y-1 hover:border-[#d10014]/30 hover:shadow-xl sm:p-8`}>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">{plan.name}</h3>
              <div className="mt-6"><span className="text-5xl font-semibold tracking-[-0.05em]">{plan.price}</span><span className="ml-2 text-sm font-semibold text-[#697386]">{plan.unit}</span>{plan.priceExtra && <span className="ml-2 text-xs font-semibold text-[#d10014]">({plan.priceExtra})</span>}</div>
              <p className="mt-2 text-xs font-semibold text-[#d10014] sm:whitespace-nowrap">{plan.note}</p>
              {plan.options ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {plan.options.map((option) => (
                    <div key={option.label} className="rounded-2xl bg-[#f2f5fa] p-4 text-sm leading-6 text-[#465269]">
                      <strong className="block text-[#071a3d]">{option.label}</strong>
                      {option.text}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-5 min-h-20 text-sm leading-7 text-[#5f687b]">{plan.description}</p>
              )}
              <div className="my-6 h-px bg-[#dfe4ec]" />
              <p className="text-xs font-bold tracking-[0.12em] text-[#071a3d]">WHAT YOUR RATE COVERS</p>
              <ul className="mt-5 space-y-4">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f2f5fa] text-xs text-[#d10014]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {plan.terms && (
                <p className="mt-6 rounded-2xl border border-[#d10014]/20 bg-[#fff0f1] p-4 text-xs leading-5 text-[#465269]">
                  <strong className="block text-[#071a3d]">Important terms / hardware policy</strong>
                  {plan.terms}
                </p>
              )}
              <div className="mt-auto pt-8">
                <Link to="/contact" className="flex items-center justify-center rounded-full bg-[#020f2d] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#e00016]">Request this service</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-5 rounded-[24px] border border-[#d10014]/20 bg-[#fff0f1] p-7 sm:grid-cols-[auto_1fr] sm:items-start sm:p-8">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#e00016] text-xl font-bold text-white">2h</span>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em]">Why a 2-hour minimum?</h3>
            <p className="mt-3 max-w-[920px] text-sm leading-7 text-[#465269]">A 2-hour minimum covers the initial call-out fee, commercial vehicle running costs, and ensures we have enough time to load, drive, and unload safely without rushing or damaging your belongings. After the first two hours, you only pay for the time the job actually takes.</p>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-[#f2f5fa] p-6 text-sm leading-6 text-[#5f687b]"><strong className="text-[#071a3d]">Good to know:</strong> Extra mileage, additional trips and tip or weighbridge fees are quoted separately. Customer assistance may be required for loading and unloading.</div>
      </div>
    </section>
  );
}
