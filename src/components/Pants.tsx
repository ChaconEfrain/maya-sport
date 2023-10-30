import Image from "next/image";
import Container from "./Container";
import { BALLET_PANTS } from "@/constants";
import { hatton } from "@/fonts";
import Swiper from "./Swiper";

export default function Pants() {
  return (
    <section id="ballet-5">
      <Container className="min-h-screen grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 justify-items-center">
        <h2
          className={`${hatton.className} tracking-wider uppercase sm:text-5xl text-4xl leading-snug text-center pt-8 col-span-full`}
        >
          Pantalones
        </h2>
        {BALLET_PANTS.map((pants) => (
          <article
            key={pants.name}
            className="w-[250px] lg:h-[350px] flex flex-col gap-4 items-center"
          >
            <Image
              src={pants.image}
              alt={pants.name}
              width={500}
              height={500}
              className="h-80 w-auto"
            />
            <p className={`${hatton.className} text-2xl text-center`}>
              {pants.name}
            </p>
            <span className="font-extralight text-xl mt-auto">
              {pants.price}
            </span>
          </article>
        ))}
        <a
          href="#ballet-4"
          className={`justify-self-start col-start-1 self-end pb-4 ${hatton.className} text-3xl font-extralight underline hidden md:inline-block`}
        >
          anterior
        </a>
        <a
          href="#colecciones"
          className={`lg:col-start-3 col-start-2 justify-self-end self-end pb-4 ${hatton.className} text-3xl font-extralight underline hidden md:inline-block`}
        >
          inicio
        </a>
      </Container>
      {/* <Swiper
        className="lg:hidden"
        products={BALLET_PANTS}
        title="Pantalones"
      /> */}
    </section>
  );
}
