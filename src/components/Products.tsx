import React from 'react'
import { Wine, Croissant, UserCheck as Cheese, Coffee, Apple, Fish } from 'lucide-react'

const Products: React.FC = () => {
  const categories = [
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      title: 'Charcuterie & Conserves',
      description: 'Charcuteries traditionnelles et conserves d\'Europe de l\'Est',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      products: ['Saucisses polonaises', 'Jambon hongrois', 'Conserves bulgares', 'Pâtés roumains']
    },
    {
      icon: <Cheese className="w-8 h-8 text-yellow-600" />,
      title: 'Fromages d\'Europe de l\'Est',
      description: 'Sélection de fromages traditionnels d\'Europe de l\'Est',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80',
      products: ['Fromage de brebis bulgare', 'Kashkaval', 'Fromage blanc polonais', 'Telemea roumain']
    },
    {
      icon: <Wine className="w-8 h-8 text-red-600" />,
      title: 'Boissons & Spiritueux',
      description: 'Vins et spiritueux des pays d\'Europe de l\'Est',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      products: ['Vins bulgares', 'Vodka polonaise', 'Palinka hongroise', 'Țuică roumaine']
    },
    {
      icon: <Fish className="w-8 h-8 text-blue-600" />,
      title: 'Produits Surgelés',
      description: 'Poissons, viandes et légumes surgelés de qualité',
      image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      products: ['Poissons surgelés', 'Viandes surgelées', 'Légumes surgelés', 'Plats préparés surgelés']
    },
    {
      icon: <Croissant className="w-8 h-8 text-yellow-600" />,
      title: 'Pâtisseries & Pain',
      description: 'Pains et pâtisseries traditionnels d\'Europe de l\'Est',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      products: ['Pain noir polonais', 'Cozonac roumain', 'Strudel hongrois', 'Banitsa bulgare']
    },
    {
      icon: <Apple className="w-8 h-8 text-green-600" />,
      title: 'Épicerie Fine',
      description: 'Spécialités et produits gourmets d\'Europe de l\'Est',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      products: ['Confitures bulgares', 'Miel de Roumanie', 'Chocolats polonais', 'Thés et cafés']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Nos Produits
          </h2>
          <div className="french-flag-gradient h-1 w-24 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez notre sélection de produits d'Europe de l'Est authentiques, 
            choisis avec passion pour leur qualité exceptionnelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <div className="relative h-48">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.products.map((product, productIndex) => (
                    <li key={productIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Voir tous nos produits
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products