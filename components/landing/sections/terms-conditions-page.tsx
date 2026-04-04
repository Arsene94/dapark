import type { ReactNode } from "react";

import Link from "next/link";

import { FooterSection } from "@/components/landing/sections/footer-section";
import { TopNav } from "@/components/landing/sections/top-nav";
import { Container } from "@/components/landing/ui/container";

type Definition = {
  description: ReactNode;
  term: string;
};

type Clause = {
  bullets?: ReactNode[];
  id: string;
  text: ReactNode;
};

type LegalSection = {
  clauses: Clause[];
  title: string;
};

const definitions: Definition[] = [
  {
    description: "DELTA FLOT SRL.",
    term: "Prestator",
  },
  {
    description: (
      <>
        <Link
          className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
          href="https://www.dapark.ro"
          rel="noreferrer"
          target="_blank"
        >
          www.dapark.ro
        </Link>{" "}
        și subdomeniile sale.
      </>
    ),
    term: "Site",
  },
  {
    description:
      "Exprimarea intenției de achiziționare a serviciilor de parcare prin intermediul Site-ului.",
    term: "Rezervare",
  },
  {
    description:
      "Orice persoană fizică sau juridică ce accesează Site-ul.",
    term: "Utilizator",
  },
  {
    description:
      "Orice persoană fizică sau juridică care efectuează o Rezervare.",
    term: "Client",
  },
  {
    description:
      "Informațiile vizualizabile pe Site, mesajele electronice de la Prestator, informațiile comunicate de angajați sau colaboratori, tarifele și serviciile oferite de Prestator sau partenerii săi.",
    term: "Conținut",
  },
  {
    description: "Prezentul set de Termeni și Condiții.",
    term: "Document",
  },
  {
    description:
      "Informări electronice periodice privind Serviciile și promoțiile.",
    term: "Newsletter",
  },
  {
    description:
      "Încasarea sau rambursarea unei sume ca urmare a prestării unui serviciu de către DELTA FLOT SRL, prin intermediul procesatorilor de plăți agreați.",
    term: "Tranzacție",
  },
  {
    description: "Descrierile Serviciilor disponibile pe Site.",
    term: "Specificații",
  },
];

