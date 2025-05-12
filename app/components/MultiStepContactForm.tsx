'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type FormData = {
  // Step 1: Persönliche Daten
  name: string
  email: string
  phone: string
  preferredContact: 'email' | 'phone'
  
  // Step 2: Projekt Details
  projectType: 'komplettsanierung' | 'teilrenovierung' | 'barrierefrei' | 'anderes'
  roomSize: string
  currentCondition: string
  
  // Step 3: Zeitplan & Budget
  timeframe: 'sofort' | '1-3_monate' | '3-6_monate' | 'spaeter'
  budget: 'bis_5000' | '5000-10000' | '10000-15000' | 'ueber_15000'
  specialRequirements: string
  
  // Step 4: Nachricht
  message: string
  howDidYouFindUs: string
  privacyAccepted: boolean
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  preferredContact: 'email',
  projectType: 'komplettsanierung',
  roomSize: '',
  currentCondition: '',
  timeframe: 'sofort',
  budget: 'bis_5000',
  specialRequirements: '',
  message: '',
  howDidYouFindUs: '',
  privacyAccepted: false,
}

const steps = [
  { id: 1, title: 'Persönliche Daten' },
  { id: 2, title: 'Projekt Details' },
  { id: 3, title: 'Zeitplan & Budget' },
  { id: 4, title: 'Ihre Nachricht' },
]

export default function MultiStepContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Hier würde normalerweise die API-Anfrage erfolgen
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
    } catch (err) {
      setError('Es gab ein Problem bei der Übermittlung Ihrer Anfrage. Bitte versuchen Sie es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep >= step.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {step.id}
            </div>
            <div className="ml-2 text-sm font-medium text-gray-600">{step.title}</div>
            {step.id < steps.length && (
              <div
                className={`w-24 h-0.5 mx-4 ${
                  currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="ihre-email@beispiel.de"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="+49 123 4567890"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Bevorzugte Kontaktmethode
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">E-Mail</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Telefon</span>
                </label>
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                Art des Projekts *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="komplettsanierung">Komplettsanierung</option>
                <option value="teilrenovierung">Teilrenovierung</option>
                <option value="barrierefrei">Barrierefreie Umgestaltung</option>
                <option value="anderes">Anderes</option>
              </select>
            </div>

            <div>
              <label htmlFor="roomSize" className="block text-sm font-medium text-gray-700 mb-1">
                Raumgröße (m²)
              </label>
              <input
                type="text"
                id="roomSize"
                name="roomSize"
                value={formData.roomSize}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="z.B. 6"
              />
            </div>

            <div>
              <label htmlFor="currentCondition" className="block text-sm font-medium text-gray-700 mb-1">
                Aktueller Zustand
              </label>
              <textarea
                id="currentCondition"
                name="currentCondition"
                value={formData.currentCondition}
                onChange={handleChange}
                rows={3}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Beschreiben Sie den aktuellen Zustand Ihres Badezimmers..."
              />
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                Gewünschter Zeitraum *
              </label>
              <select
                id="timeframe"
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="sofort">Sofort</option>
                <option value="1-3_monate">In 1-3 Monaten</option>
                <option value="3-6_monate">In 3-6 Monaten</option>
                <option value="spaeter">Später</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                Geschätztes Budget *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="bis_5000">Bis 5.000 €</option>
                <option value="5000-10000">5.000 - 10.000 €</option>
                <option value="10000-15000">10.000 - 15.000 €</option>
                <option value="ueber_15000">Über 15.000 €</option>
              </select>
            </div>

            <div>
              <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                Besondere Anforderungen
              </label>
              <textarea
                id="specialRequirements"
                name="specialRequirements"
                value={formData.specialRequirements}
                onChange={handleChange}
                rows={3}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Haben Sie besondere Wünsche oder Anforderungen?"
              />
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Ihre Nachricht *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Beschreiben Sie Ihr Projekt und Ihre Wünsche..."
              />
            </div>

            <div>
              <label htmlFor="howDidYouFindUs" className="block text-sm font-medium text-gray-700 mb-1">
                Wie haben Sie von uns erfahren?
              </label>
              <select
                id="howDidYouFindUs"
                name="howDidYouFindUs"
                value={formData.howDidYouFindUs}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Bitte auswählen...</option>
                <option value="google">Google</option>
                <option value="empfehlung">Empfehlung</option>
                <option value="social_media">Social Media</option>
                <option value="zeitung">Zeitung/Zeitschrift</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacyAccepted"
                  name="privacyAccepted"
                  type="checkbox"
                  checked={formData.privacyAccepted}
                  onChange={handleChange}
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacyAccepted" className="font-medium text-gray-700">
                  Ich akzeptiere die Datenschutzerklärung *
                </label>
                <p className="text-gray-500">
                  Ich habe die{' '}
                  <a href="/datenschutz" className="text-blue-600 hover:text-blue-500">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und akzeptiere diese.
                </p>
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg
            className="h-6 w-6 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Vielen Dank für Ihre Anfrage!</h3>
        <p className="text-gray-600">
          Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {renderStepIndicator()}

      <form onSubmit={handleSubmit} className="space-y-8">
        <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Zurück
            </button>
          )}
          <div className="ml-auto">
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Weiter
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
} 