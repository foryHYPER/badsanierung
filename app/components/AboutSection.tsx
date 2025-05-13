'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// Team members data
const teamMembers = [
  {
    name: 'Thomas Weber',
    role: 'Geschäftsführer',
    image: '/hero.jpg', // Placeholder - replace with actual team image
    description: 'Mit über 20 Jahren Erfahrung im Sanitärhandwerk leitet Thomas unser Unternehmen und sorgt für höchste Qualitätsstandards.',
  },
  {
    name: 'Lisa Schmidt',
    role: 'Badplanung & Design',
    image: '/hero-2.jpg', // Placeholder - replace with actual team image
    description: 'Unsere kreative Designerin mit einem Auge für ästhetische Details und praktische Raumlösungen.',
  },
  {
    name: 'Michael Bauer',
    role: 'Projektleitung',
    image: '/hero.jpg', // Placeholder - replace with actual team image
    description: 'Verantwortlich für die reibungslose Koordination aller Gewerke und termingerechte Umsetzung Ihrer Badsanierung.',
  }
];

// Company values
const companyValues = [
  {
    title: 'Qualität',
    description: 'Wir setzen auf hochwertige Materialien und präzise Verarbeitung für langlebige Ergebnisse.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Nachhaltigkeit',
    description: 'Umweltfreundliche Materialien und energieeffiziente Lösungen für ein zukunftsorientiertes Badezimmer.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Zuverlässigkeit',
    description: 'Pünktliche Fertigstellung und transparente Kommunikation während des gesamten Projekts.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  }
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <section id="ueber-uns" className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Über uns</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Lernen Sie unser erfahrenes Team kennen – Ihr Partner für hochwertige Badsanierungen seit über 15 Jahren.
          </p>
        </motion.div>
        
        {/* Company Story with Side Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4 md:mb-6">Unsere Geschichte</h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Seit der Gründung im Jahr 2008 hat sich unser Familienunternehmen zu einem führenden Spezialisten für hochwertige Badsanierungen in der Region entwickelt. Was mit einem kleinen Team begann, ist heute ein etabliertes Unternehmen mit über 20 Mitarbeitern.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Unser Erfolgsgeheimnis? Die Kombination aus handwerklicher Präzision, innovativer Badplanung und einem umfassenden Service aus einer Hand. Jedes Projekt wird mit der gleichen Sorgfalt und Leidenschaft umgesetzt – ob kleine Teilsanierung oder komplette Badrenovierung.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 sm:w-16 h-1 bg-blue-700"></div>
              <p className="text-blue-700 font-semibold text-sm sm:text-base">Über 500 erfolgreiche Projekte</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src="/hero-2.jpg" // Replace with company image
                alt="Über uns"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
            </motion.div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm">Jahre Erfahrung</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm">Zufriedene Kunden</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">20+</p>
                  <p className="text-sm">Fachkräfte</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Unsere Werte</h3>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Diese Grundsätze prägen unsere tägliche Arbeit und die Zusammenarbeit mit unseren Kunden.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-16 md:mb-20">
          {companyValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-4 sm:mb-6 mx-auto">
                {value.icon}
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{value.title}</h4>
              <p className="text-sm sm:text-base text-gray-600 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Unser Team</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Die Experten, die Ihr Traumbad Wirklichkeit werden lassen.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-blue-700 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Bereit, Ihr Traumbad zu verwirklichen?</h3>
          <a 
            href="#kontakt" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
          >
            Kontaktieren Sie uns
          </a>
        </motion.div>
      </div>
    </section>
  );
} 