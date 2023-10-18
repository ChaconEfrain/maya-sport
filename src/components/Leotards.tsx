import { BALLET_LEOTARDS } from "@/constants";
import LeotardsSection from "./LeotardsSection";

export default function Leotards() {
  return (
    <section>
      <LeotardsSection
        images={BALLET_LEOTARDS.slice(0, BALLET_LEOTARDS.length / 3)}
      />
      <LeotardsSection
        images={BALLET_LEOTARDS.slice(
          BALLET_LEOTARDS.length / 3,
          (BALLET_LEOTARDS.length / 3) * 2
        )}
      />
      <LeotardsSection
        images={BALLET_LEOTARDS.slice((BALLET_LEOTARDS.length / 3) * 2)}
      />
    </section>
  );
}
