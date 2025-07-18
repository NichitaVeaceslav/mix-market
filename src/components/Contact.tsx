import React from 'react'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Nous Contacter
          </h2>
          <div className="french-flag-gradient h-1 w-24 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Venez nous rendre visite ou contactez-nous pour toute question. 
            Notre équipe sera ravie de vous accueillir et de vous conseiller.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Informations Pratiques
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Avenue de Grande-Bretagne<br />
                      31300 Toulouse, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+33 5 61 42 33 44</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@mixtmarketcity.fr</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horaires d'ouverture</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Samedi: 8h00 - 20h00</p>
                      <p>Dimanche: 9h00 - 18h00</p>
                      <p className="text-sm text-red-600 mt-2">Fermé les jours fériés</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Suivez-nous
              </h3>
              <p className="text-gray-600 mb-6">
                Restez informés de nos nouveautés, promotions et événements spéciaux.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">
              Envoyez-nous un Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre.email@exemple.fr"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Choisissez un sujet</option>
                  <option>Commande spéciale</option>
                  <option>Livraison</option>
                  <option>Produits</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-primary">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Plan interactif</p>
              <p className="text-sm">Avenue de Grande-Bretagne, 31300 Toulouse</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact