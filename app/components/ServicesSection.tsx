'use client'
import { motion } from 'framer-motion';
import { Building2, Snowflake, Leaf, Wrench, Users, Sparkles } from "lucide-react";

// Service data
const services = [
  {
    icon: Building2,
    title: "Hausmeisterservice",
    description: "Der Kern unserer Tätigkeiten - professionelle Hausmeisterdienste für Ihre Immobilie.",
    isHighlighted: true
  },
  {
    icon: Wrench,
    title: "Technische Objektbetreuung",
    description: "Umfassende Betreuung: Leerstandsmanagement, Modernisierungen, Sanierungen und laufende Instandhaltungen aller Gewerke.",
  },
  {
    icon: Leaf,
    title: "Garten- und Landschaftsbau",
    description: "Von der Pflege bis zur kompletten Neu- und Umgestaltung - geleitet von erfahrenen Landschaftsgärtnern.",
  },
  {
    icon: Snowflake,
    title: "Winterdienst",
    description: "Zuverlässiger und pünktlicher Service bei Schnee und Eis - zu günstigen Pauschalpreisen und nach Gemeindesatzung.",
  },
  {
    icon: Sparkles,
    title: "Gebäude- und Industriereinigung",
    description: "Gründliche Reinigung von Treppenhäusern, Büros, Geschäftsräumen, Tiefgaragen und Industriehallen.",
  },
  {
    icon: Users,
    title: "Industrieservices",
    description: "Maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen im industriellen Bereich.",
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
};

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 px-4 sm:px-6 py-2 inline-block">
              Unsere Dienstleistungen im Überblick
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-4 sm:mt-6">
            Professionelle Lösungen für alle Bereiche des Facility Management und der technischen Objektbetreuung
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow ${
                service.isHighlighted ? "border-2 border-blue-500" : ""
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 ml-3 sm:ml-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 