import { siteConfig } from "@/lib/site-config";

export type NavItem = {
  label: string;
  href: string;
  active?: boolean;
};

export type SelectOption = {
  label: string;
  value: string;
};

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export type PricingEntry = {
  days: string;
  maxDays: number;
  minDays: number;
  price: string;
};

export type ContactDetail = {
  icon: string;
  title: string;
  description: string;
  href?: string
};

export type FooterGroupItem = {
  label: string;
  href?: string;
};

export type FooterGroup = {
  title: string;
  items: FooterGroupItem[];
};

export type SocialIcon = {
  dataIcon?: string;
  name: string;
};

export type AboutValue = {
  icon: string;
  title: string;
  description: string;
};

export type AboutStatement = {
  icon: string;
  title: string;
  description: string;
  variant: "light" | "primary";
};

export type FleetGalleryItem = {
  alt: string;
  className: string;
  src: string;
};

export type ProcessStep = {
  icon: string;
  title: string;
  description: string;
};

export type SavingsStat = {
  label: string;
  value: string;
  caption: string;
};

export type NumberedStep = {
  description: string;
  step: number;
  title: string;
};

export type SeoLandingLink = {
  description: string;
  href: string;
  label: string;
};

export type Testimonial = {
  context: string;
  name: string;
  quote: string;
};

export type FaqCategoryItem = {
  answer: string;
  includeMap?: boolean;
  question: string;
};

export type FaqCategory = {
  description: string;
  icon: string;
  items: FaqCategoryItem[];
  title: string;
};

export const navItems: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Despre noi", href: "/despre-noi" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const parkingMapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2839.0234567890123!2d26.085!3d44.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3a4321%3A0x1234567890abcdef!2sSoseaua%20Bucuresti-Ploiesti%209%2C%20Balote%C8%99ti%20077015%2C%20Rom%C3%A2nia!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro";

export const vehicleOptions: SelectOption[] = [
  { label: "Autoturism", value: "Autoturism" },
  { label: "SUV / 4x4", value: "SUV / 4x4" },
  { label: "Motocicletă", value: "Motocicletă" },
];

export const passengerCountOptions: SelectOption[] = [
  { label: "1 persoană", value: "1" },
  { label: "2 persoane", value: "2" },
  { label: "3 persoane", value: "3" },
  { label: "4 persoane", value: "4" },
  { label: "5 persoane", value: "5" },
  { label: "6 persoane", value: "6" },
  { label: "7 persoane", value: "7" },
  { label: "8 persoane", value: "8" },
];

export const benefits: Benefit[] = [
  {
    icon: "security",
    title: "Securitate 24/7",
    description:
      "Pază umană și monitorizare video permanentă pentru liniștea ta deplină.",
  },
  {
    icon: "airport_shuttle",
    title: "Transfer Rapid (5 min)",
    description:
      "Te ducem și te luăm de la terminal în timp record, fără costuri extra.",
  },
  {
    icon: "payments",
    title: "Fără Taxe Ascunse",
    description:
      "Plătești exact cât vezi, cu kilometri nelimitați și zero surprize.",
  },
  {
    icon: "diversity_3",
    title: "Umanitate",
    description:
      "Contact direct cu personalul nostru, 24/7. Suntem aici pentru tine.",
  },
];

export const seoLandingLinks: SeoLandingLink[] = [
  {
    description: "Transfer rapid și acces direct către terminal.",
    href: "/parcare-aeroport-otopeni",
    label: "Parcare Aeroport Otopeni",
  },
  {
    description: "Ideală pentru plecări lungi din București.",
    href: "/long-term-parking-otopeni",
    label: "Long Term Parking Otopeni",
  },
  {
    description: "Preț mic, servicii complete și loc sigur.",
    href: "/parcare-ieftina-otopeni",
    label: "Parcare Ieftină Otopeni",
  },
  {
    description: "Parcare pe termen lung aproape de aeroport.",
    href: "/parcare-termen-lung-bucuresti",
    label: "Parcare Termen Lung București",
  },
];

