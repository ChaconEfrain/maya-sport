import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const hatton = localFont({
  src: [
    {
      path: "../app/PP Hatton Bold 700.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../app/PP Hatton Medium 500.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../app/PP Hatton Ultralight 200.woff2",
      weight: "200",
      style: "light",
    },
  ],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  display: "swap",
});
