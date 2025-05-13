'use client'
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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
    <nav className="w-full bg-white/95 backdrop-blur-sm shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="group flex items-center space-x-2"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                INOservis
              </span>
            </Link>
          </div>

          {/* Navitems Desktop */}
          <div className="hidden md:flex flex-1 justify-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50/50"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-lg shadow-md group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-blue-700 to-blue-800 group-hover:translate-x-0 ease">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Angebot anfragen</span>
              <span className="relative invisible">Angebot anfragen</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              aria-label="Menü öffnen"
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-colors duration-200"
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          onClick={() => setMobileOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link 
                  href="/" 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                  onClick={() => setMobileOpen(false)}
                >
                  INOservis
                </Link>
                <button
                  aria-label="Menü schließen"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-colors duration-200"
                >
                  <X size={24} className="text-gray-700" />
                </button>
              </div>

              <nav className="flex-1 px-6 py-8 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-600 hover:text-blue-700 hover:bg-blue-50/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6 border-t border-gray-100">
                <Link
                  href="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                >
                  Angebot anfragen
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
} 