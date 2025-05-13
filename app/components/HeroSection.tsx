'use client';

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section 
      className="relative text-white py-12 md:py-24 bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{
        backgroundImage: "url('/Hero1.webp')",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            Wir bringen alles IN Ordnung
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 md:mb-8 text-white">
            INOservis - Ihr Partner für Facility Management
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 text-white">
            Professionelle Lösungen in allen Bereichen des Facility Management und der technischen Objektbetreuung
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Kontakt aufnehmen
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Unsere Leistungen
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 