import { FOOTBALL_MOUTH_GUARD } from "@/constants";
import MouthGuardsSection from "./MouthGuardsSection";

export default function MouthGuards() {
  return (
    <section>
      <div className="hidden md:block">
        <MouthGuardsSection
          products={FOOTBALL_MOUTH_GUARD.slice(
            0,
            FOOTBALL_MOUTH_GUARD.length / 2
          )}
          section="3"
        />
        <MouthGuardsSection
          products={FOOTBALL_MOUTH_GUARD.slice(FOOTBALL_MOUTH_GUARD.length / 2)}
          section="4"
        />
      </div>
      <div className="md:hidden">
        <MouthGuardsSection products={FOOTBALL_MOUTH_GUARD} />
      </div>
    </section>
  );
}