const legalSections: LegalSection[] = [
  {
    title: "1. Acceptarea Termenilor și Condițiilor",
    clauses: [
      {
        id: "1.1",
        text: "Prin utilizarea Site-ului și/sau plasarea unei Rezervări, Utilizatorul/Clientul acceptă în mod expres și neechivoc Termenii și Condițiile prezentului Document. Acceptarea Termenilor și Condițiilor se confirmă prin bifarea checkbox-ului dedicat și/sau prin finalizarea unei rezervări ori efectuarea unei plăți online.",
      },
      {
        id: "1.2",
        text: "În cazul în care Utilizatorul nu este de acord cu Termenii și Condițiile, acesta trebuie să înceteze utilizarea Site-ului.",
      },
    ],
  },
  {
    title: "3. Condiții generale de utilizare a Site-ului",
    clauses: [
      {
        id: "3.1",
        text: "Utilizatorii se angajează să utilizeze site-ul doar în scopuri legale, fără a altera, copia sau distribui conținutul fără acordul scris al DELTA FLOT SRL.",
      },
      {
        id: "3.2",
        text: "Întregul conținut al site-ului, texte, imagini, grafice, elemente de design, mărci și sigle, este proprietatea DELTA FLOT SRL și este protejat de legislația privind drepturile de autor. Utilizarea acestora fără acordul scris al companiei este interzisă.",
      },
    ],
  },
  {
    title: "4. Efectuarea rezervărilor",
    clauses: [
      {
        id: "4.1",
        text: "Accesul pentru efectuarea unei Rezervări este permis oricărui Utilizator. DELTA FLOT SRL poate restricționa acest acces dacă există motive rezonabile de a considera că acțiunile Utilizatorului pot prejudicia compania.",
      },
      {
        id: "4.2",
        text: "Rezervarea implică acceptarea comunicării prin e-mail și telefon, iar confirmarea electronică reprezintă acceptarea acesteia.",
      },
    ],
  },
  {
    title: "5. Politica de anulare și dreptul de retragere",
    clauses: [
      {
        id: "5.1",
        text: "Clientul poate solicita anularea rezervării cu minimum 24 de ore înainte de ora programată pentru intrare.",
      },
      {
        id: "5.2",
        text: "Anularea se solicită exclusiv prin e-mail.",
      },
      {
        id: "5.3",
        text: "Suma achitată va fi rambursată integral prin metoda de plată inițială, într-un interval de 1-5 zile lucrătoare, în funcție de banca emitentă.",
      },
      {
        id: "5.4",
        text: "Nerespectarea termenului din punctul 5.1, DELTA FLOT SRL își rezervă dreptul de a reține integral suma achitată, aceasta reprezentând taxă de anulare și contravaloarea serviciilor pregătite în avans.",
      },
      {
        id: "5.5",
        text: "În conformitate cu OUG nr. 34/2014, dreptul de retragere se poate limita dacă prestarea a început cu acordul expres al Clientului înainte de expirarea termenului legal de 14 zile. Prin efectuarea rezervării și confirmarea plății, Clientul își exprimă acordul expres ca serviciul să înceapă imediat.",
      },
      {
        id: "5.6",
        text: "În situații excepționale (ex. motive medicale sau evenimente neprevăzute dovedite), DELTA FLOT SRL poate, la discreția sa, să ofere clientului posibilitatea utilizării sumei achitate pentru o rezervare ulterioară, în limita disponibilității locurilor.",
      },
    ],
  },
  {
    title: "6. Transfer pasageri și bagaje",
    clauses: [
      {
        id: "6.1",
        text: "Transferul pasagerilor și al bagajelor se efectuează exclusiv în zona semnalizată „BAGAJE”. După transfer, personalul DELTA FLOT SRL va ghida șoferul către locul de parcare alocat.",
      },
    ],
  },
  {
    title: "7. Reguli în parcare",
    clauses: [
      {
        id: "7.1",
        text: "DELTA FLOT SRL nu răspunde pentru bunurile lăsate în vehicule.",
      },
      {
        id: "7.2",
        text: "Persoana care produce daune în incinta parcării va suporta costurile remedierii.",
      },
      {
        id: "7.3",
        text: "Este interzis:",
        bullets: [
          "Lăsarea nesupravegheată a minorilor, animalelor, substanțelor inflamabile sau obiectelor periculoase;",
          "Nerespectarea semnalisticii din parcare;",
          "Efectuarea de reparații auto, alimentare cu combustibil etc.;",
          "Afișarea de anunțuri de vânzare;",
          "Depozitarea de obiecte.",
        ],
      },
      {
        id: "7.4",
        text: "Parcarea peste termenul rezervat atrage taxe suplimentare și/sau relocarea vehiculului, pe cheltuiala Clientului.",
      },
    ],
  },
  {
    title: "8. Prețuri și plată",
    clauses: [
      {
        id: "8.1",
        text: "Prețurile sunt exprimate în RON și includ TVA.",
      },
      {
        id: "8.2",
        text: "DELTA FLOT SRL poate modifica prețurile oricând, dar prețul aplicabil este cel de la momentul rezervării.",
      },
      {
        id: "8.3",
        text: "Plata se poate face online în momentul rezervării (caz în care se aplică o reducere față de prețul de bază), sau la parcare exclusiv cu cardul prin terminalul de plată sau la casierie (la prețul standard fără reducere).",
      },
      {
        id: "8.4",
        text: "Tranzacțiile online sunt procesate securizat prin procesatorul autorizat, fără ca DELTA FLOT SRL să acceseze datele de card.",
      },
      {
        id: "8.5",
        text: "Factura este emisă în format electronic conform Legii nr. 139/2022 și transmisă automat pe e-mailul clientului.",
      },
    ],
  },
  {
    title: "9. Politica de cookie-uri",
    clauses: [
      {
        id: "9.1",
        text: "Site-ul utilizează fișiere cookie pentru a asigura funcționarea corectă, îmbunătățirea experienței de navigare, precum și pentru analiză și marketing.",
      },
      {
        id: "9.2",
        text: "Utilizatorii pot accepta sau refuza utilizarea cookie-urilor prin setările browserului sau prin bannerul de consimțământ afișat la prima accesare a Site-ului.",
      },
    ],
  },
  {
    title: "10. Supraveghere video",
    clauses: [
      {
        id: "10.1",
        text: "Parcarea este monitorizată video 24/7 în scopul asigurării securității.",
      },
      {
        id: "10.2",
        text: "Prelucrarea imaginilor se realizează în temeiul art. 6 alin. (1) lit. f din Regulamentul (UE) 2016/679 (interes legitim).",
      },
      {
        id: "10.3",
        text: "Imaginile se stochează 30 de zile, iar accesul este permis doar personalului autorizat sau autorităților competente.",
      },
      {
        id: "10.4",
        text: "Două camere oferă transmisie live publică pe Site, fără posibilitatea identificării persoanelor.",
      },
    ],
  },
  {
    title: "11. Date cu caracter personal",
    clauses: [
      {
        id: "11.1",
        text: "DELTA FLOT SRL respectă legislația privind protecția datelor (GDPR).",
      },
      {
        id: "11.2",
        text: "Scopurile prelucrării includ gestionarea rezervărilor, facturare, comunicare și securitate.",
      },
      {
        id: "11.3",
        text: "Completarea formularului implică consimțământul expres pentru prelucrare.",
      },
      {
        id: "11.4",
        text: "Datele sunt păstrate pe durata necesară prestării serviciului și conform obligațiilor legale contabile.",
      },
    ],
  },
  {
    title: "12. Răspunderea operatorului",
    clauses: [
      {
        id: "12.1",
        text: "DELTA FLOT SRL asigură supravegherea generală a incintei, însă nu garantează integritatea vehiculelor în caz de forță majoră, fenomene naturale sau acte ale terților.",
      },
      {
        id: "12.2",
        text: "Compania nu răspunde pentru daune rezultate din utilizarea incorectă a serviciului sau neglijența clientului.",
      },
    ],
  },
  {
    title: "13. Forța majoră",
    clauses: [
      {
        id: "13.1",
        text: "DELTA FLOT SRL nu răspunde pentru neexecutarea obligațiilor din cauza unui eveniment de forță majoră astfel cum este definit de lege.",
      },
    ],
  },
  {
    title: "14. Legea aplicabilă și jurisdicția",
    clauses: [
      {
        id: "14.1",
        text: "Prezentul document este guvernat de legea română. Litigiile se soluționează pe cale amiabilă, iar în lipsa unui acord, de către instanțele competente din București.",
      },
      {
        id: "14.2",
        text: "DELTA FLOT SRL își rezervă dreptul de a modifica prezentul document. Versiunea actualizată va fi disponibilă pe site, iar continuarea utilizării serviciilor reprezintă acceptarea modificărilor.",
      },
    ],
  },
];

