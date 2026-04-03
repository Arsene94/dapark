import { MaterialIcon } from "@/components/landing/ui/material-icon";
import { PricingTable } from "@/components/landing/ui/pricing-table";
import { Section } from "@/components/landing/ui/section";
import { SectionHeader } from "@/components/landing/ui/section-header";

export function PricingSection() {
  return (
    <Section className="bg-surface py-24" id="tarife">
      <SectionHeader
        centered
        className="mb-16"
        description="Prețuri competitive, fără taxe ascunse. Calculul se face în funcție de tipul vehiculului și perioada staționării."
        title="Tarife Transparente"
      />
      <PricingTable />
      <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-lg bg-surface-container-low p-6 md:flex-row">
        <div className="flex items-center gap-4 text-sm text-on-surface-variant">
          <MaterialIcon className="text-jade-green" name="info" />
          <p>Toate tarifele includ transferul gratuit la și de la aeroport (24/7).</p>
        </div>
      </div>
    </Section>
  );
}
