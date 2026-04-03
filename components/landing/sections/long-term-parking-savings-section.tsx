import { longTermParkingSavingsStats } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { SavingsStatCard } from "@/components/landing/ui/savings-stat-card";

export function LongTermParkingSavingsSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-white">
      <div className="absolute right-0 top-0 h-full w-1/3 -translate-x-[-50%] skew-x-[-12deg] bg-primary/10" />
      <Container className="relative z-10 px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-headline text-4xl font-extrabold">
              Economie reală
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-secondary-fixed">
              Comparativ cu parcările din aeroport, tarifele noastre sunt
              proiectate pentru a sprijini bugetul călătorilor frecvenți.
            </p>
            <div className="inline-flex items-center gap-4 rounded-xl border border-white/10 bg-white/10 p-6 text-2xl font-bold">
              <MaterialIcon className="text-primary-container" name="savings" />
              <span>Economisești semnificativ pentru 7, 10 sau 14 zile.</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {longTermParkingSavingsStats.map((stat) => (
              <SavingsStatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
