import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
          alt="French grocery store interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="french-flag-gradient h-2 w-32 mx-auto mb-8 rounded-full"></div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mixt Market City
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Épicerie pays de l'Est à Toulouse - Découvrez les saveurs authentiques d'Europe de l'Est
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary">
              Découvrir nos produits
            </button>
            <button className="btn-secondary">
              Nous contacter
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">Adresse</h3>
              <p className="text-sm text-gray-200">Avenue de Grande-Bretagne<br />31300 Toulouse, France</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">Horaires</h3>
              <p className="text-sm text-gray-200">Lun-Sam: 8h-20h<br />Dimanche: 9h-18h</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
              <h3 className="font-semibold mb-2">Téléphone</h3>
              <p className="text-sm text-gray-200">+33 5 61 42 33 44</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero