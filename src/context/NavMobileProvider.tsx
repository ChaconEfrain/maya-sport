"use client";
import { ReactNode, createContext, useState } from "react";

interface INavMobile {
  showNav: boolean;
  handleShowNav: () => void;
}

export const NavMobileContext = createContext<INavMobile>({
  showNav: false,
  handleShowNav: () => {},
});

export default function NavMobileProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav((prev) => !prev);

  return (
    <NavMobileContext.Provider value={{ showNav, handleShowNav }}>
      {children}
    </NavMobileContext.Provider>
  );
}
