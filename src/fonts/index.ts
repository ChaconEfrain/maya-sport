import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const hatton = localFont({
  src: [
    {
      path: "./hatton/PP Hatton Bold 700.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./hatton/PP Hatton Medium 500.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./hatton/PP Hatton Ultralight 200.woff2",
      weight: "200",
      style: "light",
    },
  ],
});

export const ttCommons = localFont({
  src: [
    {
      path: "./tt-commons/TT Commons Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "./tt-commons/TT Commons ExtraLight.woff2",
      weight: "200",
      style: "extralight",
    },
    {
      path: "./tt-commons/TT Commons Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "./tt-commons/TT Commons Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tt-commons/TT Commons Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./tt-commons/TT Commons DemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./tt-commons/TT Commons Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "./tt-commons/TT Commons ExtraBold.woff2",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "./tt-commons/TT Commons Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
});
