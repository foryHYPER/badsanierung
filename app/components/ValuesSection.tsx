'use client';

import { motion } from "framer-motion";
import { Heart, Handshake, Clock, Target, Users, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Kundenzentrierung",
    description: "Sie, als Auftraggeber, stehen im Mittelpunkt. Wir unterstützen Sie bei jeglicher Entlastung rund um Ihr Anwesen und bringen uns immer aktiv mit ein.",
    color: "text-red-500"
  },
  {
    icon: Handshake,
    title: "Partnerschaft",
    description: "Eine gute, partnerschaftliche Zusammenarbeit bringt alle weiter. Wir verstehen uns als verlängerter Arm Ihres Unternehmens.",
    color: "text-green-500"
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description: "Kurze Entscheidungswege und schnelle Auftragsabwicklung sind unsere Stärken. Sie können sich auf uns verlassen.",
    color: "text-blue-500"
  },
  {
    icon: Target,
    title: "Qualität",
    description: "Wir bieten Dienstleistungen höchster Qualität an und senken gleichzeitig Ihre Kosten sowie Ihren Aufwand.",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Jeder Mitarbeiter ist ein wichtiger Teil des Unternehmens. Besondere Wertschätzung wird in unserer Unternehmenskultur gelebt.",
    color: "text-orange-500"
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Stetiges Wachstum und Entwicklung zeigen, dass wir uns kontinuierlich verbessern und neue Lösungen finden.",
    color: "text-yellow-500"
  }
];

const ValuesSection = () => {
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
            Unsere Werte
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Diese Werte bilden das Fundament unserer Unternehmenskultur und unseres täglichen Handelns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
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
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-600 italic">
            "Beauftragen und wohlfühlen - die Arbeit wird bereits erledigt"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection; 