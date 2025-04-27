'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define project type
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: 'Moderne Wellness-Oase',
    description: 'Komplette Badsanierung mit freistehender Badewanne und begehbarer Dusche.',
    image: '/hero-2.jpg', // Using existing image as placeholder
    tags: ['Komplettsanierung', 'Modern']
  },
  {
    id: 2,
    title: 'Minimalistische Duschbadezimmer',
    description: 'Funktionales, stilvolles Badezimmer mit barrierefreier Dusche.',
    image: '/hero.jpg', // Using existing image as placeholder
    tags: ['Duschbereich', 'Minimalistisch']
  },
  {
    id: 3,
    title: 'Luxus im kleinen Raum',
    description: 'Optimale Raumnutzung auf kleiner Fläche mit hochwertigem Finish.',
    image: '/hero-2.jpg', // Using existing image as placeholder
    tags: ['Kleine Räume', 'Luxus']
  },
  {
    id: 4,
    title: 'Familienbad mit Doppelwaschbecken',
    description: 'Praktisches Familienbad mit viel Stauraum und Komfort.',
    image: '/hero.jpg', // Using existing image as placeholder
    tags: ['Familienbad', 'Praktisch']
  }
];

// Filter tags
const allTags = ['Alle', ...Array.from(new Set(projects.flatMap(project => project.tags)))];

export default function ProjectGallery() {
  const [activeTag, setActiveTag] = useState('Alle');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTag === 'Alle' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section id="referenzen" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unsere Referenzprojekte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere erfolgreich umgesetzten Badsanierungen und lassen Sie sich inspirieren.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag 
                ? 'bg-blue-700 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col min-h-[200px] justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag: string, index: number) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{project.description}</p>
                </div>
                <button className="text-blue-700 font-medium flex items-center hover:text-blue-800 transition-colors duration-200 mt-4">
                  Details ansehen
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for project details - simplified version */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <h3 className="font-bold text-lg mb-2">Projekteigenschaften</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Durchführungszeitraum: 4 Wochen</li>
                    <li>• Gesamtkosten: 18.000 €</li>
                    <li>• Verwendete Materialien: Hochwertige Keramikfliesen, Sanitärobjekte von Villeroy & Boch</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 