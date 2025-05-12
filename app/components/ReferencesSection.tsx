'use client';

import { motion } from "framer-motion";
import { Building2, Clock, Home, TrendingUp, Quote } from "lucide-react";

const references = [
  {
    icon: Building2,
    title: "1.500+ Wohneinheiten",
    description: "Wir betreuen erfolgreich mehr als 1.500 Wohneinheiten in verschiedenen Objekten.",
    color: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Langjährige Partnerschaften",
    description: "Viele unserer Kunden vertrauen uns seit über 10 Jahren ihre Objekte an.",
    color: "text-green-600"
  },
  {
    icon: Home,
    title: "Vielfältige Objekte",
    description: "Von Wohnanlagen über Gewerbeimmobilien bis hin zu öffentlichen Gebäuden.",
    color: "text-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Kontinuierliches Wachstum",
    description: "Seit unserer Gründung 2006 wachsen wir stetig und entwickeln uns weiter.",
    color: "text-orange-600"
  }
];

const testimonials = [
  {
    quote: "INOservis ist ein verlässlicher Partner, der uns seit Jahren hervorragend unterstützt. Die Zusammenarbeit ist unkompliziert und effizient.",
    author: "Max Mustermann",
    location: "Geschäftsführer, Wohnungsbaugesellschaft Rhein-Neckar"
  },
  {
    quote: "Die schnelle Reaktionszeit und die professionelle Umsetzung haben uns überzeugt. Wir fühlen uns bestens betreut.",
    author: "Anna Schmidt",
    location: "Verwaltungsleiterin, Wohnanlage Frankfurt"
  },
  {
    quote: "Besonders die transparente Kommunikation und die zuverlässige Arbeit schätzen wir sehr. Eine echte Bereicherung für unsere Immobilien.",
    author: "Thomas Weber",
    location: "Eigentümer, Gewerbeimmobilien Köln"
  }
];

const ReferencesSection = () => {
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
            Unsere Referenzen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vertrauen Sie auf unsere Erfahrung und unsere erfolgreichen Projekte
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {references.map((reference, index) => (
            <motion.div
              key={reference.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <reference.icon className={`w-12 h-12 ${reference.color}`} />
                <h3 className="text-2xl font-semibold text-gray-900 ml-4">
                  {reference.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg">
                {reference.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-8 relative"
            >
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-700 text-lg mb-6">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-600">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/referenzen"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Alle Referenzen ansehen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferencesSection; 