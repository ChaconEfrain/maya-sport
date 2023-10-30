import GlovesSection from "./GlovesSection";
import { FOOTBALL_GLOVES } from "@/constants";

export default function Gloves() {
  return (
    <section id="football">
      <div className="hidden md:block">
        <GlovesSection
          products={FOOTBALL_GLOVES.slice(0, FOOTBALL_GLOVES.length / 2)}
          section="1"
        />
        <GlovesSection
          products={FOOTBALL_GLOVES.slice(FOOTBALL_GLOVES.length / 2)}
          section="2"
        />
      </div>
      <div className="md:hidden">
        <GlovesSection products={FOOTBALL_GLOVES} />
      </div>
    </section>
  );
}
