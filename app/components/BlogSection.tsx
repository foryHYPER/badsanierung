'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Die 5 größten Fehler bei der Badsanierung und wie Sie diese vermeiden',
    excerpt: 'Erfahren Sie, welche häufigen Fehler bei der Badsanierung auftreten und wie Sie diese durch sorgfältige Planung umgehen können.',
    category: 'Planung',
    date: '15. Juni 2023',
    image: '/hero.jpg', // Placeholder
    readTime: '6 min',
    author: 'Thomas Weber',
    content: `
      <p>Eine Badsanierung ist ein komplexes Projekt, bei dem viele Entscheidungen getroffen werden müssen. Hier sind die 5 häufigsten Fehler und wie Sie diese vermeiden können:</p>
      
      <h3>1. Unzureichende Planung</h3>
      <p>Viele unterschätzen den Planungsaufwand bei einer Badsanierung. Nehmen Sie sich ausreichend Zeit für die Planung, um spätere Änderungen und zusätzliche Kosten zu vermeiden.</p>
      
      <h3>2. Unrealistisches Budget</h3>
      <p>Kalkulieren Sie großzügig und planen Sie eine Reserve von ca. 15-20% für unvorhergesehene Ausgaben ein.</p>
      
      <h3>3. Falsche Materialauswahl</h3>
      <p>Nicht alle Materialien eignen sich für den Feuchtraumbereich. Achten Sie auf spezielle Badezimmer-geeignete Produkte und deren Pflegeeigenschaften.</p>
      
      <h3>4. Vernachlässigung der Lüftung</h3>
      <p>Ein effizientes Lüftungssystem ist unverzichtbar, um Schimmelbildung vorzubeugen. Investieren Sie in eine gute Lüftungsanlage.</p>
      
      <h3>5. Zu wenig Stauraum</h3>
      <p>Planen Sie ausreichend Stauraum für Handtücher, Hygieneartikel und Reinigungsmittel ein. Clevere Lösungen sparen Platz und sorgen für Ordnung.</p>
    `
  },
  {
    id: 2,
    title: 'Aktuelle Trends für moderne Badezimmer in 2023',
    excerpt: 'Von nachhaltigen Materialien bis zu smarten Technologien – diese Trends dominieren moderne Badezimmer im Jahr 2023.',
    category: 'Trends',
    date: '3. August 2023',
    image: '/hero-2.jpg', // Placeholder
    readTime: '8 min',
    author: 'Lisa Schmidt',
    content: `
      <p>Das moderne Badezimmer entwickelt sich ständig weiter. Hier sind die wichtigsten Trends für 2023:</p>
      
      <h3>1. Nachhaltige Materialien</h3>
      <p>Umweltfreundliche Materialien wie Recyclingglas, verantwortungsvoll beschafftes Holz und energieeffiziente Armaturen stehen im Fokus.</p>
      
      <h3>2. Smarte Badezimmertechnologie</h3>
      <p>Digitale Duschsysteme, berührungslose Armaturen und intelligente Toiletten mit Bidet-Funktion gewinnen an Popularität.</p>
      
      <h3>3. Schwarze Akzente</h3>
      <p>Schwarze Armaturen, Duschrahmen und Accessoires verleihen dem Bad einen eleganten, modernen Look.</p>
      
      <h3>4. Freistehende Badewannen</h3>
      <p>Sie bleiben ein Luxussymbol und werden in verschiedenen Materialien und Formen angeboten.</p>
      
      <h3>5. Großformatige Fliesen</h3>
      <p>Sie schaffen ein ruhigeres Erscheinungsbild mit weniger Fugen und damit einfacherer Reinigung.</p>
    `
  },
  {
    id: 3,
    title: 'Tipps zur Pflege Ihres neuen Badezimmers',
    excerpt: 'Mit diesen einfachen Pflegetipps bleibt Ihr Badezimmer länger schön und hygienisch – vom richtigen Putzmittel bis zur täglichen Routine.',
    category: 'Pflege',
    date: '22. September 2023',
    image: '/hero.jpg', // Placeholder
    readTime: '5 min',
    author: 'Michael Bauer',
    content: `
      <p>Ein neues Badezimmer ist eine Investition, die bei guter Pflege viele Jahre Freude bereitet. Hier unsere besten Pflegetipps:</p>
      
      <h3>1. Tägliche Routine</h3>
      <p>Wischen Sie Duschwände nach jeder Nutzung ab, um Kalkflecken zu vermeiden. Lüften Sie ausreichend, um Feuchtigkeit zu reduzieren.</p>
      
      <h3>2. Die richtigen Reinigungsmittel</h3>
      <p>Verwenden Sie nur für Badezimmer geeignete, schonende Reinigungsmittel. Aggressive Chemikalien können Oberflächen beschädigen.</p>
      
      <h3>3. Fugen reinigen</h3>
      <p>Reinigen Sie Fugen regelmäßig mit einer alten Zahnbürste und einem speziellen Fugenreiniger, um Schimmelbildung vorzubeugen.</p>
      
      <h3>4. Armaturen pflegen</h3>
      <p>Kalkablagerungen an Armaturen lassen sich mit Essigwasser oder speziellen Kalkreinigern entfernen. Polieren Sie mit einem weichen Tuch nach.</p>
      
      <h3>5. Wartung der Silikonfugen</h3>
      <p>Überprüfen Sie regelmäßig die Silikonfugen. Beschädigte Fugen sollten umgehend ersetzt werden, um Wasserschäden zu vermeiden.</p>
    `
  },
  {
    id: 4,
    title: 'Platz sparen im kleinen Bad: 10 geniale Lösungen',
    excerpt: 'Auch kleine Badezimmer können funktional und stilvoll sein. Entdecken Sie clevere Stauraum-Lösungen und optische Tricks.',
    category: 'Gestaltung',
    date: '5. Oktober 2023',
    image: '/hero-2.jpg', // Placeholder
    readTime: '7 min',
    author: 'Lisa Schmidt',
    content: `
      <p>Ein kleines Bad muss kein Nachteil sein. Mit diesen Lösungen nutzen Sie den verfügbaren Raum optimal:</p>
      
      <h3>1. Wandmontierte Toilette</h3>
      <p>Sie spart Platz und erleichtert die Reinigung des Bodens.</p>
      
      <h3>2. Dusche statt Badewanne</h3>
      <p>Eine ebenerdige Dusche mit Glaswand nimmt weniger Platz ein und wirkt großzügiger.</p>
      
      <h3>3. Schmale Waschtische</h3>
      <p>Spezielle schmale Modelle sind bereits ab 35 cm Tiefe erhältlich.</p>
      
      <h3>4. Spiegelschränke</h3>
      <p>Bieten Stauraum und vergrößern optisch den Raum.</p>
      
      <h3>5. Vertikaler Stauraum</h3>
      <p>Nutzen Sie die Höhe mit hohen Schränken oder Regalen.</p>
      
      <h3>6. Nischen nutzen</h3>
      <p>Bauen Sie Regale in vorhandene Nischen ein.</p>
      
      <h3>7. Helle Farben</h3>
      <p>Sie lassen den Raum größer wirken.</p>
      
      <h3>8. Großformatige Fliesen</h3>
      <p>Weniger Fugen schaffen einen ruhigeren Eindruck.</p>
      
      <h3>9. Glasschiebetüren</h3>
      <p>Sie benötigen keinen Schwenkbereich wie herkömmliche Türen.</p>
      
      <h3>10. Multifunktionale Möbel</h3>
      <p>Wie ein Wäschekorb, der gleichzeitig als Sitzgelegenheit dient.</p>
    `
  },
  {
    id: 5,
    title: 'Barrierefreies Bad: Komfort für alle Generationen',
    excerpt: 'Ein barrierefreies Badezimmer bietet nicht nur mehr Sicherheit, sondern auch mehr Komfort für alle Altersgruppen.',
    category: 'Barrierefreiheit',
    date: '12. November 2023',
    image: '/hero.jpg', // Placeholder
    readTime: '6 min',
    author: 'Thomas Weber',
    content: `
      <p>Barrierefreie Bäder sind nicht nur für ältere Menschen oder Menschen mit Einschränkungen geeignet, sondern bieten Komfort für alle:</p>
      
      <h3>1. Ebenerdige Dusche</h3>
      <p>Ohne Stolperfallen, dafür mit viel Bewegungsfreiheit und modernem Design.</p>
      
      <h3>2. Rutschfeste Bodenbeläge</h3>
      <p>Erhöhen die Sicherheit für alle Nutzer, besonders wichtig in Nassbereichen.</p>
      
      <h3>3. Unterfahrbare Waschtische</h3>
      <p>Ermöglichen die Nutzung im Sitzen und bieten mehr Flexibilität.</p>
      
      <h3>4. Haltegriffe</h3>
      <p>Modern und dezent gestaltet, bieten sie Sicherheit ohne klinisches Aussehen.</p>
      
      <h3>5. Höhenverstellbare Sanitärobjekte</h3>
      <p>Perfekt für Mehrgenerationenhaushalte und sich ändernde Bedürfnisse.</p>
      
      <h3>6. Berührungslose Armaturen</h3>
      <p>Hygienisch und einfach zu bedienen für alle Altersgruppen.</p>
      
      <h3>7. Gute Beleuchtung</h3>
      <p>Wichtig für die Sicherheit und zur Vermeidung von Unfällen.</p>
    `
  },
  {
    id: 6,
    title: 'Energieeffiziente Badezimmer: Umweltschutz und Kostenersparnis',
    excerpt: 'Mit diesen Tipps sparen Sie im Badezimmer Wasser und Energie – gut für die Umwelt und Ihren Geldbeutel.',
    category: 'Nachhaltigkeit',
    date: '8. Dezember 2023',
    image: '/hero-2.jpg', // Placeholder
    readTime: '6 min',
    author: 'Michael Bauer',
    content: `
      <p>Ein modernes Badezimmer kann erheblich zum Umweltschutz und zur Senkung Ihrer Nebenkosten beitragen:</p>
      
      <h3>1. Wassersparende Armaturen</h3>
      <p>Moderne Armaturen mit Durchflussbegrenzern reduzieren den Wasserverbrauch um bis zu 50%.</p>
      
      <h3>2. Thermostat-Armaturen</h3>
      <p>Sie sparen Wasser und Energie, da die gewünschte Temperatur sofort erreicht wird.</p>
      
      <h3>3. Spülkästen mit zwei Tasten</h3>
      <p>Ermöglichen die Wahl zwischen kleiner und großer Spülung je nach Bedarf.</p>
      
      <h3>4. LED-Beleuchtung</h3>
      <p>Verbraucht bis zu 80% weniger Strom als herkömmliche Glühbirnen und hält länger.</p>
      
      <h3>5. Gut isolierte Außenwände</h3>
      <p>Verhindern Wärmeverlust und Kondensation.</p>
      
      <h3>6. Infrarotheizungen</h3>
      <p>Effiziente Alternative zu herkömmlichen Heizkörpern, speziell für Badezimmer.</p>
      
      <h3>7. Warmwasserbereitung mit erneuerbaren Energien</h3>
      <p>Solar- oder Wärmepumpensysteme zur umweltfreundlichen Warmwassererzeugung.</p>
    `
  }
];

