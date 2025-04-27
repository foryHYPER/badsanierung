'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

// Data for bathroom renovation options
const bathroomSizes = [
  { value: 'small', label: 'Klein (bis 4m²)', basePrice: 6500 },
  { value: 'medium', label: 'Mittel (4-8m²)', basePrice: 9000 },
  { value: 'large', label: 'Groß (8-12m²)', basePrice: 13000 },
  { value: 'xl', label: 'Sehr groß (über 12m²)', basePrice: 18000 },
];

const renovationScopes = [
  { value: 'partial', label: 'Teilsanierung', factor: 0.65 },
  { value: 'standard', label: 'Standardsanierung', factor: 1.0 },
  { value: 'premium', label: 'Premiumsanierung', factor: 1.4 },
  { value: 'luxury', label: 'Luxussanierung', factor: 1.8 },
];

const additionalFeatures = [
  { id: 'floor_heating', label: 'Fußbodenheizung', price: 1200 },
  { id: 'rain_shower', label: 'Regendusche', price: 800 },
  { id: 'led_lighting', label: 'LED-Beleuchtungssystem', price: 650 },
  { id: 'smart_toilet', label: 'Smart-WC mit Bidet-Funktion', price: 1500 },
  { id: 'custom_vanity', label: 'Maßgefertigter Waschtisch', price: 1100 },
  { id: 'towel_warmer', label: 'Handtuchwärmer', price: 450 },
  { id: 'ventilation', label: 'Lüftungssystem', price: 750 },
  { id: 'audio', label: 'Audiosystem', price: 600 },
];

export default function CostCalculatorSection() {
  const [bathroomSize, setBathroomSize] = useState('medium');
  const [renovationScope, setRenovationScope] = useState('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Find the selected bathroom size and renovation scope
  const selectedSize = bathroomSizes.find(size => size.value === bathroomSize);
  const selectedScope = renovationScopes.find(scope => scope.value === renovationScope);
  
  // Calculate base cost
  const baseCost = selectedSize?.basePrice ?? 0;
  const scopeAdjustedCost = Math.round((baseCost * (selectedScope?.factor ?? 1)) / 100) * 100;
  
  // Calculate additional features cost
  const featuresCost = selectedFeatures.reduce((total, featureId) => {
    const feature = additionalFeatures.find(f => f.id === featureId);
    return total + (feature?.price ?? 0);
  }, 0);
  
  // Calculate total estimated cost
  const totalCost = scopeAdjustedCost + featuresCost;
  
  // Handle feature toggle
  const toggleFeature = (featureId: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Scroll to result
    setTimeout(() => {
      document.getElementById('calculator-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <section id="kostenrechner" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kostenrechner</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berechnen Sie einen unverbindlichen Kostenvoranschlag für Ihre Badsanierung mit unserem interaktiven Tool.
          </p>
        </motion.div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bathroom Size Selection */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Badezimmergröße
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bathroomSizes.map((size) => (
                      <motion.label
                        key={size.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          bathroomSize === size.value 
                            ? 'border-blue-600 bg-blue-50 text-blue-800' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="bathroom-size"
                            value={size.value}
                            checked={bathroomSize === size.value}
                            onChange={() => setBathroomSize(size.value)}
                            className="sr-only"
                          />
                          <span className={`${bathroomSize === size.value ? 'text-blue-800' : 'text-gray-900'}`}>
                            {size.label}
                          </span>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>
                
                {/* Renovation Scope Selection */}
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-4">
                    Umfang der Sanierung
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {renovationScopes.map((scope) => (
                      <motion.label
                        key={scope.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                          renovationScope === scope.value 
                            ? 'border-blue-600 bg-blue-50 text-blue-800' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="renovation-scope"
                            value={scope.value}
                            checked={renovationScope === scope.value}
                            onChange={() => setRenovationScope(scope.value)}
                            className="sr-only"
                          />
                          <span className={`${renovationScope === scope.value ? 'text-blue-800' : 'text-gray-900'}`}>
                            {scope.label}
                          </span>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Additional Features Selection */}
              <div className="mb-12">
                <label className="block text-lg font-medium text-gray-700 mb-4">
                  Zusätzliche Ausstattung (optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {additionalFeatures.map((feature) => (
                    <motion.label
                      key={feature.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedFeatures.includes(feature.id) 
                          ? 'border-blue-600 bg-blue-50 text-blue-800' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                        className="h-5 w-5 text-blue-600 rounded-md mr-3"
                      />
                      <div>
                        <span className={`block ${selectedFeatures.includes(feature.id) ? 'text-blue-800' : 'text-gray-900'}`}>
                          {feature.label}
                        </span>
                        <span className="text-sm text-gray-500">+ {feature.price} €</span>
                      </div>
                    </motion.label>
                  ))}
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Kosten berechnen
                  <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </div>
            </form>
            
            {/* Results Section */}
            {isSubmitted && (
              <motion.div
                id="calculator-result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-16 border-t pt-12 border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ihre geschätzten Kosten</h3>
                
                <div className="bg-blue-50 rounded-xl p-8 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Grundkosten ({selectedSize?.label})</span>
                    <span className="font-medium">{baseCost.toLocaleString()} €</span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Sanierungsumfang ({selectedScope?.label})</span>
                    <span className="font-medium">{scopeAdjustedCost.toLocaleString()} €</span>
                  </div>
                  
                  {selectedFeatures.length > 0 && (
                    <div className="border-t border-blue-200 my-4 pt-4">
                      <p className="text-gray-700 mb-2">Zusätzliche Ausstattung:</p>
                      {selectedFeatures.map(featureId => {
                        const feature = additionalFeatures.find(f => f.id === featureId);
                        return feature ? (
                          <div key={feature.id} className="flex justify-between items-center ml-4 mb-2">
                            <span className="text-gray-600">{feature.label}</span>
                            <span className="font-medium">{feature.price.toLocaleString()} €</span>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                  
                  <div className="border-t border-blue-200 mt-4 pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Gesamtkosten (geschätzt)</span>
                    <span className="text-2xl font-bold text-blue-700">{totalCost.toLocaleString()} €</span>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                  <p className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span>Diese Berechnung dient als grobe Orientierung. Für ein verbindliches Angebot kontaktieren Sie uns bitte für eine persönliche Beratung und Besichtigung.</span>
                  </p>
                </div>
                
                <div className="mt-10 text-center">
                  <p className="text-lg font-medium text-gray-700 mb-6">
                    Bereit für Ihr persönliches Angebot?
                  </p>
                  <motion.a
                    href="#kontakt"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Kontaktieren Sie uns
                  </motion.a>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 