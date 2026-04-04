import type { ReactNode } from "react";

import Link from "next/link";

import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import { Container } from "@/components/landing/ui/container";

type DetailItem = {
  label: string;
  value: ReactNode;
};

type PolicySubsection = {
  items: ReactNode[];
  title: string;
};

type PolicySection = {
  body?: ReactNode[];
  notes?: ReactNode[];
  subsections?: PolicySubsection[];
  title: string;
};

const controllerDetails: DetailItem[] = [
  {
    label: "Operator",
    value: "DELTA FLOT SRL",
  },
  {
    label: "Sediu",
    value: "STR. DEMNITATII 27, SECTORUL 1, BUCUREȘTI, România",
  },
  {
    label: "CUI",
    value: "51149156",
  },
  {
    label: "E-mail",
    value: (
      <Link
        className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
        href="mailto:contact@dapark.ro"
      >
        contact@dapark.ro
      </Link>
    ),
  },
  {
    label: "Telefon",
    value: (
      <Link
        className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
        href="tel:0723817551"
      >
        0723 817 551
      </Link>
    ),
  },
];

const policySections: PolicySection[] = [
  {
    title: "1. Cine suntem",
    notes: [
      "DELTA FLOT SRL este operatorul datelor tale cu caracter personal.",
    ],
  },
  {
    title: "2. Ce date personale colectăm",
    body: [
      "Colectăm doar acele date personale necesare pentru furnizarea serviciilor noastre de rezervare și parcare.",
    ],
    notes: [
      "DELTA FLOT SRL nu accesează și nu stochează detalii ale cardurilor bancare. Acestea sunt gestionate exclusiv de procesatorii de plăți, precum Netopia sau Stripe.",
    ],
    subsections: [
      {
        title: "2.1. Date furnizate direct de tine",
        items: [
          "Numele și prenumele",
          "Denumirea companiei și CUI, pentru persoane juridice",
          "Adresa",
          "Numărul de telefon",
          "Adresa de e-mail",
          "Numărul de înmatriculare auto",
          "Informații privind rezervarea, precum dată, oră, perioadă și status",
        ],
      },
      {
        title: "2.2. Date colectate automat",
        items: [
          "Informații privind accesul în parcare, inclusiv cod QR, ora intrării sau ieșirii și log-uri ale barierelor",
          "Imagini video din sistemul CCTV, pentru siguranță și prevenirea incidentelor",
          "Adresa IP, date tehnice și date privind utilizarea site-ului",
        ],
      },
      {
        title: "2.3. Date colectate prin terți",
        items: [
          "Putem primi date despre tine de la companii partenere cu care colaborezi și care utilizează serviciile noastre, de exemplu companii de mobilitate sau firme de închirieri auto.",
        ],
      },
    ],
  },
  {
    title: "3. Scopurile prelucrării",
    body: [
      "Datele tale sunt prelucrate doar pentru scopuri legitime, clar definite:",
    ],
    notes: [
      "Nu utilizăm datele tale în scopuri care nu sunt legate de furnizarea serviciilor DELTA FLOT SRL.",
    ],
    subsections: [
      {
        title: "Scopuri principale",
        items: [
          "Gestionarea și procesarea rezervărilor",
          "Asigurarea accesului automatizat în parcare",
          "Procesarea și confirmarea plăților",
          "Transmiterea notificărilor legate de rezervare sau funcționarea serviciului",
          "Îndeplinirea obligațiilor legale, fiscale, contabile și arhivistice",
          "Asigurarea securității prin sisteme CCTV",
          "Prevenirea fraudelor și gestionarea incidentelor",
          "Apărarea împotriva reclamațiilor sau solicitărilor",
          "Activități administrative și operaționale necesare pentru buna funcționare a serviciului",
        ],
      },
    ],
  },
  {
    title: "4. Baza legală a prelucrării",
    body: [
      "Datele sunt prelucrate în baza următoarelor temeiuri legale:",
    ],
    subsections: [
      {
        title: "Temeiuri legale",
        items: [
          "Executarea unui contract, pentru furnizarea serviciilor de rezervare și parcare, conform art. 6 alin. (1) lit. b din GDPR",
          "Îndeplinirea unei obligații legale, în special în domeniul fiscal și contabil, conform art. 6 alin. (1) lit. c din GDPR",
          "Interesul legitim, pentru asigurarea securității, prevenirea fraudelor și administrarea eficientă a serviciilor, conform art. 6 alin. (1) lit. f din GDPR",
          "Consimțământul tău, doar pentru activități de marketing, dacă este aplicabil",
        ],
      },
    ],
  },
  {
    title: "5. Durata de stocare a datelor",
    body: [
      "Păstrăm datele tale doar atât timp cât este necesar pentru scopurile pentru care au fost colectate:",
    ],
    notes: [
      "În cazul unui litigiu sau al unei solicitări oficiale, anumite date pot fi păstrate până la finalizarea procedurilor legale.",
    ],
    subsections: [
      {
        title: "Perioade de păstrare",
        items: [
          "Date de rezervare și facturare: 5 ani, conform legislației fiscale",
          "Imagini CCTV: 30 de zile, cu excepția cazurilor în care sunt implicate incidente",
          "Log-uri de acces: între 30 și 180 de zile",
          "Date transmise prin formulare de contact sau rezervare: pe durata relației contractuale",
        ],
      },
    ],
  },
  {
    title: "6. Cui transmitem datele tale",
    body: [
      "Datele tale pot fi transmise doar către următoarele categorii de destinatari:",
    ],
    notes: [
      "Nu vindem și nu divulgăm datele tale în scopuri comerciale.",
    ],
    subsections: [
      {
        title: "Destinatari",
        items: [
          "Furnizori de servicii IT, hosting și mentenanță",
          "Procesatori de plăți, precum Netopia sau Stripe",
          "Furnizori de sisteme de acces și securitate",
          "Societăți partenere implicate în prestarea serviciului",
          "Autorități publice, în baza unei obligații legale",
        ],
      },
    ],
  },
  {
    title: "7. Locația stocării datelor",
    body: [
      "Datele tale sunt stocate pe servere aflate în Uniunea Europeană. Nu transferăm datele în afara Spațiului Economic European, cu excepția cazurilor în care sunt aplicabile garanții adecvate de protecție, conform GDPR.",
    ],
  },
  {
    title: "8. Securitatea datelor",
    body: [
      "DELTA FLOT SRL implementează măsuri tehnice și organizatorice adecvate pentru a asigura protecția datelor tale:",
    ],
    subsections: [
      {
        title: "Măsuri de securitate",
        items: [
          "Criptarea traficului de date pe site, prin HTTPS",
          "Control riguros al accesului la informații",
          "Utilizarea responsabilă a sistemelor de supraveghere CCTV",
          "Copii de rezervă securizate",
          "Politici interne privind confidențialitatea, aplicabile personalului",
        ],
      },
    ],
  },
  {
    title: "9. Drepturile tale",
    body: [
      "În conformitate cu legislația aplicabilă, ai următoarele drepturi privind datele tale personale:",
    ],
    notes: [
      <>
        Pentru exercitarea acestor drepturi, ne poți contacta la{" "}
        <Link
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
          href="mailto:contact@dapark.ro"
        >
          contact@dapark.ro
        </Link>
        .
      </>,
    ],
    subsections: [
      {
        title: "Drepturi GDPR",
        items: [
          "Dreptul de acces la datele tale",
          "Dreptul la rectificarea datelor inexacte",
          "Dreptul la ștergerea datelor, dreptul de a fi uitat",
          "Dreptul de a restricționa prelucrarea",
          "Dreptul la portabilitatea datelor",
          "Dreptul de opoziție, în cazul prelucrării în interes legitim sau în scopuri de marketing direct",
          "Dreptul de a depune o plângere la ANSPDCP, Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal",
          "Dreptul de a-ți retrage consimțământul în orice moment, dacă prelucrarea se bazează pe consimțământ",
        ],
      },
    ],
  },
  {
    title: "10. Politica privind prelucrarea datelor minorilor",
    body: [
      "Serviciile DELTA FLOT SRL nu sunt destinate minorilor, iar compania nu colectează cu bună știință date cu caracter personal de la persoane sub 18 ani.",
    ],
  },
  {
    title: "11. Politica privind cookie-urile",
    body: [
      "Site-ul nostru folosește module cookie pentru funcționare, analiză și, dacă este cazul, pentru marketing. Acestea pot include cookie-uri esențiale, de performanță, de analiză și cookie-uri ale terților.",
      <>
        Pentru detalii complete privind tipurile de cookie-uri utilizate și
        modul în care îți poți gestiona preferințele, consultă{" "}
        <Link
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
          href="/politica-de-cookie-uri"
        >
          Politica de Cookie-uri
        </Link>{" "}
        disponibilă pe site-ul nostru.
      </>,
    ],
  },
  {
    title: "12. Linkuri externe",
    body: [
      "Site-ul poate conține linkuri către alte website-uri. DELTA FLOT SRL nu este responsabilă pentru conținutul și politicile acestora de confidențialitate sau securitate.",
    ],
  },
  {
    title: "13. Modificarea politicii",
    body: [
      "Ne rezervăm dreptul de a actualiza prezenta Politică de Confidențialitate oricând. Orice modificare va fi publicată pe site, cu indicarea datei actualizării.",
      "Te încurajăm să consulți periodic această pagină pentru a rămâne informat cu privire la modul în care îți protejăm datele.",
    ],
  },
];

