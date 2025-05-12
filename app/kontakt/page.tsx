

import { Metadata } from 'next'
import MultiStepContactForm from '@/app/components/MultiStepContactForm'

export const metadata: Metadata = {
  title: 'Kontakt - Badsanierung Experten',
  description: 'Kontaktieren Sie uns für Ihre Badsanierung. Wir beraten Sie gerne zu Ihrem Projekt.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Füllen Sie unser Kontaktformular aus und wir melden uns zeitnah bei Ihnen.
            Gemeinsam planen wir Ihre Traumbadsanierung.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <MultiStepContactForm />
        </div>
      </div>
    </main>
  )
} 