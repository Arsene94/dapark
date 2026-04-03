import { bucharestLongTermParkingPainPoints } from "@/components/landing/data";
import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

export function BucharestLongTermParkingAlternativeSection() {
  const [first, second, third] = bucharestLongTermParkingPainPoints;

  return (
    <section className="bg-surface-container-low py-24">
      <Container className="px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[first, second].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border-b-4 border-error/20 bg-surface-container-lowest p-8 shadow-sm"
                >
                  <MaterialIcon className="mb-4 text-4xl text-error" name={item.icon} />
                  <h3 className="mb-2 font-headline text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{item.description}</p>
                </div>
              ))}

              <div className="rounded-xl border-b-4 border-error/20 bg-surface-container-lowest p-8 shadow-sm md:col-span-2">
                <div className="flex items-center gap-6">
                  <MaterialIcon className="text-4xl text-error" name={third.icon} />
                  <div>
                    <h3 className="mb-1 font-headline text-xl font-bold">
                      {third.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{third.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 font-headline text-4xl font-bold leading-tight">
              Alternativă la parcările aglomerate
            </h2>
            <p className="mb-8 text-lg text-zinc-600">
              Am creat un spațiu gândit special pentru liniștea ta. Ne-am
              asigurat că eliminăm toate inconvenientele parcărilor tradiționale
              pentru a-ți oferi o experiență fluidă.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-semibold text-on-surface">
                <MaterialIcon className="text-primary" name="check_circle" />
                Garanția locului rezervat online
              </li>
              <li className="flex items-center gap-3 font-semibold text-on-surface">
                <MaterialIcon className="text-primary" name="check_circle" />
                Transparență totală a costurilor
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
