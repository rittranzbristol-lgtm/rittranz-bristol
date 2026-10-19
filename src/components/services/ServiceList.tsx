import { Link } from "react-router";
import { detailedServices } from "../../data/services";
import ArrowIcon from "../icons/ArrowIcon";

export default function ServiceList() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px] space-y-5">
        {detailedServices.map((service) => (
          <article key={service.no} className="grid gap-8 rounded-[28px] border border-[#dfe4ec] bg-white p-7 md:grid-cols-[80px_1fr_1fr] md:p-10">
            <span className="text-4xl font-semibold text-[#b8c2d3]">{service.no}</span>
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{service.title}</h2>
              <p className="mt-4 leading-7 text-[#5f687b]">{service.text}</p>
            </div>
            <div>
              <ul className="grid gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm font-semibold leading-6">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#f2f5fa] text-xs text-[#d10014]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-xl bg-[#f2f5fa] p-4 text-sm leading-6 text-[#465269]"><strong className="text-[#071a3d]">Best for:</strong> {service.bestFor}</p>
              <Link to="/pricing" className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#071a3d] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#e00016]">{service.cta} <ArrowIcon /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
