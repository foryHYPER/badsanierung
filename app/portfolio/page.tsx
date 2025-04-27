'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Sample portfolio projects
const portfolioProjects = [
  {
    id: 1,
    title: 'Moderne Badsanierung in München',
    client: 'Familie Becker',
    location: 'München',
    year: '2023',
    duration: '3 Wochen',
    budget: '18.000 €',
    description: 'Komplette Renovierung eines veralteten Badezimmers in einem Stadthaus. Das Projekt umfasste den Austausch aller Sanitärobjekte, neue Fliesen und die Installation einer modernen Dusche.',
    challenge: 'Die größte Herausforderung bestand darin, auf begrenztem Raum ein offenes, modernes Badkonzept zu realisieren, ohne auf Funktionalität zu verzichten.',
    solution: 'Wir haben eine ebenerdige Dusche mit Glastrennwand installiert, wandhängende Sanitärobjekte gewählt und durch geschickte Platzierung mehr Raum geschaffen. Ein intelligentes Beleuchtungskonzept verstärkt den Eindruck von Größe.',
    results: 'Das Bad wirkt nun nicht nur größer und moderner, sondern bietet auch mehr Stauraum und verbesserten Komfort.',
    mainImage: '/hero.jpg', // Placeholder, replace with actual image path
    images: [
      { src: '/hero.jpg', alt: 'Vorher - Veraltetes Bad' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Während der Renovation' }, // Placeholder
      { src: '/hero.jpg', alt: 'Nach der Renovation' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Detailansicht Dusche' }, // Placeholder
    ],
    tags: ['modern', 'klein', 'dusche', 'stadthaus', 'komplett'],
    testimonial: {
      quote: "Wir sind absolut begeistert von unserem neuen Bad. Es wirkt so viel größer und heller als zuvor. Die ebenerdige Dusche ist ein echter Luxus und die Materialien sind von höchster Qualität.",
      author: "Sabine Becker",
    }
  },
  {
    id: 2,
    title: 'Barrierefreies Badezimmer in Hamburg',
    client: 'Familie Weber',
    location: 'Hamburg',
    year: '2022',
    duration: '4 Wochen',
    budget: '25.000 €',
    description: 'Umbau eines konventionellen Badezimmers in ein barrierefreies Bad für ein älteres Ehepaar, das weiterhin selbstständig in ihrem Eigenheim leben möchte.',
    challenge: 'Die Herausforderung lag darin, Barrierefreiheit zu schaffen, ohne das Bad klinisch oder unattraktiv wirken zu lassen. Gleichzeitig mussten wir neue Leitungen verlegen und den Boden absenken.',
    solution: 'Wir haben eine ebenerdige Dusche mit Sitzgelegenheit eingebaut, einen höhenverstellbaren Waschtisch installiert und stabile, ästhetisch ansprechende Haltegriffe angebracht. Durch den Einsatz hochwertiger Materialien und indirekter Beleuchtung entstand ein elegantes, zeitloses Design.',
    results: 'Das neue Bad ermöglicht den Bewohnern weiterhin ein selbstständiges Leben in ihrer gewohnten Umgebung, ohne auf Stil und Komfort zu verzichten.',
    mainImage: '/hero-2.jpg', // Placeholder, replace with actual image path
    images: [
      { src: '/hero-2.jpg', alt: 'Vorher - Konventionelles Bad' }, // Placeholder
      { src: '/hero.jpg', alt: 'Während des Umbaus' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Nach dem Umbau' }, // Placeholder
      { src: '/hero.jpg', alt: 'Barrierefreie Dusche mit Sitz' }, // Placeholder
    ],
    tags: ['barrierefrei', 'senioren', 'dusche', 'einfamilienhaus', 'umbau'],
    testimonial: {
      quote: "Der Umbau unseres Bades war die beste Entscheidung. Wir können nun weiterhin in unserem geliebten Zuhause bleiben und genießen gleichzeitig den Komfort eines modernen, sicheren Badezimmers. Die Umsetzung war professionell und reibungslos.",
      author: "Helmut und Ingrid Weber",
    }
  },
  {
    id: 3,
    title: 'Luxusbad mit Wellnessbereich in Berlin',
    client: 'Familie Schmidt',
    location: 'Berlin',
    year: '2023',
    duration: '6 Wochen',
    budget: '42.000 €',
    description: 'Komplette Neugestaltung eines großzügigen Badezimmers mit integriertem Wellnessbereich in einer Stadtvilla.',
    challenge: 'Der Kunde wünschte sich ein luxuriöses Spa-Erlebnis in den eigenen vier Wänden, mit freistehender Badewanne, hochwertiger Regendusche und einem eleganten Gesamtkonzept.',
    solution: 'Wir haben ein ganzheitliches Konzept entwickelt, das eine freistehende Mineralwerkstoff-Badewanne, eine großzügige Regendusche mit Dampffunktion und hochwertige Natursteinoberflächen umfasst. Ein durchdachtes Lichtkonzept schafft verschiedene Stimmungen.',
    results: 'Das neue Badezimmer ist ein privater Rückzugsort mit Spa-Charakter geworden, der höchsten Ansprüchen an Design und Funktionalität gerecht wird.',
    mainImage: '/hero.jpg', // Placeholder, replace with actual image path
    images: [
      { src: '/hero.jpg', alt: 'Vorher - Standardbadezimmer' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Während der Umgestaltung' }, // Placeholder
      { src: '/hero.jpg', alt: 'Freistehende Badewanne' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Regendusche mit Dampffunktion' }, // Placeholder
    ],
    tags: ['luxus', 'wellness', 'badewanne', 'dusche', 'stadtvilla', 'neugestaltung'],
    testimonial: {
      quote: "Unser neues Badezimmer übertrifft alle Erwartungen. Es ist nicht nur wunderschön, sondern bietet uns eine tägliche Auszeit vom Alltag. Die Qualität der Ausführung ist hervorragend, jedes Detail wurde perfekt umgesetzt.",
      author: "Dr. Robert Schmidt",
    }
  },
  {
    id: 4,
    title: 'Familienbad im Landhausstil in Köln',
    client: 'Familie Müller',
    location: 'Köln',
    year: '2023',
    duration: '4 Wochen',
    budget: '22.000 €',
    description: 'Renovierung eines Familienbadezimmers im Landhausstil, das den Bedürfnissen einer fünfköpfigen Familie gerecht wird.',
    challenge: 'Die Herausforderung bestand darin, ein Badezimmer zu schaffen, das sowohl funktional für den Alltag einer großen Familie ist als auch ästhetisch ansprechend und langlebig.',
    solution: 'Wir haben zwei separate Waschbereiche geschaffen, eine großzügige Dusche und eine Badewanne eingebaut sowie zahlreiche Stauraumlösungen integriert. Der Landhausstil mit hochwertigen Holzelementen und klassischen Fliesen sorgt für eine warme, gemütliche Atmosphäre.',
    results: 'Das neue Badezimmer ist ein harmonischer Ort, an dem die gesamte Familie Platz findet und der gleichzeitig durch seine zeitlose Gestaltung viele Jahre Freude bereiten wird.',
    mainImage: '/hero-2.jpg', // Placeholder, replace with actual image path
    images: [
      { src: '/hero-2.jpg', alt: 'Vorher - Veraltetes Familienbad' }, // Placeholder
      { src: '/hero.jpg', alt: 'Während der Renovierung' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Nach der Renovierung' }, // Placeholder
      { src: '/hero.jpg', alt: 'Doppelwaschbereich' }, // Placeholder
    ],
    tags: ['familie', 'landhausstil', 'badewanne', 'dusche', 'einfamilienhaus', 'renovierung'],
    testimonial: {
      quote: "Endlich ein Badezimmer, in dem wir alle Platz haben! Die durchdachte Planung und die hohe Qualität der Ausführung haben uns überzeugt. Besonders die cleveren Stauraumlösungen sind im Familienalltag Gold wert.",
      author: "Christina Müller",
    }
  },
  {
    id: 5,
    title: 'Minimalistische Gästebad-Renovierung in Frankfurt',
    client: 'Herr und Frau Schulz',
    location: 'Frankfurt',
    year: '2022',
    duration: '2 Wochen',
    budget: '12.000 €',
    description: 'Modernisierung eines kleinen Gästebads in einer Stadtwohnung im minimalistischen Stil.',
    challenge: 'Die größte Herausforderung war der sehr begrenzte Raum und der Wunsch, ein modernes, cleanes Design umzusetzen, ohne dass das Bad beengt wirkt.',
    solution: 'Wir haben uns für eine Dusche mit Glasabtrennung, wandhängende Sanitärobjekte und einen flächenbündigen Spiegelschrank entschieden. Durch den Einsatz von großformatigen, hellen Fliesen und indirekter Beleuchtung wirkt der Raum größer und luftiger.',
    results: 'Das Gästebad erscheint nun nicht nur größer, sondern auch moderner und bietet trotz minimalistischem Design allen notwendigen Komfort für Gäste.',
    mainImage: '/hero.jpg', // Placeholder, replace with actual image path
    images: [
      { src: '/hero.jpg', alt: 'Vorher - Veraltetes Gästebad' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Während der Renovierung' }, // Placeholder
      { src: '/hero.jpg', alt: 'Nach der Renovierung' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Duschbereich' }, // Placeholder
    ],
    tags: ['minimalistisch', 'klein', 'gästebad', 'stadtwohnung', 'renovierung'],
    testimonial: {
      quote: "Unser Gästebad hat eine unglaubliche Verwandlung erfahren. Trotz der geringen Größe wirkt es nun geräumig und elegant. Die Qualität der Ausführung ist erstklassig, jedes Detail stimmt.",
      author: "Martin und Petra Schulz",
    }
  },
  {
    id: 6,
    title: 'Vintage-Bad mit modernen Elementen in Dresden',
    client: 'Familie König',
    location: 'Dresden',
    year: '2022',
    duration: '5 Wochen',
    budget: '28.000 €',
    description: 'Sanierung eines Badezimmers in einem Altbau unter Beibehaltung historischer Elemente, kombiniert mit moderner Technik.',
    challenge: 'Die Herausforderung bestand darin, den historischen Charme des Altbaubades zu bewahren und gleichzeitig moderne Funktionalität zu integrieren, ohne dass es wie ein Stilbruch wirkt.',
    solution: 'Wir haben historische Elemente wie die freistehende Badewanne und Vintage-Fliesen mit moderner Technik wie einer Regenwalddusche und energieeffizienter Fußbodenheizung kombiniert. Originalgetreu restaurierte Waschtische wurden mit moderner Sanitärtechnik ausgestattet.',
    results: 'Das Bad verbindet nun erfolgreich die Ästhetik der Vergangenheit mit dem Komfort der Gegenwart und ist ein echter Blickfang im historischen Gebäude.',
    mainImage: '/hero-2.jpg', // Placeholder, replace with actual image path
    images: [
      { src: '/hero-2.jpg', alt: 'Vorher - Historisches Bad' }, // Placeholder
      { src: '/hero.jpg', alt: 'Während der Sanierung' }, // Placeholder
      { src: '/hero-2.jpg', alt: 'Nach der Sanierung' }, // Placeholder
      { src: '/hero.jpg', alt: 'Vintage-Badewanne' }, // Placeholder
    ],
    tags: ['vintage', 'altbau', 'badewanne', 'sanierung', 'historisch'],
    testimonial: {
      quote: "Die Kombination aus Alt und Neu ist perfekt gelungen. Wir genießen den historischen Charme unseres Bades und gleichzeitig allen modernen Komfort. Die Handwerker haben mit viel Liebe zum Detail gearbeitet.",
      author: "Familie König",
    }
  }
];

export default function PortfolioPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  // Extract all unique tags
  const allTags = Array.from(new Set(portfolioProjects.flatMap(project => project.tags)));
  
  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length > 0
    ? portfolioProjects.filter(project => 
        selectedTags.every(tag => project.tags.includes(tag))
      )
    : portfolioProjects;
  
  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  // Open project details
  const openProject = (projectId: number) => {
    setActiveProject(projectId);
    // Scroll to top when opening project details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Close project details
  const closeProject = () => {
    setActiveProject(null);
  };
  
  // Get the active project details
  const currentProject = portfolioProjects.find(p => p.id === activeProject);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[60vw] min-h-[300px] max-h-[600px] overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Badezimmer Projekte"
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
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-lg mb-4">Unsere Badezimmer-Projekte</h1>
            <p className="text-white text-lg sm:text-2xl md:text-2xl font-medium drop-shadow mb-8 max-w-2xl">
              Entdecken Sie unsere erfolgreich umgesetzten Badsanierungen und lassen Sie sich für Ihr eigenes Projekt inspirieren.
            </p>
            <a
              href="#projects"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
            >
              Projekte entdecken
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16" id="projects">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          
        </motion.div>
        
        {/* Portfolio Filter */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Nach Kategorien filtern:</h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag, index) => (
              <button
                key={index}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-all duration-200"
              >
                Filter zurücksetzen
              </button>
            )}
          </div>
        </div>
        
        {activeProject === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80 mt-1">{project.location}, {project.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span>Dauer: {project.duration}</span>
                    </div>
                    <button
                      onClick={() => openProject(project.id)}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Details ansehen
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Project Header */}
                <div className="relative h-80 md:h-96">
                  <Image
                    src={currentProject.mainImage}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <button
                    onClick={closeProject}
                    className="absolute top-4 left-4 bg-white/80 p-2 rounded-full hover:bg-white transition-all"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{currentProject.title}</h1>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag, idx) => (
                        <span key={idx} className="inline-block px-3 py-1 bg-blue-600/90 text-white text-sm font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Projektbeschreibung</h2>
                    <p className="text-gray-700 mb-6">{currentProject.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Die Herausforderung</h3>
                      <p className="text-gray-700">{currentProject.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Unsere Lösung</h3>
                      <p className="text-gray-700">{currentProject.solution}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Das Ergebnis</h3>
                      <p className="text-gray-700">{currentProject.results}</p>
                    </div>
                    
                    {/* Project Images */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Projektbilder</h3>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentProject.images.map((image, idx) => (
                        <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Testimonial */}
                    {currentProject.testimonial && (
                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <blockquote className="italic text-gray-700 mb-4">"{currentProject.testimonial.quote}"</blockquote>
                        <p className="font-medium text-gray-900">— {currentProject.testimonial.author}</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Project Info Sidebar */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Projektdetails</h3>
                    <ul className="space-y-4">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Kunde:</span>
                        <span className="font-medium text-gray-900">{currentProject.client}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Standort:</span>
                        <span className="font-medium text-gray-900">{currentProject.location}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Jahr:</span>
                        <span className="font-medium text-gray-900">{currentProject.year}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Dauer:</span>
                        <span className="font-medium text-gray-900">{currentProject.duration}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium text-gray-900">{currentProject.budget}</span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Ähnliches Projekt gewünscht?</h3>
                      <Link 
                        href="/#kontakt" 
                        className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Kontaktieren Sie uns
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Navigation between projects */}
                <div className="flex justify-between items-center bg-gray-100 p-4">
                  <button
                    onClick={() => openProject(currentProject.id > 1 ? currentProject.id - 1 : portfolioProjects.length)}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Vorheriges Projekt
                  </button>
                  <button
                    onClick={() => openProject(currentProject.id < portfolioProjects.length ? currentProject.id + 1 : 1)}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    Nächstes Projekt
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 