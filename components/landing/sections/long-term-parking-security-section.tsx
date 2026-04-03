import { longTermParkingSecurityHighlights } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { IconDetailRow } from "@/components/landing/ui/icon-detail-row";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function LongTermParkingSecuritySection() {
  return (
    <section className="py-24">
      <Container className="px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <div className="order-2 lg:w-1/2 lg:order-1">
            <div className="relative">
              <ResponsiveImage
                alt="Security camera"
                sizes="(max-width: 1024px) 100vw, 50vw"
                src="/images/long-term-parking-otopeni/security-camera.png"
                wrapperClassName="h-[400px] w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 max-w-xs rounded-xl bg-white p-6 shadow-lg">
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                  <span className="font-bold text-secondary">
                    Live Monitoring 24/7
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Sistem de monitorizare activ în fiecare secundă a zilei.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:w-1/2 lg:order-2">
            <h2 className="mb-8 font-headline text-4xl font-extrabold text-secondary">
              Siguranță completă
            </h2>
            <div className="space-y-8">
              {longTermParkingSecurityHighlights.map((item) => (
                <IconDetailRow
                  key={item.title}
                  description={item.description}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
