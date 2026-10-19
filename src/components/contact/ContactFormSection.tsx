import { FormEvent } from "react";
import { formatDate, openWhatsApp } from "../../utils/whatsapp";
import ArrowIcon from "../icons/ArrowIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export default function ContactFormSection() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    openWhatsApp([
      "Hi RIT TRANZ, I'd like a free quote.",
      `Name: ${value("name") || "Not provided"}`,
      `Phone number: ${value("phone") || "Not provided"}`,
      `Service: ${value("service")}`,
      `Pickup postcode: ${value("pickup") || "Not provided"}`,
      `Drop-off postcode: ${value("dropoff") || "Not provided"}`,
      `Preferred date: ${formatDate(value("date")) || "Flexible"}`,
      `Pickup access: ${value("access") || "Not provided"}`,
      `Loading help: ${value("loading") || "Not provided"}`,
      `What are we moving: ${value("details") || "Not provided"}`,
    ]);
  }

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <aside>
          <p className="text-[10px] font-bold tracking-[0.18em] text-[#d10014]">YOUR MOVE, MAPPED OUT</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Tell us the whole job, not just the postcode.</h2>
          <p className="mt-5 leading-7 text-[#5f687b]">The right details help us choose the correct vehicle, allow enough time and give you a price we can stand behind.</p>
          <div className="mt-8 rounded-2xl bg-[#071a3d] p-6 text-white">
            <span className="text-[10px] font-bold tracking-[0.15em] text-[#ff5968]">PREFER WHATSAPP?</span>
            <p className="mt-3 text-sm leading-6 text-white/65">Send your postcodes, a list of items and a few photos directly. We normally reply within minutes during working hours.</p>
            <a href="https://wa.me/447584201972" className="mt-5 flex items-center justify-between rounded-xl bg-[#e00016] px-5 py-4 text-sm font-bold">Open WhatsApp <ArrowIcon /></a>
          </div>
          <p className="mt-4 text-xs leading-5 text-[#697386]">No payment is taken through this form. We confirm availability and price with you first.</p>
        </aside>

        <form onSubmit={submit} className="rounded-[28px] border border-[#dfe4ec] bg-white p-7 shadow-xl shadow-[#071a3d]/5 sm:p-9">
          <div className="mb-8 flex items-start justify-between border-b border-[#dfe4ec] pb-6">
            <div><span className="text-[10px] font-bold tracking-[0.16em] text-[#d10014]">QUICK QUOTE FORM</span><h2 className="mt-2 text-3xl font-semibold">Tell us what needs moving</h2></div>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f2f5fa] text-sm font-bold text-[#d10014]">01</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="contact-field"><span>Your name *</span><input name="name" required placeholder="Full name" /></label>
            <label className="contact-field"><span>Phone number *</span><input name="phone" required type="tel" placeholder="07..." /></label>
            <label className="contact-field"><span>Service needed *</span><select name="service"><option>Home or flat move</option><option>Item pickup</option><option>Waste clearance</option><option>Self-storage move</option></select></label>
            <label className="contact-field"><span>Preferred date</span><input name="date" type="date" /></label>
            <label className="contact-field"><span>Pickup postcode *</span><input name="pickup" required placeholder="e.g. BS1 5TY" /></label>
            <label className="contact-field"><span>Drop-off postcode</span><input name="dropoff" placeholder="e.g. BS8 2PS" /></label>
            <label className="contact-field"><span>Pickup access</span><select name="access"><option>Ground floor / easy access</option><option>Stairs</option><option>Lift available</option><option>Restricted parking</option><option>Not sure</option></select></label>
            <label className="contact-field"><span>Loading help</span><select name="loading"><option>I can help load</option><option>I need loading help</option><option>Not sure yet</option></select></label>
            <label className="contact-field sm:col-span-2"><span>What are we moving? *</span><textarea name="details" required rows={5} placeholder="List the main items, floors, access or anything else we should know" /></label>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[#dfe4ec] pt-6 sm:flex-row">
            <p className="max-w-sm text-xs leading-5 text-[#697386]">By continuing, WhatsApp opens with your quote details ready to send.</p>
            <button className="flex w-full shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#e00016] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#071a3d] sm:w-auto"><WhatsAppIcon /> Continue on WhatsApp</button>
          </div>
        </form>
      </div>
    </section>
  );
}
