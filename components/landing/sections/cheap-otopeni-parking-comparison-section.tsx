import { Container } from "@/components/landing/ui/container";
import { MaterialIcon } from "@/components/landing/ui/material-icon";

const comparisonRows = [
  {
    label: "Securitate 24/7",
    airport: "icon",
    our: "icon",
  },
  {
    label: "Transfer Terminal",
    airport: "Doar pe jos",
    our: "Shuttle Gratuit",
  },
  {
    label: "Preț (7 zile)",
    airport: "~450 RON",
    our: "~180 RON",
  },
  {
    label: "Asistență Client",
    airport: "Limitată",
    our: "Dedicată",
  },
] as const;

export function CheapOtopeniParkingComparisonSection() {
  return (
    <section className="bg-surface-container-low py-24">
      <Container className="px-6 text-center">
        <h2 className="mb-4 font-headline text-4xl font-bold tracking-tight">
          Compară și vezi diferența
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg text-zinc-600">
          Parcările oficiale din aeroport au prețuri mult mai mari. Noi oferim
          același lucru, la un cost mult mai mic.
        </p>

        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-surface-container-lowest shadow-sm">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-zinc-100/50">
                <th className="p-6 font-headline font-bold">Servicii incluse</th>
                <th className="p-6 font-headline font-bold text-zinc-500">
                  Parcare Aeroport
                </th>
                <th className="p-6 font-headline font-bold text-primary">
                  DaCars
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td className="p-6 text-sm font-medium">{row.label}</td>
                  <td className="p-6">
                    {row.airport === "icon" ? (
                      <MaterialIcon className="text-zinc-400" name="check_circle" />
                    ) : row.label === "Preț (7 zile)" ? (
                      <span className="text-sm font-bold text-error">{row.airport}</span>
                    ) : (
                      <span className="text-sm text-zinc-500">{row.airport}</span>
                    )}
                  </td>
                  <td className="p-6">
                    {row.our === "icon" ? (
                      <MaterialIcon className="text-primary" name="check_circle" />
                    ) : row.label === "Preț (7 zile)" ? (
                      <span className="text-sm font-extrabold text-primary">{row.our}</span>
                    ) : (
                      <span className="text-sm font-bold text-primary">{row.our}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
