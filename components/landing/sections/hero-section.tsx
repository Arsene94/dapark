import dynamic from "next/dynamic";

import { seoLandingLinks } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";
import { SeoLandingLinks } from "@/components/landing/ui/seo-landing-links";

const BookingWidget = dynamic(
    () => import("@/components/landing/booking-widget").then((m) => m.BookingWidget),
    {
      loading: () => <div className="rounded-lg border p-6">Se încarcă formularul...</div>,
    }
);

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-8 pb-20 pt-32">
      <Container className="grid items-center gap-12 px-0 lg:grid-cols-12">
        <div className="z-10 space-y-8 lg:col-span-6">
          <h1 className="font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-berkeley-blue md:text-7xl">
            Acasă, pe roți sigure.{" "}
            <span className="text-jade-green">Parcare pe termen lung.</span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-on-surface-variant">
            Rapiditate, umanitate și încredere la Aeroport Otopeni. Te preluăm
            direct din aeroport în maxim 5 minute.
          </p>
          <BookingWidget />
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant">
              Ghiduri utile
            </p>
            <SeoLandingLinks items={seoLandingLinks} />
          </div>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative">
            <ResponsiveImage
                alt="high-angle shot of a premium organized parking lot at dusk"
                preload
                sizes="(max-width: 1024px) 340px, 284px"
                src="/images/homepage/hero.webp"
                wrapperClassName="w-full max-w-[340px] lg:max-w-[284px] overflow-hidden rounded-lg shadow-2xl lg:rotate-2"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-berkeley-blue/40 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 z-20 flex max-w-xs items-center gap-4 rounded-lg bg-white p-6 shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
              <MaterialIcon className="text-primary" name="security" />
            </div>
            <div>
              <p className="font-bold text-on-surface">Siguranță garantată</p>
              <p className="text-xs text-on-surface-variant">
                Monitorizare video 24/7 și pază umană
              </p>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute right-0 top-0 -z-10 opacity-10">
        <svg
          fill="none"
          height="600"
          viewBox="0 0 600 600"
          width="600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" fill="url(#paint0_linear)" r="300" />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear"
              x1="0"
              x2="600"
              y1="0"
              y2="600"
            >
              <stop stopColor="#38B275" />
              <stop offset="1" stopColor="#1A3661" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
