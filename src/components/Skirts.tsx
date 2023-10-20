import { hatton } from "@/fonts";
import Container from "./Container";
import { BALLET_SKIRTS } from "@/constants";
import Image from "next/image";

export default function Skirts() {
  return (
    <section id="ballet-4">
      <Container className="h-screen grid grid-cols-4 justify-items-center">
        <h2
          className={`${hatton.className} tracking-wider uppercase text-5xl leading-snug text-center pt-8 col-span-full`}
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
          className={`justify-self-start self-end pb-4 ${hatton.className} text-3xl font-extralight underline`}
        >
          anterior
        </a>
        <a
          href="#ballet-5"
          className={`col-start-4 justify-self-end self-end pb-4 ${hatton.className} text-3xl font-extralight underline`}
        >
          siguiente
        </a>
      </Container>
    </section>
  );
}
