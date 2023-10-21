import About from "@/components/About";
import Collections from "@/components/Collections";
import Gloves from "@/components/Gloves";
import Hero from "@/components/Hero";
import Leotards from "@/components/Leotards";
import Pants from "@/components/Pants";
import Skirts from "@/components/Skirts";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Collections />
      <Leotards />
      <Skirts />
      <Pants />
      <Gloves />
    </main>
  );
}
