import { hatton } from "@/fonts";
import { Menu } from "@/icons";
import NavButton from "./NavButton";
import NavMobile from "./NavMobile";

export default function Nav() {
  return (
    <>
      <nav className="bg-white max-w-[1600px] flex md:justify-center justify-between md:gap-3 lg:gap-6 items-center w-full [&>a]:uppercase [&>a]:underline [&>a]:tracking-wider [&>a]:hidden [&>a]:md:inline-block lg:text-xl text-lg font-light h-[100px] absolute left-1/2 -translate-x-1/2 z-10 px-8 md:px-0">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#colecciones">Colecciones</a>
        <h1
          className={`uppercase lg:text-5xl sm:text-4xl text-2xl font-normal lg:tracking-wider ${hatton.className}`}
        >
          ma - ya sports
        </h1>
        <a href="#colecciones">Catálogos</a>
        <a href="#contacto">Contactos</a>
        <NavButton />
      </nav>
      <NavMobile />
    </>
  );
}
