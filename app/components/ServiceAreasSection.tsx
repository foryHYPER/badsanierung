'use client';

import { motion } from "framer-motion";
import { MapPin, Building2, Users, Star } from "lucide-react";

const areas = [
  {
    region: "Rhein-Neckar-Region",
    description: "Unser Hauptsitz und größtes Servicegebiet mit umfangreicher Präsenz und langjähriger Erfahrung.",
    icon: Star,
    color: "text-blue-600"
  },
  {
    region: "Rhein-Main-Gebiet",
    description: "Starkes Engagement rund um Frankfurt am Main mit wachsender Kundenzahl und zufriedenen Referenzen.",
    icon: Building2,
    color: "text-green-600"
  },
  {
    region: "Rhein-Erft/Köln",
    description: "Etablierte Präsenz im Großraum Köln mit umfassendem Serviceangebot und lokaler Expertise.",
    icon: Users,
    color: "text-purple-600"
  }
];

const ServiceAreasSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Servicegebiete
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mit großem Erfolg betreuen wir die verschiedensten Objekte mit mehr als 1.500 Wohneinheiten in der gesamten Region
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 -left-4">
                <div className={`bg-white rounded-full p-3 shadow-lg ${area.color}`}>
                  <area.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-4">
                {area.region}
              </h3>
              <p className="text-gray-600 text-lg">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center">
              <MapPin className="w-12 h-12 text-blue-600" />
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Bundesweite Präsenz
                </h3>
                <p className="text-gray-600">
                  Mit über 20 Mitarbeitern an verschiedenen Standorten in Deutschland
                </p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/kontakt"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Standort in Ihrer Nähe
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreasSection; 