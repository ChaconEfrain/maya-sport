import { BALLET_LEOTARDS } from "@/constants";
import LeotardsSection from "./LeotardsSection";
import Swiper from "./Swiper";
import { hatton } from "@/fonts";

export default function Leotards() {
  return (
    <section id="ballet">
      <div className="hidden lg:block">
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
      </div>
      <Swiper
        className="lg:hidden"
        products={BALLET_LEOTARDS}
        title="Leotardos"
      />
    </section>
  );
}
