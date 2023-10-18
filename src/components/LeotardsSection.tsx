import { hatton } from "@/fonts";
import Container from "./Container";
import { Product } from "@/types";
import Image from "next/image";

interface Props {
  images: Product[];
}

export default function LeotardsSection({ images }: Props) {
  return (
    <Container className="h-screen grid grid-cols-3 justify-items-center">
      <h2
        className={`${hatton.className} tracking-wider uppercase text-5xl leading-snug text-center pt-8 col-span-full`}
      >
        Ballet
      </h2>
      {images.map((img) => (
        <article
          key={img.name}
          className="w-[250px] h-[350px] flex flex-col gap-4 items-center"
        >
          <Image
            src={img.thumbnail}
            alt={img.name}
            width={500}
            height={500}
            className="h-60 w-auto"
          />
          <p className={`${hatton.className} text-2xl text-center`}>
            {img.name}
          </p>
          <span className="font-extralight text-xl mt-auto">{img.price}</span>
        </article>
      ))}
    </Container>
  );
}
