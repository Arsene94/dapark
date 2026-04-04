import type { ReactNode } from "react";

import Link from "next/link";

import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import { Container } from "@/components/landing/ui/container";

type CookieSection = {
  bullets?: ReactNode[];
  paragraphs?: ReactNode[];
  title: string;
};

const cookieSections: CookieSection[] = [
  {
    title: "1. Cine suntem",
    paragraphs: [
      "DELTA FLOT SRL este operatorul datelor tale cu caracter personal în contextul prestării serviciilor de parcare. Ne angajăm să prelucrăm datele tale în mod legal, echitabil și transparent, respectând prevederile Regulamentului (UE) 2016/679, GDPR, și legislația aplicabilă în România.",
    ],
  },
  {
    title: "2. Cum colectăm datele tale cu caracter personal",
    paragraphs: [
      "Datele pot fi colectate sau prelucrate în următoarele situații:",
    ],
    bullets: [
      "Când ni le furnizezi direct prin intermediul site-ului nostru, de exemplu formular de rezervare, e-mail, telefon sau alte canale de comunicare",
      "Când sunt transmise de către o companie cu care te afli în relații contractuale și care este clientul nostru",
      "Când sunt generate automat de sistemele noastre, precum accesul automatizat prin cod QR sau bariere, sistemele de supraveghere video, CCTV, și date tehnice privind utilizarea site-ului nostru",
    ],
  },
  {
    title: "3. Ce tipuri de date prelucrăm",
    paragraphs: [
      "În funcție de serviciile utilizate, putem prelucra următoarele categorii de date:",
    ],
    bullets: [
      "Date de identificare și contact: nume și prenume, pentru persoane juridice denumirea companiei și CUI, adresă poștală, număr de telefon și adresă de e-mail",
      "Date privind utilizarea serviciilor de parcare: numărul de înmatriculare al autovehiculului, detalii despre rezervare, data și ora intrării sau ieșirii și status, cod de acces sau cod QR și loguri de acces din sistemele de control al barierelor",
      "Date generate automat: imagini video surprinse de sistemul CCTV, adresa IP și localizarea aproximativă, precum și informații tehnice privind interacțiunea cu site-ul",
      "DELTA FLOT SRL nu are acces la datele cardului tău bancar. Plățile sunt procesate exclusiv prin intermediul unor procesatori autorizați, precum Netopia sau Stripe",
    ],
  },
  {
    title: "4. Scopurile și temeiurile legale ale prelucrării",
    paragraphs: [
      "Datele sunt prelucrate exclusiv în scopuri legitime și justificate, după cum urmează:",
      "Scopuri:",
    ],
    bullets: [
      "Procesarea rezervărilor online",
      "Gestionarea accesului automatizat în parcare, prin cod QR și bariere",
      "Încasarea plăților și emiterea facturilor",
      "Îndeplinirea obligațiilor legale, fiscale și contabile",
      "Asigurarea securității persoanelor și vehiculelor, prin supraveghere video",
      "Soluționarea reclamațiilor sau litigiilor",
      "Comunicări operaționale legate de serviciul prestat",
    ],
  },
  {
    title: "Temeiuri legale",
    bullets: [
      "Executarea contractului sau măsuri precontractuale, la solicitarea ta, conform art. 6 alin. (1) lit. b din GDPR",
      "Îndeplinirea obligațiilor legale ale operatorului, conform art. 6 alin. (1) lit. c din GDPR",
      "Interesul legitim al operatorului, de exemplu siguranța parcării, prevenirea fraudelor, comunicări esențiale și apărarea în instanță, conform art. 6 alin. (1) lit. f din GDPR",
      "Consimțământul, acolo unde este necesar, de exemplu pentru comunicări de marketing, conform art. 6 alin. (1) lit. a din GDPR",
    ],
  },
  {
    title: "5. Durata de stocare a datelor",
    bullets: [
      "Date privind rezervările și facturarea: 5 ani, conform legislației fiscale în vigoare",
      "Imagini CCTV: 30 de zile, cu excepția cazurilor justificate legal, precum anchete sau reclamații",
      "Loguri ale sistemelor de acces: între 30 și 180 de zile, în funcție de configurațiile tehnice",
      "În cazul unei investigații, dispute sau reclamații, anumite date pot fi păstrate pe durata termenului legal de prescripție",
    ],
  },
  {
    title: "6. Transmiterea datelor către terți",
    paragraphs: [
      "Datele tale pot fi transmise exclusiv către entități care contribuie la furnizarea serviciilor, cum ar fi:",
    ],
    bullets: [
      "Furnizori de servicii IT, mentenanță și găzduire",
      "Procesatori de plăți, precum Netopia sau Stripe",
      "Parteneri implicați direct în executarea serviciului",
      "Autorități publice, doar în baza unei solicitări legale",
    ],
  },
  {
    title: "Parteneri și confidențialitate",
    paragraphs: [
      "Toți partenerii și furnizorii noștri sunt obligați prin contract să respecte prevederile legislației privind protecția datelor. Nu vindem și nu divulgăm date personale în scopuri comerciale.",
    ],
  },
  {
    title: "7. Drepturile tale conform GDPR",
    paragraphs: [
      "În calitate de persoană vizată, ai următoarele drepturi:",
    ],
    bullets: [
      "Dreptul de acces la datele tale",
      "Dreptul de rectificare a datelor inexacte",
      "Dreptul de restricționare a prelucrării",
      "Dreptul la ștergerea datelor, dreptul de a fi uitat",
      "Dreptul la portabilitatea datelor furnizate",
      "Dreptul de opoziție la prelucrarea realizată în baza interesului legitim sau în scopuri de marketing",
      "Dreptul de retragere a consimțământului, atunci când temeiul este consimțământul, fără a afecta legalitatea prelucrării anterioare",
      "Dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal, ANSPDCP",
    ],
  },
  {
    title: "8. Securitatea datelor",
    paragraphs: [
      "DELTA FLOT SRL implementează măsuri tehnice și organizatorice adecvate pentru a asigura confidențialitatea și securitatea datelor, inclusiv:",
    ],
    bullets: [
      "Conexiuni securizate, HTTPS",
      "Acces restricționat la sistemele interne",
      "Supraveghere video în zonele permise de lege",
      "Sisteme automatizate pentru controlul accesului",
      "Politici interne privind protecția datelor și confidențialitatea personalului",
    ],
  },
  {
    title: "9. Decizii automatizate și profilare",
    paragraphs: [
      "Nu utilizăm procese decizionale automate și nu realizăm profilări care să producă efecte juridice semnificative asupra ta sau să te afecteze într-un mod similar semnificativ.",
    ],
  },
];

