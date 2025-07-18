import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingBasket } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-red-600 rounded-full flex items-center justify-center">
              <ShoppingBasket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">Mixt Market City</h1>
              <p className="text-sm text-gray-600">Épicerie pays de l'Est à Toulouse</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              À Propos
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Produits
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-800 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-800 font-medium">
                Accueil
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-800 font-medium">
                À Propos
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-blue-800 font-medium">
                Produits
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-800 font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header