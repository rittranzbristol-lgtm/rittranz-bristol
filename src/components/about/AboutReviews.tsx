import { googleBusinessUrl } from "../../data/site";
import ArrowIcon from "../icons/ArrowIcon";
import GoogleIcon from "../icons/GoogleIcon";

export default function AboutReviews() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#d10014]">LIVE GOOGLE REVIEWS</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">What our customers say</h2>
            <p className="mt-4 flex items-center gap-3 text-sm font-bold text-[#465269]"><span className="tracking-widest text-[#e00016]">★★★★★</span> 5★ rating on Google</p>
          </div>
          <a href={googleBusinessUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-[#071a3d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#e00016]"><GoogleIcon /> See all Google reviews <ArrowIcon /></a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { quote: "Friendly, careful and really easy to arrange. Everything arrived exactly as it left.", service: "Home move" },
            { quote: "A straightforward pickup with clear communication from start to finish.", service: "Marketplace collection" },
            { quote: "Quick to respond, fairly priced and the clearance was handled properly.", service: "Licensed clearance" },
          ].map((review) => (
            <article key={review.service} className="flex min-h-[280px] flex-col rounded-[24px] border border-[#dfe4ec] bg-[#f8f9fc] p-7 transition hover:-translate-y-1 hover:border-[#d10014]/30 hover:shadow-xl">
              <div className="flex items-center gap-3"><GoogleIcon /><span className="text-xs font-bold tracking-widest text-[#e00016]">★★★★★</span></div>
              <blockquote className="mt-7 flex-1 text-xl leading-8 tracking-[-0.02em]">“{review.quote}”</blockquote>
              <div className="mt-7 border-t border-[#dfe4ec] pt-5"><strong className="block text-sm">Local customer</strong><span className="mt-1 block text-sm text-[#5f687b]">{review.service} · Bristol</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
