import React from 'react'

const HowItWorks: React.FC = () => {
  const steps = [
    { number: '01', title: 'Book Online', description: 'Schedule your Spanish property inspection through our easy online system' },
    { number: '02', title: 'Property Visit', description: 'Our expert inspectors thoroughly examine the property, considering Spanish building norms' },
    { number: '03', title: 'Detailed Report', description: 'Receive a comprehensive bilingual report on the property's condition' },
    { number: '04', title: 'Expert Consultation', description: 'Discuss the findings with our bilingual experts to make informed decisions' },
  ]

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Our Spanish Home Inspection Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks