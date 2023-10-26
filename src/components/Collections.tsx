import { hatton } from "@/fonts";
import Image from "next/image";

export default function Collections() {
  return (
    <section id="colecciones" className="h-screen relative">
      <Image
        src="/img/decoracion/sol.webp"
        alt="Sol decorativo"
        width={220}
        height={220}
        className="absolute left-44 top-24"
      />
      <Image
        src="/img/decoracion/sol.webp"
        alt="Sol decorativo"
        width={220}
        height={220}
        className="absolute right-24 bottom-40"
      />
      <header>
        <h2
          className={`${hatton.className} tracking-wider uppercase text-5xl leading-snug text-center py-12`}
        >
          Colecciones
        </h2>
      </header>
      <div className="max-w-[1600px] bg-white mx-auto flex justify-center gap-36 py-14">
        <div className="w-[30%] flex flex-col items-center gap-5 text-xl">
          <a href="#ballet-1" className="flex flex-col gap-5">
            <Image
              src="/img/catalog-ballet.jpeg"
              alt="Bailarina de ballet"
              width={500}
              height={500}
            />
            <h2
              className={`${hatton.className} uppercase text-3xl underline text-center`}
            >
              Ballet
            </h2>
          </a>
          <p className="text-center font-light w-[90%]">
            Catálogo donde la pasión, la gracia y la elegancia se encuentran en
            cada prenda y accesorio. Descubre nuestra cuidadosamente
            seleccionada colección diseñada para destacar en el mundo del ballet
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center gap-5 text-xl">
          <a href="#football-1" className="flex flex-col gap-5">
            <Image
              src="/img/catalog-football.jpeg"
              alt="Jugador de football americano"
              width={500}
              height={500}
            />
            <h2
              className={`${hatton.className} uppercase text-3xl underline text-center`}
            >
              Fútbol americano
            </h2>
          </a>
          <p className="text-center font-light w-[90%]">
            Catálogo donde la pasión y la excelencia se unen para potenciar tu
            desempeño en el campo! Explora nuestra amplia gama de productos
            diseñados para brindar comodidad, durabilidad y estilo
          </p>
        </div>
      </div>
    </section>
  );
}
