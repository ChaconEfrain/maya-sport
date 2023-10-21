import About from "@/components/About";
import BackAndTowels from "@/components/BackAndTowels";
import Cleats from "@/components/Cleats";
import Collections from "@/components/Collections";
import Contact from "@/components/Contact";
import Gloves from "@/components/Gloves";
import Hero from "@/components/Hero";
import Leotards from "@/components/Leotards";
import MouthGuards from "@/components/MouthGuards";
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
      <MouthGuards />
      <BackAndTowels />
      <Cleats />
      <Contact />
    </main>
  );
}
