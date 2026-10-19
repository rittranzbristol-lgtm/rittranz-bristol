import { useState } from "react";
import { faqWhatsAppUrl, homeFaqs } from "../../data/home";
import Icon from "../icons/Icon";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="border-y border-[#dfe4ec] bg-[#f6f3ee] px-5 py-24 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow">BEFORE WE ROLL</p>
          <h2 className="section-title mt-4">A few useful answers.</h2>
          <p className="mt-5 max-w-sm text-base font-medium leading-7 text-[#263653]">Still unsure? Send a photo and postcode on WhatsApp.</p>
          <a href={faqWhatsAppUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#e00016] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#071a3d]/10 transition hover:bg-[#071a3d]">Ask on WhatsApp <Icon name="arrow" size={18} /></a>
        </div>
        <div className="divide-y divide-[#cfd5df] border-y border-[#cfd5df]">
          {homeFaqs.map(({ question, answer }, index) => (
            <details key={question} className="group py-6" open={openFaq === index}>
              <summary
                className="flex cursor-pointer list-none items-start justify-between gap-4"
                onClick={(event) => {
                  event.preventDefault();
                  setOpenFaq(openFaq === index ? null : index);
                }}
              >
                <h3 className="text-xl font-semibold leading-7">{question}</h3>
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#d10014]/20 text-xl text-[#d10014] transition group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pt-4 text-[15px] leading-7 text-[#263653]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
