"use client";
import { NavMobileContext } from "@/context/NavMobileProvider";
import { Close } from "@/icons";
import React, { useContext } from "react";

export default function NavMobile() {
  const { showNav, handleShowNav } = useContext(NavMobileContext);

  return (
    <>
      <div
        className={`md:hidden fixed h-screen flex flex-col gap-2 uppercase underline w-3/4 bg-white/90 right-0 top-0 bottom-0 z-20 p-6 text-lg ${
          showNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300`}
      >
        <button onClick={handleShowNav} className="self-end">
          <Close />
        </button>
        <a onClick={handleShowNav} href="#sobre-mi">
          Sobre mí
        </a>
        <a onClick={handleShowNav} href="#colecciones">
          Colecciones
        </a>
        <a onClick={handleShowNav} href="#colecciones">
          Catálogos
        </a>
        <a onClick={handleShowNav} href="#contacto">
          Contactos
        </a>
      </div>
      <div
        onClick={handleShowNav}
        className={`md:hidden fixed h-screen z-10 inset-0 bg-black/80 ${
          showNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300`}
      />
    </>
  );
}
