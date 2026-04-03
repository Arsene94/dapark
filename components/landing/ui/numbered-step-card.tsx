type NumberedStepCardProps = {
  description: string;
  step: number;
  title: string;
};

export function NumberedStepCard({
  description,
  step,
  title,
}: NumberedStepCardProps) {
  return (
    <div className="relative z-10 flex max-w-[200px] flex-col items-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-2xl font-bold text-primary shadow-xl">
        {step}
      </div>
      <h4 className="mb-2 font-headline text-lg font-bold">{title}</h4>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  );
}
