'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Features data
const features = [
  {
    id: 1,
    title: 'Alles aus einer Hand',
    description: 'Von der Planung bis zur Ausführung – wir koordinieren sämtliche Gewerke und sind Ihr einziger Ansprechpartner während der gesamten Badsanierung.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Höchste Qualitätsstandards',
    description: 'Wir verwenden ausschließlich hochwertige Materialien und arbeiten mit erfahrenen Handwerkern, um eine lange Lebensdauer Ihres Badezimmers zu garantieren.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Festpreisgarantie',
    description: 'Sie erhalten ein transparentes Angebot mit Festpreisgarantie. So behalten Sie die Kosten im Blick und müssen keine unerwarteten Nachzahlungen fürchten.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Termintreue',
    description: 'Wir halten uns an den vereinbarten Zeitplan und sorgen dafür, dass Ihre Badsanierung pünktlich abgeschlossen wird, ohne unnötige Verzögerungen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Maßgeschneiderte Lösungen',
    description: 'Wir entwickeln individuelle Konzepte, die perfekt zu Ihren Wünschen, Ihrem Budget und den räumlichen Gegebenheiten passen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 6,
    title: '5 Jahre Garantie',
    description: 'Wir stehen für unsere Arbeit ein und bieten Ihnen eine umfassende 5-Jahres-Garantie auf alle handwerklichen Leistungen.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  
  return (
    <section id="vorteile" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background image with parallax effect */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <Image
            src="/hero-2.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 h-[120%] bg-gradient-to-b from-slate-900/90 via-blue-900/70 to-slate-900/95" />
        </motion.div>
      </div>
      
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum Sie uns vertrauen können</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sechs gute Gründe, die für eine Badsanierung mit unserem Team sprechen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="group bg-slate-800 bg-opacity-80 backdrop-blur-lg rounded-xl p-8 h-full border border-slate-700 hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
                <div className="p-3 bg-blue-900 bg-opacity-50 rounded-lg inline-block mb-4 group-hover:bg-blue-700 transition-colors duration-300">
                  <div className="text-blue-400 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300">
                  {feature.description}
                </p>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl italic font-light text-slate-300 max-w-4xl mx-auto mb-8">
            "Wir gestalten nicht nur Badezimmer, sondern schaffen Orte der Entspannung und des Wohlbefindens – individuell, qualitativ hochwertig und langfristig wertsteigernd."
          </blockquote>
          <a 
            href="#referenzen" 
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Entdecken Sie unsere Referenzen
          </a>
        </motion.div>
      </div>
    </section>
  );
} 