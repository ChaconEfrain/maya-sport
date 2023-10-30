import { hatton } from "@/fonts";
import Container from "./Container";
import { BALLET_SKIRTS } from "@/constants";
import Image from "next/image";
import Swiper from "./Swiper";

export default function Skirts() {
  return (
    <section id="ballet-4">
      <Container className="min-h-screen grid lg:grid-cols-4 md:grid-cols-2 gap-y-8 justify-items-center">
        <h2
          className={`${hatton.className} tracking-wider uppercase text-4xl sm:text-5xl leading-snug text-center pt-8 col-span-full`}
        >
          Faldas
        </h2>
        {BALLET_SKIRTS.map((skirt) => (
          <article
            key={skirt.name}
            className="w-[250px] h-[350px] flex flex-col gap-4 items-center"
          >
            <Image
              src={skirt.image}
              alt={skirt.name}
              width={500}
              height={500}
              className="h-60 w-auto"
            />
            <p className={`${hatton.className} text-2xl text-center`}>
              {skirt.name}
            </p>
            <span className="font-extralight text-xl mt-auto">
              {skirt.price}
            </span>
          </article>
        ))}
        <a
          href="#ballet-3"
          className={`col-start-1 justify-self-start self-end pb-4 ${hatton.className} text-3xl font-extralight underline hidden md:inline-block`}
        >
          anterior
        </a>
        <a
          href="#ballet-5"
          className={`lg:col-start-4 col-start-2 justify-self-end self-end pb-4 ${hatton.className} text-3xl font-extralight underline hidden md:inline-block`}
        >
          siguiente
        </a>
      </Container>
      {/* <Swiper className="lg:hidden" products={BALLET_SKIRTS} title="Faldas" /> */}
    </section>
  );
}
