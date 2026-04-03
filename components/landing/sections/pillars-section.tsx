import { Section } from "@/components/landing/ui/section";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function PillarsSection() {
  return (
    <Section
      className="relative overflow-hidden bg-berkeley-blue py-24 text-white"
      containerClassName="grid items-center gap-16 lg:grid-cols-2"
      id="servicii"
    >
      <div className="z-10 space-y-8">
        <div className="inline-block rounded-full border border-jade-green/30 bg-jade-green/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
          Pilonii Noștri
        </div>
        <h2 className="font-headline text-4xl font-bold leading-tight md:text-5xl">
          Doi piloni esențiali: <br />
          <span className="text-[#6EE7B7]">Rapiditate și Umanitate.</span>
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-blue-100">
          Timpul tău este prețios. Suntem prietenul de nădejde care te așteaptă
          la sosire, oferind mai mult decât un loc de parcare - oferim
          certitudinea unui început de călătorie fără stres.
        </p>
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-12 bg-jade-green" />
          <span className="font-headline font-semibold tracking-wide">
            Experiență Concierge
          </span>
        </div>
      </div>
      <div className="relative">
        <ResponsiveImage
          alt="professional staff member helping traveler"
          className="grayscale-[30%] transition-all duration-700 hover:grayscale-0"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src="/images/homepage/human-client-car-airport.webp"
          wrapperClassName="relative z-10 aspect-[4/3] overflow-hidden rounded-lg shadow-2xl"
        />
        <div className="absolute -right-12 -top-12 -z-0 h-64 w-64 rounded-tr-[100px] border-r-8 border-t-8 border-jade-green/20" />
        <div className="absolute -bottom-12 -left-12 -z-0 h-64 w-64 rounded-bl-[100px] border-b-8 border-l-8 border-jade-green/20" />
      </div>
    </Section>
  );
}
