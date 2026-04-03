type SavingsStatCardProps = {
  caption: string;
  label: string;
  value: string;
};

export function SavingsStatCard({
  caption,
  label,
  value,
}: SavingsStatCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
      <p className="mb-2 text-sm uppercase tracking-widest text-secondary-fixed">
        {label}
      </p>
      <p className="text-3xl font-bold">{value}</p>
      <p className="mt-2 text-xs text-white/60">{caption}</p>
    </div>
  );
}
