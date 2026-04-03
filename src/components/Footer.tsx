import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl text-white">Estie Woreda</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Dedicated to the development and prosperity of our community in the heart of the South Gondar Zone.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="hover:text-primary transition-colors">{t.nav.home}</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">{t.nav.about}</a></li>
              <li><a href="/kebeles" className="hover:text-primary transition-colors">{t.nav.kebeles}</a></li>
              <li><a href="/tourism" className="hover:text-primary transition-colors">{t.nav.tourism}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">Education <ExternalLink className="h-3 w-3" /></li>
              <li className="flex items-center gap-2">Health <ExternalLink className="h-3 w-3" /></li>
              <li className="flex items-center gap-2">Agriculture <ExternalLink className="h-3 w-3" /></li>
              <li className="flex items-center gap-2">Land Admin <ExternalLink className="h-3 w-3" /></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span>+251 58 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@estieworeda.gov.et</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Andabet Town, Amhara, ET</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Estie Woreda Administration. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};