export function TermsConditionsPage() {
  return (
    <>
      <TopNav />
      <main className="relative overflow-hidden bg-surface pb-20 pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,_rgba(56,178,117,0.12),_transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-56 -z-10 h-72 w-72 rounded-full bg-tertiary-fixed/30 blur-3xl"
        />

        <Container className="max-w-5xl">
          <div className="mb-10 rounded-[32px] border border-outline-variant/20 bg-white/90 p-8 shadow-[0_20px_60px_rgba(28,27,27,0.08)] backdrop-blur-sm md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
              Document legal
            </p>
            <h1 className="max-w-3xl font-headline text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
              Termeni și condiții
            </h1>
            <p className="mt-5 text-base leading-8 text-on-surface-variant">
              Website-ul{" "}
              <Link
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
                href="https://www.dapark.ro"
                rel="noreferrer"
                target="_blank"
              >
                www.dapark.ro
              </Link>{" "}
              este operat de DELTA FLOT SRL, persoană juridică română cu sediul
              social în județul Ilfov, localitatea Otopeni, Calea Bucureștilor
              nr. 303A1, înregistrată la Registrul Comerțului sub nr.
              J23/2500/2024, având cod unic de înregistrare 51149156.
            </p>
            <p className="mt-4 text-base leading-8 text-on-surface-variant">
              Pentru orice sesizare, DELTA FLOT SRL poate fi contactată la
              adresa de e-mail{" "}
              <Link
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
                href="mailto:contact.otpparking@gmail.com"
              >
                contact.otpparking@gmail.com
              </Link>{" "}
              sau la numărul{" "}
              <Link
                className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-jade-green"
                href="tel:0742039955"
              >
                0742.039.955
              </Link>
              .
            </p>
          </div>

          <article className="space-y-8">
            <section className="rounded-[28px] border border-outline-variant/20 bg-white p-8 shadow-[0_16px_40px_rgba(28,27,27,0.06)] md:p-10">
              <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary">
                    2. Definiții
                  </p>
                  <h2 className="mt-2 font-headline text-3xl font-bold text-on-surface">
                    Termenii folosiți în acest document
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-on-surface-variant">
                  Pentru o interpretare clară, termenii de mai jos au sensul
                  descris în această secțiune.
                </p>
              </div>

              <dl className="grid gap-4 md:grid-cols-2">
                {definitions.map((definition) => (
                  <div
                    key={definition.term}
                    className="rounded-2xl border border-outline-variant/15 bg-surface-container-low px-5 py-4"
                  >
                    <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                      {definition.term}
                    </dt>
                    <dd className="mt-2 text-sm leading-7 text-on-surface-variant">
                      {definition.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {legalSections.map((section) => (
              <section
                key={section.title}
                className="rounded-[28px] border border-outline-variant/20 bg-white p-8 shadow-[0_16px_40px_rgba(28,27,27,0.06)] md:p-10"
              >
                <h2 className="font-headline text-2xl font-bold text-on-surface md:text-3xl">
                  {section.title}
                </h2>

                <div className="mt-8 space-y-5">
                  {section.clauses.map((clause) => (
                    <div
                      key={clause.id}
                      className="rounded-2xl border border-outline-variant/15 bg-surface-container-low px-5 py-4"
                    >
                      <p className="text-sm leading-7 text-on-surface-variant">
                        <span className="mr-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-[0.18em] text-primary">
                          {clause.id}
                        </span>
                        {clause.text}
                      </p>

                      {clause.bullets?.length ? (
                        <ul className="mt-4 space-y-2 pl-4 text-sm leading-7 text-on-surface-variant">
                          {clause.bullets.map((bullet) => (
                            <li key={String(bullet)} className="list-disc">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </Container>
      </main>
      <FooterSection />
    </>
  );
}
