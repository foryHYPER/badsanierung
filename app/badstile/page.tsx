'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Bathroom styles data
const bathroomStyles = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Klare Linien, minimalistische Ästhetik und funktionales Design charakterisieren den modernen Badezimmerstil. Der Fokus liegt auf Schlichtheit, geometrischen Formen und einer monochromen Farbpalette mit gelegentlichen Farbakzenten.',
    characteristics: [
      'Geradlinige Sanitärobjekte',
      'Großformatige Fliesen',
      'Freistehende oder wandhängende Möbel',
      'Klare Linien und geometrische Formen',
      'Matter schwarzer oder glänzender Chrom-Finish für Armaturen'
    ],
    materials: [
      'Keramik',
      'Glas',
      'Beton',
      'Edelstahl',
      'Kunstharz'
    ],
    colors: [
      'Weiß',
      'Grau',
      'Schwarz',
      'Mit Akzenten in kräftigen Farben'
    ],
    image: '/hero.jpg' // Placeholder
  },
  {
    id: 'traditional',
    name: 'Traditionell',
    description: 'Dieser zeitlose Stil verbindet klassische Eleganz mit Gemütlichkeit. Er zeichnet sich durch detailreiche Verzierungen, weiche Linien und warme Farbtöne aus, die ein Gefühl von Luxus und Behaglichkeit vermitteln.',
    characteristics: [
      'Detaillierte Schnitzereien und Verzierungen',
      'Freistehende Badewannen mit Füßen',
      'Konsolwaschtische mit sichtbaren Beinen',
      'Vintage-inspirierte Sanitärelemente',
      'Aufwendige Spiegelrahmen'
    ],
    materials: [
      'Naturstein (Marmor, Granit)',
      'Hochwertige Hölzer',
      'Porzellan',
      'Messing',
      'Bronze'
    ],
    colors: [
      'Cremeweiß',
      'Beige',
      'Warme Erdtöne',
      'Reiches Grün oder Blau'
    ],
    image: '/hero-2.jpg' // Placeholder
  },
  {
    id: 'scandinavian',
    name: 'Skandinavisch',
    description: 'Skandinavisches Design zeichnet sich durch seine Einfachheit, Funktionalität und natürliche Schönheit aus. Dieser Stil schafft helle, luftige Räume durch den Einsatz von natürlichen Materialien und einer zurückhaltenden Farbgebung.',
    characteristics: [
      'Funktionalität und Einfachheit',
      'Viel natürliches Licht',
      'Saubere, unverfälschte Linien',
      'Abgerundete Kanten',
      'Minimalistische Accessoires'
    ],
    materials: [
      'Helles Holz (Eiche, Birke, Kiefer)',
      'Naturstein',
      'Keramik',
      'Leinen und andere natürliche Textilien',
      'Matt weiße Oberflächen'
    ],
    colors: [
      'Weiß',
      'Hellgrau',
      'Pastellfarben',
      'Natürliche Holztöne'
    ],
    image: '/hero.jpg' // Placeholder
  },
  {
    id: 'industrial',
    name: 'Industrial',
    description: 'Der Industrial-Stil bringt die Ästhetik von Fabrikhallen und Werkstätten ins Badezimmer. Rohe, unbehandelte Materialien, offene Rohrleitungen und metallische Akzente erzeugen einen maskulinen, urbanen Look.',
    characteristics: [
      'Offene Rohrleitungen und Installationen',
      'Betonwaschbecken oder -badewannen',
      'Vintage-Fabrikleuchten',
      'Offene Regalsysteme aus Metall',
      'Sichtbare Strukturelemente'
    ],
    materials: [
      'Beton',
      'Rostiges oder patiniertes Metall',
      'Recyceltes Holz',
      'Ziegelstein',
      'Rohes oder geschwärztes Eisen'
    ],
    colors: [
      'Grau',
      'Schwarz',
      'Rostbraun',
      'Naturholz'
    ],
    image: '/hero-2.jpg' // Placeholder
  },
  {
    id: 'mediterranean',
    name: 'Mediterran',
    description: 'Inspiriert von den Küstenregionen Spaniens, Italiens und Griechenlands, bringt der mediterrane Stil warme Erdtöne, handgefertigte Fliesen und rustikale Elemente ins Badezimmer, die ein Gefühl von Entspannung und Urlaub vermitteln.',
    characteristics: [
      'Handbemalte oder gemusterte Fliesen',
      'Gewölbte Türöffnungen',
      'Runde, weiche Formen',
      'Handwerkliche Details',
      'Geölte Bronze- oder Kupferarmaturen'
    ],
    materials: [
      'Terrakotta',
      'Keramikfliesen',
      'Naturstein',
      'Holz mit Patina',
      'Geschmiedetes Eisen'
    ],
    colors: [
      'Terrakotta',
      'Blau in verschiedenen Schattierungen',
      'Gelb und Gold',
      'Olivgrün',
      'Warme Erdtöne'
    ],
    image: '/hero.jpg' // Placeholder
  },
  {
    id: 'japanese',
    name: 'Japanisch',
    description: 'Der japanische Badezimmerstil verkörpert Ruhe, Einfachheit und Natürlichkeit. Er betont die Harmonie zwischen innen und außen durch natürliche Materialien und einen meditativen, minimalistischen Ansatz.',
    characteristics: [
      'Minimalismus und Schlichtheit',
      'Tiefe Badewannen (Ofuro)',
      'Getrennte Bereiche zum Waschen und Baden',
      'Sitzgelegenheiten in der Dusche',
      'Indoor-Pflanzen'
    ],
    materials: [
      'Bambus',
      'Holz (insbesondere Zypresse und Zeder)',
      'Naturstein',
      'Reispapier',
      'Matte Keramik'
    ],
    colors: [
      'Natürliches Holzbraun',
      'Schwarz',
      'Weiß',
      'Sanfte Grün- und Grautöne'
    ],
    image: '/hero-2.jpg' // Placeholder
  }
];

