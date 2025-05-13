'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// Form field animation variants
const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 12 }
  }
};

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 (0) XXX XXX XXX",
    link: "tel:+49XXXXXXXXX",
    color: "text-blue-600"
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@inoservis.de",
    link: "mailto:info@inoservis.de",
    color: "text-green-600"
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Musterstraße 123, 12345 Musterstadt",
    link: "https://maps.google.com",
    color: "text-red-600"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: "Mo-Fr: 8:00 - 17:00 Uhr",
    color: "text-purple-600"
  }
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    projectType: '',
    budget: '',
    timeframe: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real application, you would send the form data to your backend
      // For now, we'll simulate a successful submission after a short delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      setError('Es gab ein Problem bei der Übermittlung Ihrer Anfrage. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
      preferredContact: 'email',
      projectType: '',
      budget: '',
      timeframe: '',
    });
    setSubmitted(false);
  };
  
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
            Kontaktieren Sie uns
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Wir freuen uns darauf, Sie kennenzulernen und Ihre Anforderungen zu besprechen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 md:mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <info.icon className={`w-10 h-10 sm:w-12 sm:h-12 ${info.color}`} />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 ml-3 sm:ml-4">
                  {info.title}
                </h3>
              </div>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-base sm:text-lg text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-base sm:text-lg text-gray-600">
                  {info.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Senden Sie uns eine Nachricht
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-700 transition-colors"
              >
                Nachricht senden
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white rounded-xl p-6 sm:p-8 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Warum INOservis?
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <p className="text-sm sm:text-base">Kurze und unkomplizierte Entscheidungswege</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <p className="text-sm sm:text-base">Schnelle und flexible Auftragsabwicklung</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <p className="text-sm sm:text-base">Professionelle Dienstleistungen höchster Qualität</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <p className="text-sm sm:text-base">Kostensenkung und Aufwandsreduzierung</p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-200 mr-2">•</span>
                <p className="text-sm sm:text-base">Erfahrene Fachkräfte und zuverlässiger Service</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 