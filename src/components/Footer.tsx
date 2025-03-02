import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  showTermsAndPrivacy?: boolean;
  onOpenTerms?: () => void;
  onOpenPrivacy?: () => void;
}

function Footer({ showTermsAndPrivacy = true, onOpenTerms, onOpenPrivacy }: FooterProps) {
  return (
    <footer id="contactos" className="bg-[#FC2406] py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/ivo.tmonteiro" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-white/80 transition-colors flex items-center gap-2"
            >
              <Instagram className="text-white" /> Instagram
            </a>
            <a 
              href="mailto:ivosmonteiro@gmail.com"
              className="text-white font-bold hover:text-white/80 transition-colors flex items-center gap-2"
            >
              <Mail className="text-white" /> Email
            </a>
            <a 
              href="https://wa.link/luhlty"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-white/80 transition-colors flex items-center gap-2"
            >
              <Phone className="text-white" /> WhatsApp
            </a>
          </div>
          {showTermsAndPrivacy && onOpenTerms && onOpenPrivacy && (
            <div className="flex gap-8">
              <button 
                onClick={onOpenTerms}
                className="text-white font-bold hover:text-white/80 transition-colors"
              >
                Termos de Uso
              </button>
              <button 
                onClick={onOpenPrivacy}
                className="text-white font-bold hover:text-white/80 transition-colors"
              >
                Política de Privacidade
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;