export const parkingTestimonials: Testimonial[] = [
  {
    context: "Familie plecată în vacanță",
    name: "Ioana și Radu",
    quote:
      "Am ales parcarea pentru că voiam ceva aproape de Otopeni și bine organizat. Transferul a fost rapid, iar la întoarcere totul a mers exact cum ni s-a spus.",
  },
  {
    context: "Călător frecvent",
    name: "Andrei M.",
    quote:
      "Pentru mine contează să nu pierd timp în ziua zborului. Rezervarea se face simplu, iar mașina rămâne într-un loc unde chiar simți că există ordine și supraveghere.",
  },
  {
    context: "City break de 7 zile",
    name: "Cristina P.",
    quote:
      "Prețul a fost clar de la început, fără surprize, iar oamenii de acolo au fost foarte ok. Dacă mai plec din Otopeni, rezerv tot aici.",
  },
];

export const aboutValues: AboutValue[] = [
  {
    icon: "bolt",
    title: "Rapiditate",
    description:
      "La parcare pe termen lung, rapiditatea înseamnă un proces clar. Ajungi, lași mașina, faci transferul și pleci mai departe fără pași inutili.",
  },
  {
    icon: "favorite",
    title: "Umanitate",
    description:
      "Știm că plecările nu sunt mereu lejere. De aceea vorbim normal, ajutăm când ai nevoie și tratăm fiecare rezervare cu răbdare și respect.",
  },
  {
    icon: "verified_user",
    title: "Siguranță",
    description:
      "Pentru noi, long term parking înseamnă înainte de toate liniște. Spațiul este monitorizat permanent, iar mașina ta rămâne într-un loc bine pus la punct cât timp ești plecat.",
  },
];

export const aboutStatements: AboutStatement[] = [
  {
    icon: "flag",
    title: "Misiunea Noastră",
    description:
      "Să oferim un serviciu de parcare pe termen lung corect și ușor de folosit, în care rezervarea, predarea mașinii și transferul la aeroport se întâmplă firesc, fără complicații.",
    variant: "light",
  },
  {
    icon: "visibility",
    title: "Viziunea Noastră",
    description:
      "Să fim alegerea firească pentru oamenii care caută parcare pe termen lung lângă Otopeni: un loc sigur, bine organizat și suficient de uman încât să revii cu încredere.",
    variant: "primary",
  },
];

export const aboutFleetGallery: FleetGalleryItem[] = [
  {
    alt: "A row of professional white and black transport shuttle vans parked in a clean modern parking facility with green accents",
    className: "md:col-span-2 md:row-span-2",
    src: "/images/fleet-gallery/underground-cars-parking.webp",
  },
  {
    alt: "Close up of a modern luxury car dashboard with high-tech displays and premium leather finish in soft morning light",
    className: "",
    src: "/images/fleet-gallery/car-board.webp",
  },
  {
    alt: "Aerial view of a organized car parking lot with neat rows of vehicles and professional staff members coordinating transport",
    className: "",
    src: "/images/fleet-gallery/parking-cars.webp",
  },
  {
    alt: "A professional driver in a clean uniform standing next to a modern shuttle van with a friendly welcoming gesture",
    className: "md:col-span-2",
    src: "/images/fleet-gallery/human-car.webp",
  },
];

export const otopeniParkingFeatures: Benefit[] = [
  {
    icon: "videocam",
    title: "Supraveghere video 24/7",
    description:
      "Sistem de monitorizare permanent pentru siguranța mașinii tale.",
  },
  {
    icon: "security",
    title: "Acces controlat",
    description:
      "Bariere automate și control riguros al fiecărei intrări și ieșiri.",
  },
  {
    icon: "airport_shuttle",
    title: "Transfer rapid",
    description:
      "Navetă gratuită care te duce direct la terminal în câteva minute.",
  },
  {
    icon: "support_agent",
    title: "Personal disponibil",
    description:
      "Echipa noastră este aici permanent pentru orice asistență ai nevoie.",
  },
];

