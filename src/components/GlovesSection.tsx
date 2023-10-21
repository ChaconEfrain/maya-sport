import Image from "next/image";
import Container from "./Container";
import { Product } from "@/types";
import { hatton } from "@/fonts";

interface Props {
  products: Product[];
  section: string;
}

export default function GlovesSection({ products, section }: Props) {
  return (
    <Container
      id={`football-${section}`}
      className="min-h-screen grid grid-cols-3 justify-items-center"
    >
      <h2
        className={`${hatton.className} tracking-wider uppercase text-5xl leading-snug text-center pt-8 col-span-full`}
      >
        Guantes
      </h2>
      {products.map((product) => (
        <article
          key={product.name}
          className="w-[250px] h-[350px] flex flex-col gap-4 items-center"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="h-60 w-auto"
          />
          <p className={`${hatton.className} text-2xl text-center`}>
            {product.name}
          </p>
          <span className="font-extralight text-xl mt-auto">
            {product.price}
          </span>
        </article>
      ))}
      <a
        href={`${
          section === "1" ? "#colecciones" : `#football-${Number(section) - 1}`
        }`}
        className={`justify-self-start self-end pb-4 ${hatton.className} text-3xl font-extralight underline col-start-1`}
      >
        anterior
      </a>
      <a
        href={`#football-${Number(section) + 1}`}
        className={`col-start-3 justify-self-end self-end pb-4 ${hatton.className} text-3xl font-extralight underline`}
      >
        siguiente
      </a>
    </Container>
  );
}