// Blog categories for filtering
const categories = ['Alle', ...Array.from(new Set(blogPosts.map(post => post.category)))];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);
  
  // Filter posts based on selected category
  const filteredPosts = activeCategory === 'Alle' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);
  
  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setExpandedPostId(null); // Close any expanded post when changing category
  };
  
  // Handle post expansion
  const togglePostExpansion = (postId: number) => {
    setExpandedPostId(expandedPostId === postId ? null : postId);
  };
  
  // Find the currently expanded post
  const expandedPost = blogPosts.find(post => post.id === expandedPostId);
  
  return (
    <section id="tipps" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bad-Tipps & Trends</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aktuelle Trends, praktische Tipps und Expertenwissen rund um moderne Badezimmer und Badsanierungen.
          </p>
        </motion.div>
        
        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-white text-lg font-bold line-clamp-2">{post.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} Lesezeit</span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <button
                  onClick={() => togglePostExpansion(post.id)}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Weiterlesen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Expanded Post Modal */}
        {expandedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto py-10"
            onClick={() => setExpandedPostId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <Image
                  src={expandedPost.image}
                  alt={expandedPost.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setExpandedPostId(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-2">
                    {expandedPost.category}
                  </span>
                  <h2 className="text-white text-2xl font-bold">{expandedPost.title}</h2>
                  <div className="flex items-center text-gray-300 text-sm mt-2">
                    <span>{expandedPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>Von {expandedPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{expandedPost.readTime} Lesezeit</span>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: expandedPost.content }}
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Haben Sie Fragen zu diesem Thema?</h4>
                  <a
                    href="#kontakt"
                    onClick={() => setExpandedPostId(null)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Kontaktieren Sie uns
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Möchten Sie mehr Expertentipps für Ihr Badezimmer erhalten?
          </p>
          <a 
            href="#kontakt" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Persönliche Beratung vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  );
} 