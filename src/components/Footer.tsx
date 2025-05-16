
import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-hohtopink/30 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/cb2ad3be-a7a5-4a57-b4f9-5823b888b103.png" 
                alt="Hohtominigolf Joensuu Logo" 
                className="h-16 md:h-24"
              />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#tietoa" className="text-gray-300 hover:text-hohtopink transition-colors">
              Tietoa
            </a>
            <a href="#hinnasto" className="text-gray-300 hover:text-hohtopink transition-colors">
              Hinnasto
            </a>
            <Link to="/paketit" className="text-gray-300 hover:text-hohtopink transition-colors">
              Paketit
            </Link>
            <Link to="/baari" className="text-gray-300 hover:text-hohtopink transition-colors">
              Baari
            </Link>
            <a href="#varaa" className="text-gray-300 hover:text-hohtopink transition-colors">
              Varaa
            </a>
            <a href="#yhteystiedot" className="text-gray-300 hover:text-hohtopink transition-colors">
              Yhteystiedot
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-hohtopink/20 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Hohtominigolf Joensuu. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
