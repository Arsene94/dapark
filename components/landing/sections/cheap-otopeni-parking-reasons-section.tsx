import { cheapOtopeniParkingFeatures } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconPanel } from "@/components/landing/ui/icon-panel";

export function CheapOtopeniParkingReasonsSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <Container className="px-6">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface">
              De ce este ieftină, dar bună
            </h2>
            <p className="mt-4 text-zinc-600">
              Prețul mic nu înseamnă compromis. Am optimizat fiecare aspect al
              afacerii noastre pentru a transfera economiile către tine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cheapOtopeniParkingFeatures.map((feature) => (
            <IconPanel
              key={feature.title}
              className="flex flex-col gap-6 rounded-xl bg-surface-container-lowest p-8 transition-all duration-300 hover:shadow-xl"
              description={feature.description}
              icon={feature.icon}
              iconWrapperClassName="bg-primary/10"
              title={feature.title}
              titleClassName="text-xl"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
