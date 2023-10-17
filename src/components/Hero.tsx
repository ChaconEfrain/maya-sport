import { hatton } from "@/fonts";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#e0e1e5] h-screen flex justify-center items-center">
      <div className="">
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
