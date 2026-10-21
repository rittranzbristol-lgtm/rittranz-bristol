import Icon from "../icons/Icon";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-[#071a3d] px-5 py-24 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-[500px] overflow-hidden rounded-[28px]">
          <img className="absolute inset-0 h-full w-full object-cover" src="/assets/bristol-van-st-nicholas-markets.jpg" alt="RIT TRANZ van on a narrow street by St Nicholas Markets, Bristol" />
          <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="group absolute bottom-5 left-5 right-5 rounded-2xl bg-white p-5 text-[#071a3d] shadow-xl transition hover:-translate-y-1 hover:bg-[#e00016] hover:text-white sm:right-auto sm:w-[310px]" aria-label="Message RIT TRANZ on WhatsApp for a same-day slot">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#e00016] text-white transition group-hover:bg-white group-hover:text-[#071a3d]"><Icon name="whatsapp" size={22} /></span>
              <div><strong className="block text-base">Need us today?</strong><span className="mt-1 block text-sm font-semibold text-[#465269] transition group-hover:text-white">Message us on WhatsApp</span></div>
              <Icon name="arrow" size={18} />
            </div>
          </a>
        </div>
        <div>
          <p className="eyebrow text-[#e00016]">HOW IT WORKS</p>
          <h2 className="section-title mt-4 max-w-[560px] text-white">Booked in minutes. Moved without the stress.</h2>
          <div className="relative mt-10 space-y-3 before:absolute before:bottom-5 before:left-10 before:top-5 before:w-px before:bg-white/20">
            {[
              ["01", "Tell us about the job", "Share what is moving, your locations and preferred date."],
              ["02", "Get a clear, fair quote", "We will confirm your price upfront, with no surprise charges."],
              ["03", "We arrive and get it done", "Your friendly local driver arrives on time and ready to help."],
            ].map(([number, title, text]) => (
              <div key={number} className="relative z-10 flex gap-5 rounded-2xl border border-white/10 bg-[#071a3d] p-5 transition hover:bg-[#102d5f]">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-[#102d5f] text-sm font-bold text-[#ff5968]">{number}</span>
                <div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/60">{text}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a href="#quote" className="inline-flex items-center gap-3 rounded-full bg-[#e00016] px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#071a3d]">Start your quote <Icon name="arrow" size={18} /></a>
            <p className="whitespace-nowrap text-xs font-semibold leading-5 text-white/75 sm:text-sm">Free quote&nbsp;&nbsp;·&nbsp;&nbsp;No obligation&nbsp;&nbsp;·&nbsp;&nbsp;Replies in minutes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
