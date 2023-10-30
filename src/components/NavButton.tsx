"use client";
import { NavMobileContext } from "@/context/NavMobileProvider";
import { Menu } from "@/icons";
import React, { useContext } from "react";

export default function NavButton() {
  const { handleShowNav } = useContext(NavMobileContext);
  return (
    <button onClick={handleShowNav} className="md:hidden">
      <Menu />
    </button>
  );
}