// Material information
const materialInfo = [
  {
    category: 'Bodenbeläge',
    materials: [
      {
        name: 'Keramikfliesen',
        pros: [
          'Langlebig und wasserbeständig',
          'Große Auswahl an Designs',
          'Pflegeleicht',
          'Widerstandsfähig gegen Flecken'
        ],
        cons: [
          'Hart und kalt unter den Füßen',
          'Kann bei Nässe rutschig sein',
          'Fugen können verschmutzen'
        ],
        maintenance: 'Regelmäßige Reinigung mit milden Reinigungsmitteln. Versiegelung der Fugen alle 1-2 Jahre.'
      },
      {
        name: 'Naturstein',
        pros: [
          'Einzigartiges natürliches Aussehen',
          'Langlebig und wertig',
          'Wärmespeichernd',
          'Zeitlos elegant'
        ],
        cons: [
          'Teurer als Keramik',
          'Regelmäßige Versiegelung notwendig',
          'Empfindlich gegenüber Säuren',
          'Kann porös sein'
        ],
        maintenance: 'Steinseife zur Reinigung verwenden. Regelmäßige Versiegelung alle 1-2 Jahre je nach Steinart.'
      },
      {
        name: 'Vinylboden',
        pros: [
          'Wasserbeständig',
          'Weich und warm unter den Füßen',
          'Leicht zu installieren',
          'Kostengünstig'
        ],
        cons: [
          'Weniger langlebig als Fliesen',
          'Kann durch scharfe Gegenstände beschädigt werden',
          'Weniger hochwertige Optik'
        ],
        maintenance: 'Einfache Reinigung mit Wischmopp und mildem Reinigungsmittel.'
      }
    ]
  },
  {
    category: 'Wandbeläge',
    materials: [
      {
        name: 'Wandfliesen',
        pros: [
          'Wasserdicht und beständig gegen Feuchtigkeit',
          'Breites Spektrum an Stilen und Farben',
          'Leicht zu reinigen',
          'Langlebig'
        ],
        cons: [
          'Installation erfordert Fachkenntnisse',
          'Fugen können verschmutzen',
          'Nachträgliches Entfernen ist aufwendig'
        ],
        maintenance: 'Regelmäßige Reinigung mit nicht-scheuernden Reinigungsmitteln. Fugen bei Bedarf mit Dampfreiniger säubern.'
      },
      {
        name: 'Feuchtraumtapete',
        pros: [
          'Schnell und einfach anzubringen',
          'Große Auswahl an Designs und Mustern',
          'Weiche, warme Optik',
          'Kostengünstig'
        ],
        cons: [
          'Weniger langlebig in Hochfeuchtigkeitsbereichen',
          'Nicht für Duschen geeignet',
          'Kann sich bei extremer Feuchtigkeit lösen'
        ],
        maintenance: 'Mit feuchtem Tuch abwischen. Vor direktem Wasserspritzen schützen.'
      },
      {
        name: 'Wandpaneele',
        pros: [
          'Nahtlose Installation ohne Fugen',
          'Wasserdicht',
          'Schnelle und einfache Montage',
          'Können über bestehende Fliesen installiert werden'
        ],
        cons: [
          'Höhere Kosten als Fliesen',
          'Begrenzte Designauswahl',
          'Reparaturen können schwierig sein'
        ],
        maintenance: 'Einfache Reinigung mit weichem Tuch und mildem Reinigungsmittel.'
      }
    ]
  },
  {
    category: 'Sanitärobjekte',
    materials: [
      {
        name: 'Keramik',
        pros: [
          'Klassischer Look',
          'Widerstandsfähig gegen Flecken',
          'Pflegeleicht',
          'Kostengünstig'
        ],
        cons: [
          'Kann zerkratzen oder absplittern',
          'Begrenzte Formgebung durch Material',
          'Kalt bei Berührung'
        ],
        maintenance: 'Regelmäßige Reinigung mit nicht-scheuernden Badreinigern.'
      },
      {
        name: 'Mineralguss',
        pros: [
          'Vielseitige Gestaltungsmöglichkeiten',
          'Porenfreie, glatte Oberfläche',
          'Angenehm warm',
          'Reparaturfähig'
        ],
        cons: [
          'Empfindlicher als Keramik',
          'Kann durch Farbstoffe flecken',
          'Teurer als traditionelle Materialien'
        ],
        maintenance: 'Tägliche Reinigung mit weichem Tuch, keine scheuernden Reinigungsmittel verwenden.'
      },
      {
        name: 'Naturstein',
        pros: [
          'Einzigartiges Aussehen',
          'Sehr langlebig',
          'Höchste Wertigkeit',
          'Natürliche Schönheit'
        ],
        cons: [
          'Sehr teuer',
          'Schwer',
          'Erfordert regelmäßige Versiegelung',
          'Empfindlich gegenüber Säuren und Farbstoffen'
        ],
        maintenance: 'Spezielle Steinseife zur Reinigung. Regelmäßige Versiegelung (1-2 mal jährlich).'
      }
    ]
  }
];

