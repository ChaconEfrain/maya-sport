import { hatton } from "@/fonts";

export default function Nav() {
  return (
    <nav className="bg-white w-[1600px] flex justify-between items-center px-64 [&>a]:uppercase [&>a]:underline [&>a]:tracking-wider text-xl font-light h-[100px] absolute left-1/2 -translate-x-1/2">
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#colecciones">Colecciones</a>
      <h1
        className={`uppercase text-5xl font-normal tracking-wider ${hatton.className}`}
      >
        ma - ya sports
      </h1>
      <a href="#colecciones">Catálogos</a>
      <a href="#contacto">Contactos</a>
    </nav>
  );
}