export const otopeniParkingPricingHighlights: Benefit[] = [
  {
    icon: "visibility",
    title: "Tarife transparente",
    description:
      "Vezi prețul final de la început, fără nicio omisiune.",
  },
  {
    icon: "do_not_disturb_on",
    title: "Fără taxe ascunse",
    description:
      "Transferul și asistența sunt incluse în prețul afișat.",
  },
  {
    icon: "loyalty",
    title: "Discounturi",
    description:
      "Reduceri progresive pentru perioade lungi de parcare.",
  },
];

export const otopeniParkingSteps: ProcessStep[] = [
  {
    icon: "directions_car",
    title: "Ajungi în parcare",
    description: "Urmează instrucțiunile primite.",
  },
  {
    icon: "lock",
    title: "Lași mașina",
    description: "Într-un loc 100% securizat.",
  },
  {
    icon: "airport_shuttle",
    title: "Te ducem la aeroport",
    description: "Transfer imediat la terminal.",
  },
  {
    icon: "home",
    title: "Te preluăm",
    description: "La întoarcere, suntem acolo.",
  },
];

export const longTermParkingBenefits: Benefit[] = [
  {
    icon: "verified_user",
    title: "Mașina rămâne în siguranță",
    description:
      "Sisteme de monitorizare non-stop și personal instruit pentru a veghea bunurile tale.",
  },
  {
    icon: "payments",
    title: "Costuri optimizate",
    description:
      "Tarifele noastre scad progresiv odată cu durata șederii, oferind cel mai bun raport calitate-preț.",
  },
  {
    icon: "no_transfer",
    title: "Fără dependență taxi",
    description:
      "Vii cu propria mașină și pleci imediat ce aterizezi, fără timpi de așteptare pentru ride-sharing.",
  },
];

export const longTermParkingSecurityHighlights: Benefit[] = [
  {
    icon: "videocam",
    title: "Monitorizare permanentă",
    description:
      "Camere 4K și personal de securitate prezent în incintă 24 de ore din 24.",
  },
  {
    icon: "lock",
    title: "Acces restricționat",
    description:
      "Bariere inteligente și control riguros al fiecărei mașini care intră sau iese.",
  },
  {
    icon: "assignment_turned_in",
    title: "Spațiu organizat",
    description:
      "Fiecare loc este marcat clar și verificat periodic pentru a asigura ordinea perfectă.",
  },
];

export const longTermParkingSavingsStats: SavingsStat[] = [
  {
    label: "7 Zile",
    value: "-40%",
    caption: "Vs. Airport Rates",
  },
  {
    label: "14 Zile",
    value: "-60%",
    caption: "Vs. Airport Rates",
  },
];

export const cheapOtopeniParkingFeatures: Benefit[] = [
  {
    icon: "location_on",
    title: "Locație optimizată",
    description:
      "Suntem poziționați strategic pentru a menține costurile operaționale și chiria sub control, fără a sacrifica accesul rapid.",
  },
  {
    icon: "bolt",
    title: "Operare eficientă",
    description:
      "Sistemele noastre digitale reduc nevoia de personal administrativ, permițându-ne să oferim tarife imbatabile.",
  },
  {
    icon: "savings",
    title: "Fără costuri inutile",
    description:
      "Eliminăm taxele ascunse și serviciile forțate. Plătești doar pentru ce ai nevoie: siguranță și transport.",
  },
];

