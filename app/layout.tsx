import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INOservis | Facility Management in Hockenheim & Umgebung",
  description:
    "INOservis – Ihr Partner für Facility Management, Hausmeisterservice und Gebäudereinigung im Umkreis von 50 km um 68766 Hockenheim.",
  keywords: [
    "Facility Management Hockenheim",
    "Hausmeisterservice Schwetzingen",
    "Gebäudereinigung Mannheim",
    "Winterdienst Speyer",
    "Objektservice Heidelberg",
    "Gartenpflege Walldorf",
    "Immobilienservice Rhein-Neckar",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} antialiased`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}