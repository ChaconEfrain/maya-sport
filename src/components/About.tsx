import { hatton } from "@/fonts";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="bg-white min-h-screen p-4 sm:p-8 md:px-16 md:py-10 xl:px-28 xl:py-24 relative flex justify-center items-center xl:block"
    >
      <Image
        src="/img/decoracion/circulos.webp"
        alt="Círculos decorativos"
        width={160}
        height={160}
        className="absolute 2xl:right-24 2xl:top-14 lg:right-10 lg:top-6 top-0 right-0 w-32 lg:w-40"
      />
      <Image
        src="/img/decoracion/lazo-3.svg"
        alt="Lazo decorativo"
        width={50}
        height={50}
        className="absolute rotate-90 left-72 -bottom-20 hidden lg:block"
      />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 justify-items-center items-center h-full">
        <Image
          src="/img/about.webp"
          alt="Calzado de football americano"
          width={500}
          height={500}
          className="lg:w-full z-10 lg:z-auto"
        />
        <div className="flex flex-col gap-8 lg:w-96">
          <h2
            className={`${hatton.className} tracking-wider font uppercase text-3xl sm:text-4xl md:text-5xl leading-snug`}
          >
            Hola y bienvenidos
          </h2>
          <p className="md:text-3xl sm:text-2xl text-xl md:leading-10 font-light">
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
