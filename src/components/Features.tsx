import React from 'react'
import { Home, TrendingUp, Shield } from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    { icon: <Home className="w-12 h-12 text-blue-600" />, title: 'Spanish Property Expertise', description: 'In-depth knowledge of Spanish building standards and regulations' },
    { icon: <TrendingUp className="w-12 h-12 text-blue-600" />, title: 'Comprehensive Inspections', description: 'Thorough assessments of Spanish homes, from coastal villas to urban apartments' },
    { icon: <Shield className="w-12 h-12 text-blue-600" />, title: 'Bilingual Reports', description: 'Detailed reports provided in both Spanish and English for your convenience' },
  ]

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MiCasa for Spanish Home Inspections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features