export const cheapOtopeniParkingServices: Benefit[] = [
  {
    icon: "airport_shuttle",
    title: "Transport către aeroport",
    description:
      "Shuttle non-stop care te lasă chiar în fața terminalului de plecări în mai puțin de 5 minute.",
  },
  {
    icon: "policy",
    title: "Siguranță 24/7",
    description:
      "Supraveghere video continuă și personal prezent în locație pentru liniștea ta deplină.",
  },
  {
    icon: "support_agent",
    title: "Asistență permanentă",
    description:
      "Echipa noastră este pregătită să te ajute oricând, indiferent de ora la care aterizezi.",
  },
];

export const bucharestLongTermParkingPainPoints: Benefit[] = [
  {
    icon: "block",
    title: "Locuri ocupate",
    description:
      "Uită de stresul căutării unui loc liber în ultimul moment.",
  },
  {
    icon: "payments",
    title: "Prețuri exagerate",
    description:
      "Nu plăti tarife premium pentru servicii de bază.",
  },
  {
    icon: "warning_amber",
    title: "Acces dificil",
    description:
      "Fără manevre complicate în spații înguste și aglomerate.",
  },
];

export const bucharestLongTermParkingTravelerTypes: Benefit[] = [
  {
    icon: "beach_access",
    title: "Vacanțe",
    description:
      "Relaxare totală încă din parcare. Lasă-ți mașina în siguranță pe tot parcursul concediului tău.",
  },
  {
    icon: "business_center",
    title: "Business trips",
    description:
      "Eficiență și profesionalism pentru călătoriile tale de afaceri. Facturare rapidă și acces facil.",
  },
  {
    icon: "flight_takeoff",
    title: "Plecări frecvente",
    description:
      "Abonamente avantajoase și servicii prioritare pentru cei care călătoresc des din Otopeni.",
  },
];

export const bucharestLongTermParkingIncludedServices: Benefit[] = [
  {
    icon: "airport_shuttle",
    title: "Transfer Gratuit",
    description:
      "Te ducem și te aducem de la terminal cu microbuzele noastre moderne, non-stop.",
  },
  {
    icon: "lock",
    title: "Siguranță Maximă",
    description:
      "Curte împrejmuită, iluminat nocturn și supraveghere video permanentă.",
  },
  {
    icon: "support_agent",
    title: "Suport 24/7",
    description:
      "Echipa noastră este mereu prezentă pentru a te ajuta cu bagajele sau orice solicitare.",
  },
];

export const bucharestLongTermParkingBookingSteps: NumberedStep[] = [
  {
    step: 1,
    title: "Selectezi datele",
    description: "Alegi perioada în care ai nevoie de parcare.",
  },
  {
    step: 2,
    title: "Completezi datele",
    description: "Introduci informațiile tale de contact.",
  },
  {
    step: 3,
    title: "Primești confirmarea",
    description: "Gata! Locul tău este rezervat și garantat.",
  },
];

export const pricingEntries: PricingEntry[] = [
  {
    days: "1-3 zile",
    maxDays: 3,
    minDays: 1,
    price: "100 lei",
  },
  {
    days: "4 zile",
    maxDays: 4,
    minDays: 4,
    price: "120 lei",
  },
  {
    days: "5 zile",
    maxDays: 5,
    minDays: 5,
    price: "150 lei",
  },
  {
    days: "6 zile",
    maxDays: 6,
    minDays: 6,
    price: "180 lei",
  },
  {
    days: "7 zile",
    maxDays: 7,
    minDays: 7,
    price: "210 lei",
  },
  {
    days: "8 zile",
    maxDays: 8,
    minDays: 8,
    price: "240 lei",
  },
  {
    days: "9 zile",
    maxDays: 9,
    minDays: 9,
    price: "270 lei",
  },
  {
    days: "10 zile",
    maxDays: 10,
    minDays: 10,
    price: "300 lei",
  },
];

export function getPricingEntryForDays(dayCount: number) {
  return (
    pricingEntries.find(
      (entry) => dayCount >= entry.minDays && dayCount <= entry.maxDays,
    ) ?? null
  );
}