// Color schemes data
const colorSchemes = [
  {
    name: 'Zeitlos Neutral',
    description: 'Eine Palette aus Weiß-, Grau- und Beigetönen schafft ein zeitloses Badezimmer, das nie aus der Mode kommt.',
    colors: ['#FFFFFF', '#F5F5F5', '#E0E0E0', '#BEBEBE', '#787878'],
    tips: 'Fügen Sie Textur durch unterschiedliche Materialien hinzu, um Monotonie zu vermeiden. Metall-Akzente in Chrom oder gebürstetem Nickel ergänzen dieses Schema perfekt.'
  },
  {
    name: 'Maritimes Blau',
    description: 'Verschiedene Blautöne kombiniert mit Weiß und Sandfarben erinnern an Meer und Strand.',
    colors: ['#FFFFFF', '#E6F2F5', '#A5CCDE', '#5A92AF', '#1E5B84'],
    tips: 'Begrenzen Sie die dunkleren Blautöne auf Akzente oder eine Wand. Accessoires aus Naturmaterialien wie Holz und Seil verstärken den maritimen Charakter.'
  },
  {
    name: 'Erdige Wärme',
    description: 'Warme Braun- und Terrakottatöne schaffen eine gemütliche, erdverbundene Atmosphäre.',
    colors: ['#F9F5F0', '#E6CCAB', '#C19A6B', '#9F7B51', '#5E4B3B'],
    tips: 'Kombinieren Sie mit Elementen aus Holz und Stein für einen organischen Look. Pflanzen fügen einen lebendigen Kontrast hinzu.'
  },
  {
    name: 'Modernes Monochrom',
    description: 'Ein elegantes Schwarz-Weiß-Schema mit grauen Zwischentönen für einen zeitgemäßen, urbanen Look.',
    colors: ['#FFFFFF', '#D8D8D8', '#A8A8A8', '#474747', '#000000'],
    tips: 'Fügen Sie einen einzelnen Farbakzent hinzu, um das Schema aufzulockern. Metallische Details in Gold oder Kupfer schaffen Wärme und Kontrast.'
  },
  {
    name: 'Naturinspiriert',
    description: 'Sanfte Grüntöne kombiniert mit Holzfarben und Weiß bringen die Natur ins Badezimmer.',
    colors: ['#FFFFFF', '#E8EEDF', '#BBC8BA', '#718F70', '#364B34'],
    tips: 'Ergänzen Sie mit natürlichen Materialien wie Holz und Stein. Echte Pflanzen verstärken das Naturthema und verbessern die Luftqualität.'
  },
  {
    name: 'Luxuriöses Juwel',
    description: 'Reichhaltige Juwelentöne wie Smaragdgrün oder Saphirblau schaffen ein Gefühl von Luxus und Drama.',
    colors: ['#FFFFFF', '#D6E1E0', '#0D5C63', '#373F51', '#242038'],
    tips: 'Verwenden Sie die kräftigsten Farben sparsam als Akzente. Kombinieren Sie mit metallischen Oberflächen in Gold oder Messing für zusätzlichen Glanz.'
  }
];

