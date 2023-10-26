import { hatton } from "@/fonts";
import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-white h-screen px-28 py-24 relative">
      <Image
        src="/img/decoracion/circulos.webp"
        alt="Círculos decorativos"
        width={160}
        height={160}
        className="absolute right-24 top-14"
      />
      <Image
        src="/img/decoracion/lazo-3.svg"
        alt="Lazo decorativo"
        width={50}
        height={50}
        className="absolute rotate-90 left-72 -bottom-20"
      />
      <div className="grid grid-cols-2 justify-items-center items-center h-full">
        <Image
          src="/img/about.webp"
          alt="Calzado de football americano"
          width={500}
          height={500}
          className="w-full"
        />
        <div className="flex flex-col gap-8 w-96">
          <h2
            className={`${hatton.className} tracking-wider font uppercase text-5xl leading-snug`}
          >
            Hola y bienvenidos
          </h2>
          <p className="text-3xl leading-10 font-light">
            Aquí, fusionamos la elegancia del ballet y la fuerza del fútbol
            americano en cada prenda y accesorio que ofrecemos. Descubre nuestra
            amplia gama de artículos cuidadosamente seleccionados para que
            brilles en la danza y conquistes en el campo. ¡Exprésate con gracia
            y poder en cada movimiento!
          </p>
        </div>
      </div>
    </section>
  );
}
