import React from 'react'
import { Heart, Award, Users, Leaf } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: 'Passion Est-Européenne',
      description: 'Nous célébrons la richesse culinaire d\'Europe de l\'Est avec des produits sélectionnés avec amour.'
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-600" />,
      title: 'Service Personnel',
      description: 'Une équipe dévouée qui connaît vos goûts et vous conseille personnellement.'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-warm-cream to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="French bakery products"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-blue-800">
              Spécialiste des Produits d'Europe de l'Est
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Fondée par une famille passionnée par les saveurs d'Europe de l'Est, notre épicerie perpétue les traditions culinaires 
              de Pologne, Roumanie, Bulgarie, Hongrie et d'autres pays de la région. Chaque produit est sélectionné 
              avec soin pour vous offrir le meilleur de la gastronomie est-européenne.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              De nos charcuteries traditionnelles aux conserves artisanales, en passant par nos produits surgelés 
              de qualité, nous nous engageons à préserver l'authenticité des saveurs d'Europe de l'Est dans chaque produit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About