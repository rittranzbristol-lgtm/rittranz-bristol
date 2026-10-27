import { googleBusinessUrl } from "../../data/site";
import Icon from "../icons/Icon";
import PromisesBar from "./PromisesBar";
import QuoteForm from "./QuoteForm";

export default function HeroSection() {
  return (
    <section className="hero relative min-h-[800px] overflow-hidden bg-[#071a3d] text-white">
      {/* Phones and portrait tablets get a square crop; desktops get the wide shot. */}
      <picture>
        <source media="(max-width: 1023px)" srcSet="/assets/home-hero-phone.jpg" />
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/assets/home-hero-desktop.jpg"
          alt="White RIT TRANZ van on a Bristol high street at dusk"
          fetchPriority="high"
        />
      </picture>
      <div className="absolute inset-0 bg-[#020f2d]/75 lg:bg-transparent" />
      <div className="hero-shade absolute inset-0" />
      <div className="relative z-10 mx-auto grid min-h-[800px] max-w-[1240px] items-center gap-12 px-5 pb-8 pt-36 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pt-32">
        <div className="max-w-[670px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#e00016]" />
            BRISTOL&apos;S PREMIUM SOLO MAN & VAN
          </div>
          <h1 className="max-w-[700px] text-[48px] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-[62px] lg:text-[68px]">
            Reliable Man and Van in Bristol: <span className="text-[#e00016]">Moving Made Simple.</span>
          </h1>
          <p className="mt-6 max-w-[650px] text-base font-medium leading-7 text-white/90 sm:text-lg sm:leading-8">
            Hassle-free, on-time van service across Bristol. Your belongings are protected with sturdy moving blankets and secure straps, while you deal directly with your driver.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#quote" className="inline-flex items-center gap-3 rounded-full bg-[#e00016] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-black/15 transition hover:bg-white hover:text-[#071a3d]">
              Get a free quote <Icon name="arrow" size={18} />
            </a>
            <a href="/services" className="inline-flex items-center gap-3 rounded-full border border-white/35 bg-white/5 px-7 py-4 text-sm font-bold backdrop-blur-sm transition hover:bg-white hover:text-[#071a3d]">
              Explore services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white">
            <span className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-[#ff5968]"><Icon name="shield" size={17} /></span>Fully insured</span>
            <span className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-[#ff5968]"><Icon name="calendar" size={16} /></span>Same-day slots available</span>
            <span className="flex items-center gap-2"><span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-[#ff5968]"><Icon name="check" size={17} /></span>No hidden fees</span>
          </div>
          <a href={googleBusinessUrl} target="_blank" rel="noreferrer" aria-label="Read RIT TRANZ reviews on Google" className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-[#071a3d]/80 px-4 py-3 backdrop-blur-md transition hover:border-white/35 hover:bg-[#071a3d]">
            <span className="flex tracking-wider text-[#e00016]">★★★★★</span>
            <span className="h-5 w-px bg-white/20" />
            <span className="text-xs font-bold text-white">5-star rating across Bristol</span>
          </a>
        </div>


        <QuoteForm />
      </div>
      <PromisesBar />
    </section>
  );
}
