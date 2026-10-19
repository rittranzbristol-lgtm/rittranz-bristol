export default function ContactMethods() {
  return (
    <section className="bg-[#071a3d] px-5 pb-16 text-white sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-3">
        {[
          ["EMAIL", "info@rittranz.co.uk", "Send job details any time"],
          ["CALL", "07584 201972", "For urgent and same-day work"],
          ["WHATSAPP", "Message us now", "Usually the quickest response"],
        ].map(([label, value, detail], index) => (
          <a key={label} href={index === 0 ? "mailto:info@rittranz.co.uk" : index === 1 ? "tel:+447584201972" : "https://wa.me/447584201972"} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10">
            <span className="text-[10px] font-bold tracking-[0.16em] text-[#ff5968]">{label}</span>
            <strong className="mt-2 block text-lg">{value}</strong>
            <span className="mt-1 block text-xs text-white/50">{detail}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
