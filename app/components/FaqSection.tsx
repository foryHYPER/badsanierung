'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'Wie lange dauert eine typische Badsanierung?',
    answer: 'Je nach Umfang der Sanierung dauert ein Badumbau zwischen 2 und 4 Wochen. Bei komplexeren Projekten oder Vollsanierungen mit besonderen Anforderungen kann es auch bis zu 6 Wochen dauern. Wir erstellen Ihnen vor Beginn einen detaillierten Zeitplan und halten Sie während der gesamten Bauphase auf dem Laufenden.'
  },
  {
    id: 2,
    question: 'Muss ich während der Sanierung alternative Badmöglichkeiten organisieren?',
    answer: 'Für die Dauer der Sanierung ist Ihr Bad in der Regel nicht nutzbar. Wir versuchen, wichtige Sanitäranlagen so lange wie möglich in Betrieb zu halten, aber es ist ratsam, alternative Lösungen zu organisieren. Gerne beraten wir Sie zu mobilen Sanitärlösungen oder unterstützen bei der Planung einer Ausweichmöglichkeit.'
  },
  {
    id: 3,
    question: 'Welche Fördermöglichkeiten gibt es für eine barrierefreie Badsanierung?',
    answer: 'Für barrierefreie Umbauten gibt es verschiedene Fördermöglichkeiten, wie zum Beispiel KfW-Zuschüsse für altersgerechtes Umbauen (Programm 455-B), Zuschüsse der Pflegekassen bei Pflegegrad oder regionale Förderprogramme. Wir unterstützen Sie gerne bei der Antragstellung und erstellen die notwendigen Unterlagen.'
  },
  {
    id: 4,
    question: 'Kümmern Sie sich auch um alle notwendigen Genehmigungen?',
    answer: 'Ja, wir übernehmen für Sie die Beantragung aller erforderlichen Genehmigungen und stimmen uns mit Vermietern, Hausverwaltungen oder Behörden ab. Bei umfangreicheren baulichen Änderungen, die genehmigungspflichtig sind, bereiten wir die Unterlagen vor und begleiten den gesamten Prozess.'
  },
  {
    id: 5,
    question: 'Sind die angegebenen Kosten verbindlich oder kommen oft Nachträge?',
    answer: 'Wir legen großen Wert auf Transparenz bei der Preisgestaltung. Nach der detaillierten Planung erhalten Sie ein verbindliches Angebot. Unvorhergesehene Zusatzkosten können nur bei versteckten Baumängeln entstehen, die erst während der Sanierung entdeckt werden. In solchen Fällen informieren wir Sie umgehend und besprechen das weitere Vorgehen.'
  },
  {
    id: 6,
    question: 'Welche Garantien erhalte ich auf die durchgeführten Arbeiten?',
    answer: 'Wir gewähren auf alle handwerklichen Leistungen eine Garantie von 5 Jahren. Für die verbauten Produkte und Materialien gelten die jeweiligen Herstellergarantien, die in der Regel zwischen 2 und 10 Jahren liegen. Nach Abschluss der Arbeiten erhalten Sie alle Garantiezertifikate und Produktdokumentationen.'
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hexagon background effect */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Häufig gestellte Fragen</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um Ihre Badsanierung.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          className="max-w-3xl mx-auto divide-y divide-slate-700 relative z-10"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full py-4 text-left font-medium focus:outline-none"
              >
                <span className="text-xl">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-2 pb-4 text-slate-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center relative z-10"
        >
          <p className="mb-6 text-slate-300">Haben Sie weitere Fragen?</p>
          <a 
            href="#kontakt" 
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300"
          >
            Sprechen Sie mit uns
          </a>
        </motion.div>
      </div>
    </section>
  );
} 