import Image from "next/image";

import { Container } from "@/components/landing/ui/container";

const avatarImages = [
  {
    alt: "Portrait of a smiling professional man in casual attire",
    src: "/images/parcare-ieftina-otopeni/human-casual.webp",
  },
  {
    alt: "Portrait of a friendly young woman with a warm smile",
    src: "/images/parcare-ieftina-otopeni/human-hoodie.webp",
  },
  {
    alt: "Portrait of a middle aged man with professional look",
    src: "/images/parcare-ieftina-otopeni/human-professional-look.webp",
  },
] as const;

export function CheapOtopeniParkingBudgetSection() {
  return (
    <section className="bg-white py-24">
      <Container className="px-6">
        <div className="relative overflow-hidden rounded-3xl bg-secondary-container/20 p-12 md:p-20">
          <div className="absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-primary/5" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="mb-6 font-headline text-4xl font-bold tracking-tight">
              Ideal pentru bugete smart
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-secondary">
              Dacă vrei să economisești fără să riști, asta este soluția. Am
              creat acest serviciu special pentru călătorii frecvenți și
              familiile care preferă să investească banii economisiți în
              experiențe de vacanță, nu în taxe de parcare exagerate.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {avatarImages.map((avatar) => (
                  <Image
                    key={avatar.src}
                    alt={avatar.alt}
                    className="h-12 w-12 rounded-full border-4 border-white object-cover"
                    height={48}
                    quality={75}
                    src={avatar.src}
                    width={48}
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-secondary">
                +12,000 clienți mulțumiți anul acesta
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
