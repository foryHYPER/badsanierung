'use client';

import { motion } from "framer-motion";
import { Users, Heart, Award, Sparkles } from "lucide-react";

const teamValues = [
  {
    icon: Users,
    title: "Starkes Team",
    description: "Über 20 motivierte Mitarbeiter, die gemeinsam für Ihren Erfolg arbeiten und sich gegenseitig unterstützen.",
    color: "text-blue-600"
  },
  {
    icon: Heart,
    title: "Wertschätzung",
    description: "Jeder Mitarbeiter ist ein wichtiger Teil des Unternehmens. Besondere Wertschätzung wird in unserer Unternehmenskultur gelebt.",
    color: "text-red-600"
  },
  {
    icon: Award,
    title: "Erfahrung",
    description: "Seit 2006 sammeln wir kontinuierlich Erfahrung und entwickeln uns weiter, um Ihnen den bestmöglichen Service zu bieten.",
    color: "text-yellow-600"
  },
  {
    icon: Sparkles,
    title: "Kultur",
    description: "Eine positive Arbeitsatmosphäre und ein respektvoller Umgang miteinander sind die Grundlage unseres Erfolgs.",
    color: "text-purple-600"
  }
];

const TeamSection = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Unser Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ein starkes Team von über 20 Mitarbeitern, die gemeinsam für Ihren Erfolg arbeiten
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <value.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${value.color}`} />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 ml-3 sm:ml-4">
                  {value.title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
            Werden Sie Teil unseres Teams
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Wir bieten Ihnen eine spannende Tätigkeit in einem dynamischen Unternehmen mit flachen Hierarchien und einem starken Teamgeist.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/karriere"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors"
          >
            Karriere bei INOservis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection; 