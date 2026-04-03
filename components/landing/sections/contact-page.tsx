import type { ReactNode } from "react";

import { absoluteUrl, siteConfig } from "@/lib/site-config";

import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import { Container } from "@/components/landing/ui/container";
import { ContactInfoCard } from "@/components/landing/ui/contact-info-card";
import { ContactSocialLink } from "@/components/landing/ui/contact-social-link";
import { MapEmbed } from "@/components/landing/ui/map-embed";
import { MaterialIcon } from "@/components/landing/ui/material-icon";
import Link from "next/link";

type ContactInfoCardData = {
  content: ReactNode;
  footer?: ReactNode;
  icon: string;
  title: string;
};

const contactInfoCards: ContactInfoCardData[] = [
  {
    content: (
      <p className="leading-relaxed">
        {siteConfig.address.streetAddress},
        <br />
        {siteConfig.address.locality}, {siteConfig.address.region}, Romania
      </p>
    ),
    icon: "location_on",
    title: "Adresa Noastră",
  },
  {
    content: (
      <p className="text-lg font-bold text-on-surface"><Link href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</Link></p>
    ),
    footer: (
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Disponibil 24/7
      </p>
    ),
    icon: "call",
    title: "Telefon",
  },
  {
    content: <p className="text-lg font-bold text-on-surface">{siteConfig.email}</p>,
    footer: (
      <p className="text-sm text-on-surface-variant/60">
        Răspundem în max. 2 ore
      </p>
    ),
    icon: "mail",
    title: "Email",
  },
];

const socialLinks = [
  {
    ariaLabel: "Recenzii",
    href: siteConfig.googleMapsUrl ?? absoluteUrl("/"),
    icon: "share_reviews",
  },
  {
    ariaLabel: "Website",
    href: absoluteUrl("/"),
    icon: "public",
  },
  {
    ariaLabel: "Facebook",
    href: siteConfig.socialFacebookUrl ?? absoluteUrl("/"),
    icon: "thumb_up",
  },
] as const;

export function ContactPage() {
  return (
    <>
      <TopNav />
      <main className="relative overflow-hidden bg-surface pb-20 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-1/3 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0, 109, 65, 0.05) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />

        <Container className="max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h1 className="mb-6 font-headline text-5xl font-extrabold leading-tight tracking-tight text-on-surface md:text-6xl">
              Suntem aici să <span className="italic text-primary">te ajutăm</span>.
            </h1>
            <p className="text-lg font-medium leading-relaxed text-on-surface-variant">
              Fie că ai întrebări despre rezervări sau vrei să afli mai multe
              despre serviciile noastre de parcare pe termen lung, echipa DaCars
              este la dispoziția ta.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {contactInfoCards.map((card) => (
              <ContactInfoCard
                key={card.title}
                footer={card.footer}
                icon={card.icon}
                title={card.title}
              >
                {card.content}
              </ContactInfoCard>
            ))}
          </div>

          <section className="mb-20 flex flex-col items-center justify-between gap-6 rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <MaterialIcon className="text-primary" name="hub" />
              <span className="font-headline text-lg font-bold text-on-surface">
                Rămâneți conectați cu noi prin social media:
              </span>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <ContactSocialLink key={link.ariaLabel} {...link} />
              ))}
            </div>
          </section>

          <section className="group relative overflow-hidden rounded-3xl border border-outline-variant/20 shadow-2xl">
            <div className="pointer-events-none absolute inset-0 z-10 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-5" />
            <div className="relative flex h-[500px] w-full items-center justify-center bg-surface-container-highest">
              <MapEmbed
                className="absolute inset-0 h-full w-full"
                title="Hartă Google Maps cu locația DaCars Long Term Parking din Otopeni"
              />
              <div className="absolute inset-0 bg-white/10" />

              <div className="absolute bottom-10 left-6 right-6 z-20 max-w-sm rounded-2xl border border-white/50 bg-white/95 p-8 shadow-2xl backdrop-blur-xl md:left-10 md:right-auto">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
                    <MaterialIcon className="text-2xl" name="local_parking" />
                  </div>
                  <div>
                    <h2 className="font-headline text-lg font-extrabold leading-tight text-on-surface">
                      DaCars Long Term Parking
                    </h2>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      Suntem chiar aici
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-sm font-medium leading-relaxed text-on-surface-variant">
                  Situați strategic pe {siteConfig.address.streetAddress}, la doar
                  5 minute de terminalul principal al Aeroportului Henri Coandă.
                </p>
                <a
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary/5 px-4 py-3 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary/10"
                  href={siteConfig.googleMapsUrl ?? "https://maps.google.com"}
                  rel="noreferrer"
                  target="_blank"
                >
                  Navighează cu Google Maps
                  <MaterialIcon className="text-sm" name="open_in_new" />
                </a>
              </div>

              <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute -inset-2 h-12 w-12 rounded-full bg-primary opacity-20 animate-ping" />
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-xl ring-4 ring-white/30">
                    <MaterialIcon className="text-lg" name="location_on" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
