import { hatton } from "@/fonts";
import React from "react";

export default function Nav() {
  return (
    <nav className="bg-white max-w-[1600px] mx-auto flex justify-between items-center px-64 [&>span]:uppercase [&>span]:underline [&>span]:tracking-wider text-lg font-light h-[100px]">
      <span>Sobre mí</span>
      <span>Colecciones</span>
      <h1 className={`uppercase text-5xl font-normal ${hatton.className}`}>
        ma - ya sports
      </h1>
      <span>Catálogos</span>
      <span>Contactos</span>
    </nav>
  );
}
