import { Container } from "@/components/landing/ui/container";
import { ResponsiveImage } from "@/components/landing/ui/responsive-image";

export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <Container className="grid items-center gap-16 md:grid-cols-2">
        <div className="z-10">
          <span className="mb-6 inline-block rounded-full bg-primary-fixed px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-primary-fixed-variant">
            Despre Noi
          </span>
          <h1 className="mb-8 max-w-3xl font-headline text-5xl font-extrabold leading-tight tracking-tighter text-on-surface md:text-7xl">
            Parcare pe termen lung, făcută cu{" "}
            <span className="text-gradient">grijă reală</span> pentru oameni.
          </h1>
          <p className="max-w-xl text-lg font-medium leading-relaxed text-on-surface-variant">
            DaCars a pornit dintr-o nevoie simplă și foarte clară: un loc sigur
            lângă aeroport, unde să îți lași mașina mai multe zile fără stres,
            fără grabă și fără surprize. Noi ne ocupăm de partea asta cu ordine,
            seriozitate și bun-simț, ca tu să pleci liniștit.
          </p>
        </div>
        <div className="relative">
          <ResponsiveImage
            alt="A diverse group of professional team members standing together in a modern bright office environment, smiling warmly at the camera"
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/about/team.png"
            wrapperClassName="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl transition-transform duration-700 md:rotate-3 md:hover:rotate-0"
          />
          <div className="absolute -bottom-10 -left-10 -z-10 h-64 w-64 rounded-xl bg-surface-container-highest opacity-50" />
        </div>
      </Container>
      <div className="pointer-events-none absolute top-1/2 -right-20 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full border-[60px] border-primary/5" />
    </section>
  );
}
