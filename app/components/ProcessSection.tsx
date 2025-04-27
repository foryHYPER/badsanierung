'use client'
import { motion } from 'framer-motion';

// Process steps
const processSteps = [
  {
    id: 1,
    title: 'Kostenlose Beratung',
    description: 'Im ersten Schritt besprechen wir Ihre Wünsche und Vorstellungen. Wir beraten Sie zu den Möglichkeiten und nehmen die Maße Ihres Badezimmers auf.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    id: 2,
    title: '3D-Planung & Angebot',
    description: 'Basierend auf Ihren Wünschen erstellen wir einen detaillierten 3D-Entwurf und ein transparentes Festpreisangebot ohne versteckte Kosten.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Materialauswahl',
    description: 'Gemeinsam wählen wir die passenden Materialien, Fliesen, Sanitärobjekte und Details für Ihr neues Badezimmer aus.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Professionelle Umsetzung',
    description: 'Alle Arbeiten werden von unseren erfahrenen Fachhandwerkern nach höchsten Qualitätsstandards durchgeführt – termingerecht und zuverlässig.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Feinschliff & Übergabe',
    description: 'Nach Fertigstellung erfolgt eine gründliche Reinigung, eine gemeinsame Begutachtung und die Übergabe Ihres neuen Badezimmers.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ihr Weg zum Traumbad</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Beratung bis zur Fertigstellung – so einfach ist der Ablauf Ihrer Badsanierung mit uns.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center mb-20 md:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex md:block items-center">
                  <span className="inline-block rounded-full bg-blue-700 text-white w-8 h-8 flex items-center justify-center text-sm mr-3 md:hidden">
                    {step.id}
                  </span>
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Timeline point */}
              <div className="hidden md:flex w-2/12 items-center justify-center relative z-10">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-blue-700 border-4 border-blue-100"
                >
                  {step.icon}
                </motion.div>
                <div className="absolute bg-blue-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {step.id}
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-full md:w-5/12"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a 
            href="#kontakt" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-colors duration-200"
          >
            Jetzt kostenlos beraten lassen
          </a>
        </motion.div>
      </div>
    </section>
  );
} 