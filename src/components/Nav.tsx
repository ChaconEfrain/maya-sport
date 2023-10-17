import { hatton } from "@/fonts";

export default function Nav() {
  return (
    <nav className="bg-white w-[1600px] flex justify-between items-center px-64 [&>span]:uppercase [&>span]:underline [&>span]:tracking-wider text-lg font-light h-[100px] absolute left-1/2 -translate-x-1/2">
      <span>Sobre mí</span>
      <span>Colecciones</span>
      <h1
        className={`uppercase text-5xl font-normal tracking-wider ${hatton.className}`}
      >
        ma - ya sports
      </h1>
      <span>Catálogos</span>
      <span>Contactos</span>
    </nav>
  );
}
