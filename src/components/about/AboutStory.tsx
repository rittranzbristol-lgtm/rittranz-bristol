export default function AboutStory() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2 lg:items-center">
        {/* Phones get a tall crop; tablets and desktops get the squarer one. */}
        <picture className="block">
          <source media="(max-width: 639px)" srcSet="/assets/about-story-phone.jpg" />
          <img className="h-[620px] w-full rounded-[28px] object-cover" src="/assets/about-story-desktop.jpg" alt="RIT TRANZ van parked on a sunny Bristol high street" loading="lazy" />
        </picture>
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-[#d10014]">THE STORY BEHIND RIT TRANZ</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">A better way to move in Bristol.</h2>
          <p className="mt-6 leading-8 text-[#465269]">Finding a reliable van service in Bristol used to be a gamble. On one end of the market, there are uninsured, fly-by-night operators who quote a cheap price upfront, only to hit you with hidden fees and bait-and-switch tactics on moving day. On the other end are massive removal companies charging premium rates for huge trucks and packing crews you simply don&apos;t need for a flat move or store pickup.</p>
          <p className="mt-5 leading-8 text-[#465269]">Rit Tranz was created to solve this exact problem. We realized that most people don&apos;t need to overpay a huge moving company—they just need a clean, fully insured van, the right equipment, and a professional driver. By having you or a friend lend a hand with the heavy lifting, we cut out the massive overhead costs of big removal companies and pass those savings directly to you. The result? A premium, hassle-free man and van service with fair, transparent pricing, and absolutely zero surprises.</p>
        </div>
      </div>
    </section>
  );
}
