import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[60vw] min-h-[300px] max-h-[600px] overflow-hidden">
        {/* Using regular img tag instead of Next.js Image */}
        <img
          src="/hero-2.jpg"
          alt="Badsanierung Hero"
          className="absolute w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />
        {/* Overlay with reduced opacity */}
        <div 
          className="absolute inset-0 bg-black pointer-events-none" 
          style={{ zIndex: 1, opacity: 0.6 }}
        />
        {/* Text-Content */}
        <div 
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" 
          style={{ zIndex: 2 }}
        >
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">Ihre neue Wohlfühloase</h1>
          <p className="text-white text-lg sm:text-2xl md:text-2xl font-medium drop-shadow mb-8 max-w-2xl">Professionelle Badsanierung aus einer Hand – modern, zuverlässig und individuell auf Ihre Wünsche abgestimmt.</p>
          <a
            href="#kontakt"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
          >
            Jetzt Beratung anfragen
          </a>
        </div>
      </div>
    </section>
  );
} 