export function PrivacyPolicyPage() {
  return (
    <>
      <TopNav />
      <main className="relative overflow-hidden bg-surface pb-20 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,_rgba(26,54,97,0.1),_transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-56 -z-10 h-72 w-72 rounded-full bg-primary-fixed-dim/25 blur-3xl"
        />

        <Container className="max-w-5xl">
          <div className="mb-10 rounded-[32px] border border-outline-variant/20 bg-white/90 p-8 shadow-[0_20px_60px_rgba(28,27,27,0.08)] backdrop-blur-sm md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Ultima actualizare
            </p>
            <h1 className="max-w-3xl font-headline text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Politică de confidențialitate
            </h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
              Noiembrie 2025
            </p>
            <p className="mt-5 text-base leading-8 text-on-surface-variant">
              Această Politică de Confidențialitate explică modul în care DELTA
              FLOT SRL colectează, utilizează, stochează și protejează datele
              tale cu caracter personal atunci când utilizezi site-ul nostru și
              serviciile de parcare.
            </p>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              Ne angajăm să respectăm confidențialitatea și securitatea datelor
              personale, în conformitate cu Regulamentul (UE) 2016/679, GDPR, și
              legislația aplicabilă din România.
            </p>
          </div>

          <article className="space-y-8">
            <section className="rounded-[28px] border border-outline-variant/20 bg-white p-8 shadow-[0_16px_40px_rgba(28,27,27,0.06)] md:p-10">
              <h2 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
                1. Cine suntem
              </h2>

              <dl className="mt-8 grid gap-4 md:grid-cols-2">
                {controllerDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="rounded-2xl border border-outline-variant/15 bg-surface-container-low px-5 py-4"
                  >
                    <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-on-surface-variant">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-7 text-on-surface-variant">
                DELTA FLOT SRL este operatorul datelor tale cu caracter personal.
              </div>
            </section>

            {policySections.slice(1).map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-outline-variant/20 bg-white p-8 shadow-[0_16px_40px_rgba(28,27,27,0.06)] md:p-10"
              >
                <h2 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
                  {section.title}
                </h2>

                {section.body?.length ? (
                  <div className="mt-6 space-y-4">
                    {section.body.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${section.title}-${paragraphIndex}`}
                        className="text-sm leading-7 text-on-surface-variant md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.subsections?.length ? (
                  <div className="mt-8 space-y-5">
                    {section.subsections.map((subsection) => (
                      <div
                        key={subsection.title}
                        className="rounded-2xl border border-outline-variant/15 bg-surface-container-low px-5 py-4"
                      >
                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                          {subsection.title}
                        </h3>
                        <ul className="mt-4 space-y-2 pl-4 text-sm leading-7 text-on-surface-variant">
                          {subsection.items.map((item) => (
                            <li key={String(item)} className="list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.notes?.length ? (
                  <div className="mt-6 space-y-3">
                    {section.notes.map((note, noteIndex) => (
                      <div
                        key={`${section.title}-note-${noteIndex}`}
                        className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-7 text-on-surface-variant"
                      >
                        {note}
                      </div>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </article>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
