import Link from "next/link";

import { faqPageCategories } from "@/components/landing/data";
import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import { Container } from "@/components/landing/ui/container";
import { FaqCategorySection } from "@/components/landing/ui/faq-category-section";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";
import { siteConfig } from "@/lib/site-config";

export function FaqPage() {
  return (
    <>
      <TopNav />
      <main className="bg-surface pb-20 pt-32">
        <Container className="max-w-5xl px-6">
          <header className="mb-16 text-center md:text-left">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Asistență clienți
            </span>
            <h1 className="mb-6 font-headline text-4xl font-extrabold leading-tight text-secondary md:text-6xl">
              Întrebări Frecvente
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant">
              Tot ce trebuie să știi despre experiența ta de parcare la DaCars.
              Siguranța și confortul tău rămân prioritare în fiecare etapă, de
              la rezervare până la întoarcerea din călătorie.
            </p>
          </header>

          <div className="space-y-20">
            {faqPageCategories.map((category) => (
              <FaqCategorySection key={category.title} {...category} />
            ))}
          </div>

          <section className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between rounded-xl bg-primary-container/10 p-8">
              <div>
                <h2 className="mb-2 font-headline text-xl font-bold text-primary">
                  Nu ai găsit răspunsul?
                </h2>
                <p className="mb-6 text-on-surface-variant">
                  Echipa noastră este disponibilă 24/7 și te ajută rapid cu
                  rezervări, transfer, acces în parcare sau orice alt detaliu
                  de care ai nevoie.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-lg bg-secondary px-6 py-2 text-sm font-bold text-on-secondary transition-transform active:scale-95"
                  href={`tel:${siteConfig.phoneHref}`}
                >
                  Sună-ne
                </a>
                <a
                  className="rounded-lg border border-outline/20 px-6 py-2 text-sm font-bold text-secondary transition-transform active:scale-95"
                  href={`mailto:${siteConfig.email}`}
                >
                  Email Support
                </a>
              </div>
            </div>

            <div className="relative min-h-[200px] overflow-hidden rounded-xl bg-secondary">
              <ResponsiveImage
                alt="Membru al echipei DaCars care asistă un client în fața parcării"
                className="opacity-60"
                sizes="(max-width: 768px) 100vw, 50vw"
                src="/images/airport-personal.png"
                wrapperClassName="absolute inset-0"
              />
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="font-headline text-2xl font-black uppercase italic tracking-tighter text-white">
                  Călătorie fără griji
                </h3>
                <p className="text-sm text-white/80">
                  Rezervă din timp și economisește timp în ziua plecării.
                </p>
                <Link
                  className="mt-5 inline-flex w-fit rounded-lg bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:bg-surface-container-low"
                  href="/"
                >
                  Rezervă Loc
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
