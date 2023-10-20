import { BALLET_LEOTARDS } from "@/constants";
import LeotardsSection from "./LeotardsSection";

export default function Leotards() {
  return (
    <section>
      <LeotardsSection
        products={BALLET_LEOTARDS.slice(0, BALLET_LEOTARDS.length / 3)}
        section="1"
      />
      <LeotardsSection
        products={BALLET_LEOTARDS.slice(
          BALLET_LEOTARDS.length / 3,
          (BALLET_LEOTARDS.length / 3) * 2
        )}
        section="2"
      />
      <LeotardsSection
        products={BALLET_LEOTARDS.slice((BALLET_LEOTARDS.length / 3) * 2)}
        section="3"
      />
    </section>
  );
}
