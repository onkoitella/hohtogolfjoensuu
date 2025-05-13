
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t border-hohtopink/30 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-hohtopink">HOHTOMINIGOLF JOENSUU</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#tietoa" className="text-gray-300 hover:text-hohtopink transition-colors">
              Tietoa
            </a>
            <a href="#hinnat" className="text-gray-300 hover:text-hohtopink transition-colors">
              Hinnat
            </a>
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
