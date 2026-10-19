import { googleBusinessUrl } from "../../data/site";
import GoogleIcon from "../icons/GoogleIcon";
import Icon from "../icons/Icon";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">LIVE GOOGLE REVIEWS</p>
            <h2 className="section-title mt-4">Good moves make good neighbours.</h2>
            <p className="mt-4 text-sm leading-6 text-[#5f687b]">Customers value clear communication, practical help and a job handled with care.</p>
          </div>
          <a className="inline-flex items-center gap-3 rounded-full bg-[#071a3d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#e00016]" target="_blank" rel="noreferrer" href={googleBusinessUrl}>
            <GoogleIcon />
            <span>See Google reviews</span>
            <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { before: "“Friendly, careful and really easy to arrange. Everything ", emphasis: "arrived exactly as it left", after: ".”", job: "Home move", location: "Bristol" },
            { before: "“A straightforward pickup with ", emphasis: "clear communication", after: " from start to finish.”", job: "Marketplace collection", location: "Bristol" },
            { before: "“Quick to respond, fairly priced and the clearance was ", emphasis: "handled properly", after: ".”", job: "Licensed clearance", location: "Bristol" },
          ].map((review) => (
            <article key={review.job} className="flex h-full min-h-[300px] flex-col rounded-[24px] border border-[#dfe4ec] bg-[#f8f9fc] p-7 transition hover:-translate-y-1 hover:border-[#d10014]/30 hover:shadow-xl">
              <div className="flex items-center gap-3 text-xs font-bold"><GoogleIcon /><span className="tracking-widest text-[#e00016]">★★★★★</span><span className="text-[#465269]">Google review</span></div>
              <blockquote className="mt-7 flex-1 text-xl leading-8 tracking-[-0.02em]">{review.before}<strong>{review.emphasis}</strong>{review.after}</blockquote>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#dfe4ec] bg-white shadow-sm"><GoogleIcon /></span>
                <div><strong className="block text-sm text-[#071a3d]">Local customer</strong><span className="mt-1 block text-sm font-medium text-[#465269]">{review.job} · {review.location}</span></div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#f2f5fa] p-6 text-center sm:flex-row sm:gap-6">
          <a href="#quote" className="inline-flex items-center gap-3 rounded-full bg-[#e00016] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#071a3d]">Get your free quote <Icon name="arrow" size={18} /></a>
          <p className="text-sm font-bold text-[#465269]">Join our happy Bristol customers.</p>
        </div>
      </div>
    </section>
  );
}
