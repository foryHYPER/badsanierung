'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NachhaltigkeitPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[60vw] min-h-[300px] max-h-[600px] overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Nachhaltiges Badezimmer"
            className="absolute w-full h-full object-cover object-center"
            style={{ zIndex: 0 }}
          />
          <div 
            className="absolute inset-0 bg-black pointer-events-none" 
            style={{ zIndex: 1, opacity: 0.6 }}
          />
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" 
            style={{ zIndex: 2 }}
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">Nachhaltiges Badezimmer</h1>
            <p className="text-white text-lg sm:text-2xl md:text-2xl font-medium drop-shadow mb-8 max-w-2xl">
              Umweltfreundliche Lösungen für Ihre Badsanierung, die der Umwelt und Ihrem Geldbeutel zugutekommen.
            </p>
            <a
              href="#nachhaltigkeit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16" id="nachhaltigkeit">
        {/* Introduction Section */}
        <section className="mb-24">
          <div className="md:flex gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 mb-8 md:mb-0"
            >
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/hero.jpg" // Placeholder
                  alt="Nachhaltiges Badezimmer"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum nachhaltig renovieren?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Eine nachhaltige Badsanierung schont nicht nur die Umwelt, sondern spart langfristig auch Kosten durch geringeren Wasser- und Energieverbrauch. Zudem schaffen nachhaltige Materialien ein gesünderes Raumklima und tragen zu Ihrem Wohlbefinden bei.
              </p>
              <ul className="space-y-3">
                {[
                  'Reduzierung des ökologischen Fußabdrucks',
                  'Deutliche Einsparungen bei Wasser- und Energiekosten',
                  'Wertsteigerung Ihrer Immobilie',
                  'Gesünderes Wohnklima durch schadstoffarme Materialien',
                  'Zukunftssicherheit durch langlebige Lösungen'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
        
        {/* Water Saving Solutions */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wassersparende Lösungen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mit modernen Sanitärobjekten und Armaturen können Sie bis zu 60% Wasser im Vergleich zu herkömmlichen Badezimmern einsparen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wassersparende Armaturen',
                description: 'Moderne Armaturen mit Durchflussbegrenzern reduzieren den Wasserverbrauch um bis zu 50%, ohne den Komfort zu beeinträchtigen.',
                savings: 'Bis zu 12.000 Liter pro Person pro Jahr',
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: 'Sparsame Toilettenspülung',
                description: 'Toiletten mit Spülstopp-Funktion oder Zwei-Mengen-Spülung verbrauchen deutlich weniger Wasser als herkömmliche Modelle.',
                savings: 'Bis zu 20.000 Liter pro Haushalt pro Jahr',
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: 'Regenwassernutzung',
                description: 'Durch die Integration eines Regenwassersystems kann Regenwasser für die Toilettenspülung genutzt werden.',
                savings: 'Bis zu 50% Trinkwassereinsparung im Bad',
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block text-sm font-medium">
                  Ersparnis: {item.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Energy Efficiency */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Energieeffizienz im Bad</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mit intelligenten Heizlösungen und energieeffizienten Geräten senken Sie Ihren Energieverbrauch und CO₂-Fußabdruck.
            </p>
          </motion.div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Energiesparende Technologien</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Effiziente Badheizung</h4>
                      <p className="text-gray-700">Moderne Infrarotheizungen oder Handtuchheizkörper mit intelligenter Steuerung sparen bis zu 30% Energie im Vergleich zu konventionellen Heizkörpern.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">LED-Beleuchtung</h4>
                      <p className="text-gray-700">LED-Leuchten verbrauchen bis zu 80% weniger Strom als herkömmliche Glühbirnen und haben eine deutlich längere Lebensdauer.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Wärmerückgewinnung</h4>
                      <p className="text-gray-700">Systeme zur Wärmerückgewinnung aus Abwasser können bis zu 40% der Energie zurückgewinnen, die sonst im Abfluss verloren geht.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Smarte Badsteuerung</h4>
                      <p className="text-gray-700">Intelligente Steuerungssysteme für Heizung, Lüftung und Beleuchtung optimieren den Energieverbrauch basierend auf Ihren Nutzungsgewohnheiten.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative h-96 md:h-auto"
              >
                <Image
                  src="/hero-2.jpg" // Placeholder
                  alt="Energieeffizientes Badezimmer"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent md:hidden"></div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Sustainable Materials */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nachhaltige Materialien</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Von recycelten Fliesen bis zu FSC-zertifiziertem Holz – diese umweltfreundlichen Materialien machen Ihr Bad zum Öko-Vorreiter.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Recyceltes Glas',
                description: 'Fliesen und Oberflächen aus recyceltem Glas reduzieren Abfall und benötigen weniger Energie in der Herstellung als neue Materialien.',
                eco_impact: 'Reduziert Deponieabfall und spart Ressourcen',
                image: '/hero.jpg' // Placeholder
              },
              {
                name: 'FSC-zertifiziertes Holz',
                description: 'Holz aus nachhaltiger Forstwirtschaft für Badmöbel und Verkleidungen garantiert, dass keine Regenwälder zerstört werden.',
                eco_impact: 'Schützt Wälder und Biodiversität',
                image: '/hero-2.jpg' // Placeholder
              },
              {
                name: 'Natürliche Putze und Farben',
                description: 'Kalk- oder Lehmputze sowie Farben auf natürlicher Basis regulieren die Luftfeuchtigkeit und sind frei von Schadstoffen.',
                eco_impact: 'Verbessert die Raumluftqualität',
                image: '/hero.jpg' // Placeholder
              },
              {
                name: 'Recycelter Beton',
                description: 'Waschbecken und Oberflächen aus recyceltem Beton geben Bauabfällen ein zweites Leben und reduzieren CO₂-Emissionen.',
                eco_impact: 'Reduziert CO₂-Ausstoß der Zementproduktion',
                image: '/hero-2.jpg' // Placeholder
              },
              {
                name: 'Kork',
                description: 'Kork ist ein nachwachsender Rohstoff, der für Bodenbeläge und Wandverkleidungen verwendet werden kann. Er ist wasserfest, warm und natürlich antistatisch.',
                eco_impact: 'Nachwachsender Rohstoff mit CO₂-Bindung',
                image: '/hero.jpg' // Placeholder
              },
              {
                name: 'Biologisch abbaubare Oberflächen',
                description: 'Linoleum und andere biologisch abbaubare Materialien für Böden und Oberflächen werden aus nachwachsenden Rohstoffen hergestellt.',
                eco_impact: 'Komplett biologisch abbaubar',
                image: '/hero-2.jpg' // Placeholder
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{material.name}</h3>
                  <p className="text-gray-700 mb-4">{material.description}</p>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full inline-block text-sm font-medium">
                    Umweltvorteil: {material.eco_impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Our Commitment */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:flex items-center gap-12"
            >
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="relative h-72 rounded-xl overflow-hidden">
                  <Image
                    src="/hero.jpg" // Placeholder
                    alt="Unser Engagement für Nachhaltigkeit"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Unser Engagement für Nachhaltigkeit</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Bei uns ist Nachhaltigkeit nicht nur ein Trend, sondern ein zentraler Wert unserer Unternehmensphilosophie. Wir verpflichten uns zu:
                </p>
                <ul className="space-y-3">
                  {[
                    'Umfassende Beratung zu umweltfreundlichen Optionen für jedes Budget',
                    'Sorgfältige Trennung und Recycling von Bauabfällen',
                    'Zusammenarbeit mit lokalen Lieferanten zur Reduzierung von Transportwegen',
                    'Einsatz von energie- und wassersparenden Technologien',
                    'Kontinuierliche Fortbildung unseres Teams zu nachhaltigen Methoden',
                    'Berechnung und Ausgleich der CO₂-Bilanz unserer Badsanierungsprojekte'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit für Ihr nachhaltiges Traumbad?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Lassen Sie sich unverbindlich beraten, welche umweltfreundlichen Optionen für Ihre Badsanierung in Frage kommen.
          </p>
          <a 
            href="/#kontakt" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Nachhaltige Beratung vereinbaren
          </a>
        </motion.div>
      </div>
    </div>
  );
} 