export default function BadstilePage() {
  const [activeStyle, setActiveStyle] = useState(bathroomStyles[0].id);
  const [activeMaterialCategory, setActiveMaterialCategory] = useState(materialInfo[0].category);
  
  // Get current style info
  const currentStyle = bathroomStyles.find(style => style.id === activeStyle) || bathroomStyles[0];
  
  // Get current material category
  const currentMaterialCategory = materialInfo.find(cat => cat.category === activeMaterialCategory) || materialInfo[0];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[60vw] min-h-[300px] max-h-[600px] overflow-hidden">
          <img
            src="/hero-2.jpg"
            alt="Badezimmer Stilguide"
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
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">Badezimmer-Stilguide</h1>
            <p className="text-white text-lg sm:text-2xl md:text-2xl font-medium drop-shadow mb-8 max-w-2xl">
              Entdecken Sie verschiedene Badezimmerstile, Materialien und Farbkonzepte für die perfekte Gestaltung Ihres Traumbades.
            </p>
            <a
              href="#styles"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
            >
              Stile entdecken
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16" id="styles">
        {/* Bathroom Styles Section */}
        <section className="mb-24">
          {/* Style Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {bathroomStyles.map(style => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(style.id)}
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  activeStyle === style.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {style.name}
              </button>
            ))}
          </div>
          
          {/* Style Details */}
          <motion.div
            key={activeStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-80 md:h-full">
                  <Image
                    src={currentStyle.image}
                    alt={currentStyle.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentStyle.name}er Stil</h3>
                <p className="text-gray-700 mb-6">{currentStyle.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Charakteristika</h4>
                  <ul className="space-y-1">
                    {currentStyle.characteristics.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Typische Materialien</h4>
                  <ul className="space-y-1">
                    {currentStyle.materials.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Farbpalette</h4>
                  <ul className="space-y-1">
                    {currentStyle.colors.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Materials Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Materialien für Ihr Bad</h2>
          
          {/* Materials Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {materialInfo.map(category => (
              <button
                key={category.category}
                onClick={() => setActiveMaterialCategory(category.category)}
                className={`px-5 py-2 rounded-full transition-all duration-200 ${
                  activeMaterialCategory === category.category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
          
          {/* Materials Details */}
          <motion.div
            key={activeMaterialCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {currentMaterialCategory.materials.map((material, index) => (
              <div 
                key={material.name}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{material.name}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">Vorteile</h4>
                      <ul className="space-y-1">
                        {material.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-red-600 mb-2">Nachteile</h4>
                      <ul className="space-y-1">
                        {material.cons.map((con, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">Pflege</h4>
                      <p className="text-gray-700">{material.maintenance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>
        
        {/* Color Schemes Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Farbkonzepte für Ihr Bad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colorSchemes.map((scheme, index) => (
              <motion.div
                key={scheme.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{scheme.name}</h3>
                  <p className="text-gray-700 mb-4">{scheme.description}</p>
                  
                  <div className="flex mb-4">
                    {scheme.colors.map((color, idx) => (
                      <div 
                        key={idx} 
                        className="w-12 h-12 rounded-full border border-gray-200 mr-2" 
                        style={{ backgroundColor: color }} 
                      />
                    ))}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Tipps</h4>
                  <p className="text-gray-700">{scheme.tips}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-blue-50 rounded-xl p-8 border border-blue-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bereit für Ihr persönliches Traumbad?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Lassen Sie sich von unseren Experten beraten und erstellen Sie gemeinsam mit uns Ihr individuelles Badkonzept.
          </p>
          <a 
            href="/#kontakt" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Kostenlose Beratung vereinbaren
          </a>
        </motion.div>
      </div>
    </div>
  );
} 