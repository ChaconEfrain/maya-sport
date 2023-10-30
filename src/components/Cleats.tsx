import { FOOTBALL_CLEATS } from "@/constants";
import CleatsSection from "./CleatsSection";

export default function Cleats() {
  return (
    <section>
      <div className="hidden md:block">
        <CleatsSection products={FOOTBALL_CLEATS.slice(0, 6)} section="6" />
        <CleatsSection products={FOOTBALL_CLEATS.slice(6, 12)} section="7" />
        <CleatsSection products={FOOTBALL_CLEATS.slice(12)} section="8" />
      </div>
      <div className="md:hidden">
        <CleatsSection products={FOOTBALL_CLEATS} />
      </div>
    </section>
  );
}
