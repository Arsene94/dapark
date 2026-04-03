import { otopeniParkingFeatures } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconPanel } from "@/components/landing/ui/icon-panel";

export function OtopeniAirportFeaturesSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <Container className="px-6">
        <div className="mb-16">
          <h2 className="mb-6 font-headline text-3xl font-bold text-on-surface md:text-4xl">
            De ce să alegi parcarea noastră lângă Otopeni
          </h2>
          <p className="max-w-2xl text-lg text-on-surface-variant">
            Nu e doar o parcare. Este locul unde știi că îți lași mașina fără
            stres.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {otopeniParkingFeatures.map((feature) => (
            <IconPanel
              key={feature.title}
              className="rounded-xl border-b-4 border-transparent bg-surface-container-lowest p-8 transition-all hover:border-primary hover:bg-surface-bright"
              description={feature.description}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-surface-container-high p-8 text-center">
          <p className="font-semibold italic text-on-surface">
            &quot;Fie că pleci pentru câteva zile sau câteva săptămâni, ai
            garanția că mașina ta este în siguranță.&quot;
          </p>
        </div>
      </Container>
    </section>
  );
}
