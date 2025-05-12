'use client'
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Badstile", href: "/badstile" },
  { label: "Nachhaltigkeit", href: "/nachhaltigkeit" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "Kontakt", href: "/kontakt" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-700">INOservis</Link>
          </div>
          {/* Navitems Desktop */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-700"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="bg-blue-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-800 transition-colors duration-200"
            >
              Angebot anfragen
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              aria-label="Menü öffnen"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-full h-full bg-white shadow-lg p-6 flex flex-col items-center justify-center">
            <button
              aria-label="Menü schließen"
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col space-y-6 items-center justify-center flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-xl font-semibold transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-blue-700"
                      : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/kontakt"
              className="mt-10 bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow hover:bg-blue-800 transition-colors duration-200 text-xl text-center w-full max-w-xs"
              onClick={() => setMobileOpen(false)}
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 