export const contactDetails: ContactDetail[] = [
  {
    icon: "location_on",
    title: "Adresă",
    description: `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region}.`,
  },
  {
    icon: "schedule",
    title: "Program",
    description: "Suntem deschiși 24/7, 365 zile pe an.",
  },
  {
    icon: "phone",
    title: "Contact Rapid",
    description: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref
  },
];

export const faqPageCategories: FaqCategory[] = [
  {
    description:
      "Informații despre cum poți rezerva un loc și ce opțiuni de plată ai la dispoziție.",
    icon: "payments",
    items: [
      {
        answer:
          "Poți face rezervarea direct online, în câțiva pași simpli, folosind formularul de pe site. Dacă preferi, ne poți suna și te ajutăm imediat cu toate detaliile.",
        question: "Cum pot face o rezervare?",
      },
      {
        answer:
          "Da, rezervarea poate fi anulată fără costuri dacă ne anunți cu cel puțin 24 de ore înainte de momentul programat pentru sosire.",
        question: "Se poate anula o rezervare?",
      },
      {
        answer:
          "Acceptăm plata cash și plata cu cardul direct la locație, atunci când ajungi în parcare.",
        question: "Ce metode de plată sunt acceptate?",
      },
    ],
    title: "Rezervări și Plăți",
  },
  {
    description:
      "Detalii despre poziționarea noastră și transferul rapid către terminalul Aeroportului Otopeni.",
    icon: "airport_shuttle",
    items: [
      {
        answer:
          "Transferul dintre parcare și terminal durează, în mod obișnuit, aproximativ 5 minute, în funcție de trafic.",
        question: "Cât durează transferul la aeroport?",
      },
      {
        answer:
          "Da, transferul dus-întors este inclus în prețul parcării pentru toți pasagerii din mașină.",
        question: "Transferul este gratuit?",
      },
      {
        answer:
          "Ne găsești pe Șoseaua București-Ploiești 9, Otopeni, într-o zonă cu acces rapid către terminal. Mai jos ai și harta interactivă pentru orientare.",
        includeMap: true,
        question: "Unde vă găsim?",
      },
    ],
    title: "Transfer și Locație",
  },
  {
    description:
      "Cum rămâne mașina ta în siguranță pe toată durata parcării.",
    icon: "verified_user",
    items: [
      {
        answer:
          "Da. Parcarea este supravegheată video 24/7, are acces controlat și personal prezent permanent, astfel încât să pleci liniștit.",
        question: "Mașina mea este în siguranță?",
      },
      {
        answer:
          "Nu. Cheile rămân la tine pe toată durata parcării, iar mașina rămâne exact în locul în care ai lăsat-o.",
        question: "Trebuie să las cheile mașinii?",
      },
    ],
    title: "Siguranță",
  },
];

export const faqPageSchemaItems = faqPageCategories.flatMap((category) =>
  category.items.map((item) => ({
    answer: item.answer,
    question: item.question,
  })),
);

export const footerGroups: FooterGroup[] = [
  {
    title: "Link-uri Rapide",
    items: [
      { label: "Acasă", href: "/" },
      { label: "Despre noi", href: "/despre-noi" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Pagini Utile",
    items: [
      { label: "Parcare Aeroport Otopeni", href: "/parcare-aeroport-otopeni" },
      { label: "Long Term Parking Otopeni", href: "/long-term-parking-otopeni" },
      { label: "Parcare Ieftină Otopeni", href: "/parcare-ieftina-otopeni" },
      {
        label: "Parcare Termen Lung București",
        href: "/parcare-termen-lung-bucuresti",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: `Tel: ${siteConfig.phoneDisplay}`, href: `tel:${siteConfig.phoneHref}` },
      { label: `${siteConfig.address.streetAddress}, ${siteConfig.address.locality}, ${siteConfig.address.region}` },
    ],
  },
];

export const socialIcons: SocialIcon[] = [
  { name: "social_leaderboard", dataIcon: "facebook" },
  { name: "share" },
];
