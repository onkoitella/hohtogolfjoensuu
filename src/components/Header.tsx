
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return <header className="py-4 px-4 md:px-8 bg-black border-b border-hohtopink/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/cb2ad3be-a7a5-4a57-b4f9-5823b888b103.png" 
              alt="Hohtominigolf Joensuu Logo" 
              className="h-28 md:h-32"
            />
          </Link>
        </div>
        
        <nav className="flex gap-6 items-center">
          <a href="#tietoa" className="text-white hover:text-hohtopink transition-colors">
            Tietoa
          </a>
          <a href="#hinnasto" className="text-white hover:text-hohtopink transition-colors">
            Hinnasto
          </a>
          <Link to="/paketit" className="text-white hover:text-hohtopink transition-colors">
            Paketit
          </Link>
          <Link to="/baari" className="text-white hover:text-hohtopink transition-colors">
            Baari
          </Link>
          <a href="#yhteystiedot" className="text-white hover:text-hohtopink transition-colors">
            Yhteystiedot
          </a>
          <Button className="btn-primary">
            Varaa aika
          </Button>
        </nav>
      </div>
    </header>;
};

export default Header;
