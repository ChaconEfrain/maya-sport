import { hatton } from "@/fonts";
import Image from "next/image";

export default function Collections() {
  return (
    <section className="h-screen">
      <header>
        <h2
          className={`${hatton.className} uppercase text-5xl leading-snug text-center p-14`}
        >
          Colecciones
        </h2>
      </header>
      <div className="max-w-[1600px] bg-white mx-auto flex justify-center gap-36">
        <div className="    ">
          <Image
            src="/img/catalog-ballet.jpeg"
            alt="Bailarina de ballet"
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/img/catalog-football.jpeg"
            alt="Jugador de football americano"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
