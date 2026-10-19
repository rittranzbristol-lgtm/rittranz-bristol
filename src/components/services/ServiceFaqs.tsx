import { useState } from "react";
import { serviceFaqs } from "../../data/services";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function ServiceFaqs() {
  const [openServiceFaq, setOpenServiceFaq] = useState<number | null>(0);

  return (
    <section className="border-b border-[#dfe4ec] bg-[#f6f3ee] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-[820px]">
          <p className="text-xs font-bold tracking-[0.18em] text-[#d10014]">SERVICE FAQS</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Man &amp; Van Bristol: Your Questions Answered</h2>
          <p className="mt-5 text-base leading-8 text-[#465269]">Quick answers about pricing, insurance, bookings, and waste clearance. Need something else?</p>
          <a href="https://wa.me/447584201972" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#e00016] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#071a3d]"><WhatsAppIcon /> Message me on WhatsApp for a fast reply.</a>
        </div>
        <div className="mt-12 grid gap-x-12 lg:grid-cols-2">
          {serviceFaqs.map(({ question, answer }, index) => (
            <details key={question} className="group border-t border-[#cfd5df] py-6 last:border-b lg:[&:nth-last-child(-n+2)]:border-b" open={openServiceFaq === index}>
              <summary
                className="flex cursor-pointer list-none items-start justify-between gap-4"
                onClick={(event) => {
                  event.preventDefault();
                  setOpenServiceFaq(openServiceFaq === index ? null : index);
                }}
              >
                <span className="flex gap-4">
                  <span className="pt-1 text-xs font-bold text-[#d10014]">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold leading-7">{question}</h3>
                </span>
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#d10014]/20 text-xl text-[#d10014] transition group-open:rotate-45">+</span>
              </summary>
              <p className="ml-10 max-w-xl pt-4 text-[15px] leading-7 text-[#263653]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
