import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";
import { ttCommons } from "@/fonts";
import NavMobileProvider from "@/context/NavMobileProvider";

export const metadata: Metadata = {
  title: "Maya sports",
  description: "Artículos de ballet y football americano",
  keywords: [
    "Artículos deportivos",
    "Ballet",
    "Football americano",
    "Deporte",
    "Salud",
    "Sports",
  ],
  openGraph: {
    type: "website",
    url: "https://mayasport.vercel.app/",
    title: "Mayasports",
    description: "Artículos de ballet y football americano",
    siteName: "Mayasports",
    images: [
      {
        url: "https://mayasport.vercel.app/img/hero.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavMobileProvider>
      <html lang="en">
        <body
          className={`${ttCommons.className} relative overflow-x-hidden bg-[#ebebeb]`}
        >
          <Nav />
          {children}
        </body>
      </html>
    </NavMobileProvider>
  );
}