const contactItems = [
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
  {
    label: "Adresă",
    value: "Șoseaua București-Ploiești 9, orașul Otopeni, județul Ilfov, România",
  },
];

export function CookiePolicyPage() {
  return (
    <>
      <TopNav />
      <main className="relative overflow-hidden bg-surface pb-20 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,_rgba(0,109,65,0.1),_transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-52 -z-10 h-72 w-72 rounded-full bg-secondary-fixed/25 blur-3xl"
        />

        <Container className="max-w-5xl">
          <div className="mb-10 rounded-[32px] border border-outline-variant/20 bg-white/90 p-8 shadow-[0_20px_60px_rgba(28,27,27,0.08)] backdrop-blur-sm md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Informații GDPR
            </p>
            <h1 className="max-w-3xl font-headline text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Politică de cookie-uri
            </h1>
            <p className="mt-5 text-base leading-8 text-on-surface-variant">
              Notă de informare privind prelucrarea datelor cu caracter
              personal, DELTA FLOT SRL.
            </p>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              Această informare este redactată în conformitate cu Regulamentul
              (UE) 2016/679 privind protecția datelor, GDPR, și legislația
              națională aplicabilă, și are scopul de a explica modul în care
              prelucrăm datele tale cu caracter personal atunci când utilizezi
              serviciile noastre de parcare și site-ul{" "}
              <Link
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
                href="https://www.dapark.ro"
                rel="noreferrer"
                target="_blank"
              >
                dapark.ro
              </Link>
              .
            </p>
          </div>

          <article className="space-y-8">
            {cookieSections.map((section, sectionIndex) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-outline-variant/20 bg-white p-8 shadow-[0_16px_40px_rgba(28,27,27,0.06)] md:p-10"
              >
                <h2 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
                  {section.title}
                </h2>

                {section.paragraphs?.length ? (
                  <div className="mt-6 space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={`${sectionIndex}-${paragraphIndex}`}
                        className="text-sm leading-7 text-on-surface-variant md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}

                {section.bullets?.length ? (
                  <ul className="mt-6 space-y-2 pl-4 text-sm leading-7 text-on-surface-variant md:text-base">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={`${sectionIndex}-bullet-${bulletIndex}`}
                        className="list-disc"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="rounded-[28px] border border-outline-variant/20 bg-white p-8 shadow-[0_16px_40px_rgba(28,27,27,0.06)] md:p-10">
              <h2 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
                10. Date de contact – GDPR
              </h2>
              <p className="mt-6 text-sm leading-7 text-on-surface-variant md:text-base">
                Pentru întrebări sau pentru exercitarea drepturilor tale în
                legătură cu protecția datelor, ne poți contacta astfel:
              </p>

              <dl className="mt-8 grid gap-4 md:grid-cols-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-outline-variant/15 bg-surface-container-low px-5 py-4"
                  >
                    <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                      {item.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-on-surface-variant">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-7 text-on-surface-variant">
                Ultima actualizare: noiembrie 2026.
              </div>
            </section>
          </article>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
