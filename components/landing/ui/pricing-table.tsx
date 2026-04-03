import { pricingEntries } from "@/components/landing/data";

export function PricingTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
      <div className="grid grid-cols-2 bg-berkeley-blue px-6 py-5 text-white">
        <h3 className="font-headline text-lg font-bold">Număr zile</h3>
        <h3 className="text-right font-headline text-lg font-bold">Preț</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {pricingEntries.map((entry) => (
          <div
            key={entry.days}
            className="grid grid-cols-2 items-center gap-4 px-6 py-4 even:bg-slate-50"
          >
            <div className="text-sm font-semibold text-berkeley-blue">
              {entry.days}
            </div>
            <div className="text-right text-sm font-bold text-jade-green">
              {entry.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
