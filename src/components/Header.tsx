
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-4 px-4 md:px-8 bg-black border-b border-hohtopink/50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-hohtopink animate-glow">
            HOHTOMINIGOLF JOENSUU
          </h1>
        </div>
        
        <nav className="flex gap-6 items-center">
          <a href="#tietoa" className="text-white hover:text-hohtopink transition-colors">
            Tietoa
          </a>
          <a href="#hinnat" className="text-white hover:text-hohtopink transition-colors">
            Hinnat
          </a>
          <a href="#yhteystiedot" className="text-white hover:text-hohtopink transition-colors">
            Yhteystiedot
          </a>
          <Button className="btn-primary">
            Varaa aika
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
