'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

// Journey step data
const journeySteps = [
  {
    id: 1,
    title: 'Erstberatung',
    description: 'Kostenlose Beratung bei Ihnen zu Hause oder in unserem Showroom. Wir besprechen Ihre Wünsche, Vorstellungen und Ihr Budget.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    duration: '1-2 Stunden',
    details: [
      'Kennenlernen und Bedarfsanalyse',
      'Besichtigung des Badezimmers',
      'Erste grobe Kosteneinschätzung',
      'Erklärung des weiteren Vorgehens'
    ]
  },
  {
    id: 2,
    title: 'Planung & Konzept',
    description: 'Wir erstellen ein detailliertes Konzept mit 3D-Visualisierung Ihres neuen Badezimmers und einem präzisen Kostenvoranschlag.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    duration: '1-2 Wochen',
    details: [
      'Maßaufnahme vor Ort',
      'Erstellung detaillierter 3D-Visualisierungen',
      'Auswahl von Materialien und Sanitärobjekten',
      'Erstellung eines transparenten Kostenvoranschlags'
    ]
  },
  {
    id: 3,
    title: 'Angebotspräsentation',
    description: 'Präsentation unserer Entwürfe und des Angebots. Bei Bedarf nehmen wir Änderungen vor, bis Sie vollständig zufrieden sind.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    duration: '1-2 Stunden',
    details: [
      'Vorstellung der 3D-Visualisierungen',
      'Detaillierte Besprechung des Kostenvoranschlags',
      'Klärung offener Fragen',
      'Besprechung des möglichen Zeitplans'
    ]
  },
  {
    id: 4,
    title: 'Auftragserteilung',
    description: 'Nach Ihrer Zustimmung erhalten Sie einen detaillierten Vertrag mit Festpreisgarantie und einem verbindlichen Zeitplan.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    duration: 'Nach Ihrem Tempo',
    details: [
      'Unterzeichnung des Vertrags',
      'Festlegung des genauen Zeitplans',
      'Klärung der Zahlungsmodalitäten',
      'Bestellung der Materialien und Sanitärobjekte'
    ]
  },
  {
    id: 5,
    title: 'Vorbereitung',
    description: 'Wir organisieren alle nötigen Handwerker und erstellen einen detaillierten Ausführungsplan für Ihre Badsanierung.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    duration: '2-3 Wochen',
    details: [
      'Koordination aller beteiligten Gewerke',
      'Detaillierte Terminplanung',
      'Materialbeschaffung und -lieferung',
      'Vorbereitung der Baustelle'
    ]
  },
  {
    id: 6,
    title: 'Durchführung',
    description: 'Die eigentliche Sanierung beginnt mit der Demontage des alten Bades. Unser Projektleiter koordiniert alle Arbeiten und hält Sie stets auf dem Laufenden.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    duration: '2-4 Wochen',
    details: [
      'Demontage des alten Badezimmers',
      'Verlegung von Elektro- und Sanitärinstallationen',
      'Fliesen- und Sanitärmontage',
      'Regelmäßige Fortschrittsberichte'
    ]
  },
  {
    id: 7,
    title: 'Abnahme',
    description: 'Nach Fertigstellung führen wir gemeinsam eine detaillierte Abnahme durch und stellen sicher, dass alles Ihren Vorstellungen entspricht.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    duration: '1-2 Stunden',
    details: [
      'Gemeinsame Begehung und Prüfung',
      'Erklärung aller installierten Komponenten',
      'Übergabe der Dokumentation und Garantien',
      'Erstellung eines Abnahmeprotokolls'
    ]
  },
  {
    id: 8,
    title: 'Nachbetreuung',
    description: 'Auch nach der Fertigstellung bleiben wir Ihr Ansprechpartner und bieten Ihnen einen umfassenden Service mit 5 Jahren Garantie.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    duration: '5 Jahre',
    details: [
      '5 Jahre Garantie auf unsere Handwerksleistungen',
      'Jährliche Wartungschecks (optional)',
      'Schneller Support bei Fragen oder Problemen',
      'Exklusive Angebote für Bestandskunden'
    ]
  }
];

export default function ClientJourneySection() {
  const [activeStep, setActiveStep] = useState<number>(1);
  
  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };
  
  // Find the current active step
  const currentStep = journeySteps.find((step) => step.id === activeStep) || journeySteps[0];
  
  return (
    <section id="ablauf" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ihr Weg zum neuen Traumbad</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparenter Prozess von der ersten Beratung bis zur Fertigstellung – so läuft Ihre Badsanierung mit uns ab.
          </p>
        </motion.div>
        
        {/* Journey Map - Timeline */}
        <div className="mb-12 relative">
          <div className="hidden md:block absolute h-1 bg-blue-100 top-1/2 transform -translate-y-1/2 left-0 right-0 z-0"></div>
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            {journeySteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: step.id * 0.1 }}
                className="mb-8 md:mb-0"
              >
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-blue-600 text-white scale-110 shadow-lg'
                      : 'bg-white text-gray-500 border-2 border-blue-100 hover:border-blue-300'
                  }`}
                >
                  <span className="text-lg font-bold">{step.id}</span>
                </button>
                <div className={`text-center mt-2 ${activeStep === step.id ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  <p className="text-sm whitespace-nowrap">{step.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Selected Step Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100"
        >
          <div className="md:flex items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
              <div className="bg-white p-6 rounded-xl shadow-md mb-4 inline-block">
                <div className="text-blue-600">
                  {currentStep.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {currentStep.id}. {currentStep.title}
              </h3>
              <p className="text-gray-700 mb-4">{currentStep.description}</p>
              <div className="flex items-center text-gray-600">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dauer: {currentStep.duration}</span>
              </div>
            </div>
            
            <div className="md:w-2/3 bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Was in dieser Phase passiert:</h4>
              <ul className="space-y-3">
                {currentStep.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => handleStepClick(activeStep > 1 ? activeStep - 1 : journeySteps.length)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Vorherige Phase
                </button>
                <button
                  onClick={() => handleStepClick(activeStep < journeySteps.length ? activeStep + 1 : 1)}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Nächste Phase
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Bereit, Ihren persönlichen Weg zum Traumbad zu beginnen?
          </p>
          <a 
            href="#kontakt" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Kostenlose Erstberatung vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  );
} 