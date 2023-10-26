import { hatton } from "@/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#e0e1e5] h-screen flex justify-center items-center relative">
      <Image
        src="/img/decoracion/lazo-1.svg"
        alt="Lazo decorativo"
        width={500}
        height={500}
        className="absolute h-[450px] rotate-[200deg] z-10 top-6 left-0"
      />
      <Image
        src="/img/decoracion/lazo-2.svg"
        alt="Lazo decorativo"
        width={500}
        height={500}
        className="absolute h-[500px] -right-16 top-64"
      />
      <Image
        src="/img/decoracion/estrella-gris.webp"
        alt="Estrella gris"
        width={75}
        height={75}
        className="absolute right-36 top-28"
      />
      <div>
        <Image
          src="/img/hero.webp"
          alt="Mayasport logo"
          width={650}
          height={650}
        />
        <div className="flex flex-col gap-4">
          <span
            className={`${hatton.className} text-5xl text-center font-medium`}
          >
            Ropa y accesorios
          </span>
          <span
            className={`${hatton.className} text-4xl text-center font-extralight`}
          >
            para ballet y fútbol americano
          </span>
        </div>
      </div>
    </section>
  );
}
