'use client'
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sandra Müller',
    location: 'München',
    quote: 'Die Badsanierung wurde absolut professionell und termingerecht durchgeführt. Das Team war sehr freundlich und hat selbst auf kleinste Details geachtet. Wir sind mit dem Ergebnis mehr als zufrieden!',
    rating: 5,
    image: '/images/testimonials/testimonial-1.jpg',
    project: 'Komplette Badsanierung',
  },
  {
    id: 2,
    name: 'Thomas Weber',
    location: 'Stuttgart',
    quote: 'Von der Planung bis zur Umsetzung wurden wir perfekt beraten. Die Handwerker waren pünktlich, ordentlich und haben qualitativ hochwertige Arbeit geleistet. Unser neues Bad ist genau wie wir es uns gewünscht haben.',
    rating: 5,
    image: '/images/testimonials/testimonial-2.jpg',
    project: 'Modernisierung mit begehbarer Dusche',
  },
  {
    id: 3,
    name: 'Julia und Mark Schmidt',
    location: 'Frankfurt',
    quote: 'Nach Jahren mit einem veralteten Badezimmer haben wir uns für eine komplette Renovierung entschieden. Das Ergebnis hat unsere Erwartungen übertroffen! Besonders die Beratung zu den verschiedenen Materialien und Designs war sehr hilfreich.',
    rating: 5,
    image: '/images/testimonials/testimonial-3.jpg',
    project: 'Luxusbad mit Wellnessbereich',
  },
  {
    id: 4,
    name: 'Petra Hoffmann',
    location: 'Berlin',
    quote: 'Trotz des kleinen Raums wurde eine optimale Lösung gefunden, die funktional und ästhetisch ist. Die Handwerker waren sehr geduldig und haben alle unsere Fragen beantwortet. Ein großes Dankeschön!',
    rating: 4,
    image: '/images/testimonials/testimonial-4.jpg',
    project: 'Gästebad-Sanierung',
  },
  {
    id: 5,
    name: 'Markus Becker',
    location: 'Hamburg',
    quote: 'Die Kommunikation war von Anfang an klar und transparent. Besonders beeindruckt hat mich die Sauberkeit während der gesamten Bauphase. Das neue Bad ist ein echtes Highlight in unserer Wohnung.',
    rating: 5,
    image: '/images/testimonials/testimonial-5.jpg',
    project: 'Barrierefreies Badezimmer',
  },
  {
    id: 6,
    name: 'Anna Schneider',
    location: 'Köln',
    quote: 'Nach einem Wasserschaden brauchten wir schnelle Hilfe. Das Team hat umgehend reagiert und in kürzester Zeit unser Bad wieder hergestellt. Die Qualität der Arbeit ist trotz des Zeitdrucks hervorragend.',
    rating: 5,
    image: '/images/testimonials/testimonial-6.jpg',
    project: 'Notfallrenovierung nach Wasserschaden',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Navigate to the previous testimonial
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  // Navigate to the next testimonial
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // Render stars for the rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  return (
    <section id="kundenstimmen" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kundenstimmen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, was unsere Kunden über ihre Erfahrungen mit unseren Badsanierungen sagen.
          </p>
        </motion.div>
        
        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                {/* Testimonial Image */}
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        fill
                        sizes="(max-width: 768px) 160px, 224px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="flex items-center mb-4">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                  
                  <blockquote className="italic text-xl md:text-2xl font-light text-gray-700 mb-8">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                      <p className="text-gray-600">{testimonials[activeIndex].location}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {testimonials[activeIndex].project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 hover:bg-blue-50 -ml-6"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 hover:bg-blue-50 -mr-6"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Text Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                index === activeIndex ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-4 line-clamp-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Überzeugen Sie sich selbst von unserer Qualität und Zuverlässigkeit.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Kontakt aufnehmen
          </a>
        </motion.div>
      </div>
    </section>
  );
} 