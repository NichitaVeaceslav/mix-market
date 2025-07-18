import React from 'react'
import { ShoppingBasket, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                <ShoppingBasket className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Mixt Market City</h3>
                <p className="text-sm text-gray-400">Épicerie pays de l'Est à Toulouse</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Depuis 2010, nous vous proposons le meilleur de la gastronomie d'Europe de l'Est 
              dans une atmosphère chaleureuse et familiale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Produits</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Charcuterie</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fromages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Boissons & Spiritueux</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Produits Surgelés</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Épicerie Fine</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  Avenue de Grande-Bretagne<br />31300 Toulouse, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+33 5 61 42 33 44</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">contact@mixtmarketcity.fr</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Horaires</h5>
              <p className="text-gray-400 text-sm">
                Lun-Sam: 8h-20h<br />
                Dimanche: 9h-18h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Mixt Market City. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer