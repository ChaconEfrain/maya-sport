import { hatton } from "@/fonts";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="bg-[#969696] h-screen relative flex justify-center items-center">
      <div
        className={`z-10 flex flex-col items-center gap-4 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-2 text-3xl font-extralight`}
      >
        <h2
          className={`${hatton.className} font-normal tracking-wider uppercase text-5xl leading-snug text-center pt-8`}
        >
          Contactos
        </h2>
        <div>
          <span>Teléfonos:</span>
          <div>
            <a href="tel:9992207203">9992207203</a> &{" "}
            <a href="tel:9997387113">9997387113</a>
          </div>
        </div>
        <div>
          <span>Email:</span>
          <a href="mailto:mayasports00@gmail.com">mayasports00@gmail.com</a>
        </div>
        <div>
          <span>Instagram:</span>
          <a
            href="https://www.instagram.com/ma_yasport"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ma_yasport
          </a>
        </div>
        <div>
          <span>Facebook:</span>
          <a
            href="https://www.facebook.com/profile.php?id=61551861338118&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            MA-YA Sports
          </a>
        </div>
      </div>
      <footer className="flex justify-end items-center text-3xl bg-[#ebebeb] w-[1600px] h-[80px] absolute bottom-0 left-1/2 -translate-x-1/2">
        <a href="#" className="px-12 underline">
          Inicio
        </a>
      </footer>
      <Image
        src="/img/contact.webp"
        alt="Arch shaped image"
        width={800}
        height={800}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </section>
  );
}
