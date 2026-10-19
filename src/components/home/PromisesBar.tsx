import Icon, { type IconName } from "../icons/Icon";

export default function PromisesBar() {
  return (
    <div className="relative z-10 border-t border-white/15 bg-[#102d5f]">
      <div className="mx-auto max-w-[1240px] px-5 py-7 text-white sm:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">Our Promises and What’s Covered</h2>
        <div className="mt-6 grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
          {[
            ["shield", "£2M", "Public Liability Insurance"],
            ["box", "£15K", "Goods in Transit"],
            ["shield", "FULLY LEGAL", "Licensed & Insured"],
            ["map", "PROUDLY", "Bristol & surrounding areas"],
          ].map(([icon, value, label]) => (
            <div key={label} className="flex flex-col items-center px-3 py-3 text-center sm:px-5">
              <span className="mb-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white"><Icon name={icon as IconName} size={19} /></span>
              <strong className="block text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">{value}</strong>
              <span className="mt-1 text-xs font-bold text-[#ff5968] sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
