import { bucharestLongTermParkingTravelerTypes } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function BucharestLongTermParkingTravelTypesSection() {
  return (
    <section className="relative bg-surface-container-low py-24">
      <Container className="px-6">
        <h2 className="mb-16 text-center font-headline text-4xl font-bold tracking-tight">
          Pentru orice tip de călător
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {bucharestLongTermParkingTravelerTypes.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl bg-surface-container-lowest p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
                <MaterialIcon
                  className="text-3xl text-primary transition-colors group-hover:text-white"
                  name={item.icon}
                />
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">
                {item.title}
              </h3>
              <p className="leading-relaxed text-zinc-500">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
