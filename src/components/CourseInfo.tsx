
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CourseInfo: React.FC = () => {
  return <section id="tietoa" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Tietoa meistä</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-bold text-hohtopink mb-4">Tervetuloa Hohtominigolf Joensuuhun!</h3>
            <p className="text-gray-200 mb-4">Hohtominigolf Joensuu on ainutlaatuinen minigolf-elämys Joensuun sydämessä. Kokeile taitojasi 9-reikäisellä UV-hohtavalla minigolf-radalla, joka tarjoaa hauskan ja jännittävän kokemuksen kaikenikäisille.</p>
            <p className="text-gray-200">
              Ratamme on suunniteltu sekä aloittelijoille että kokeneille pelaajille. 
              Tule nauttimaan hyvästä seurasta, musiikista ja unohtumattomasta minigolf-kokemuksesta!
            </p>
          </div>
          <Card className="card-glass overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9} className="bg-black">
                <img 
                  src="/lovable-uploads/ee95df46-34a1-468b-8a0e-41bbb6c38ea4.png" 
                  alt="Hohtava 9-reikäinen minigolf-rata" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-2 w-full text-center text-white font-semibold bg-black/50 py-1">
                  Hohtava 9-reikäinen rata
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16" id="hinnasto">
          <h2 className="section-title text-center">Hinnasto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="card-glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-hohtopink mb-2">Lapset</h3>
                <p className="text-4xl font-bold mb-4">10€</p>
                <p className="text-gray-300">Alle 12-vuotiaat</p>
              </CardContent>
            </Card>
            
            <Card className="card-glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-hohtopink mb-2">Aikuiset</h3>
                <p className="text-4xl font-bold mb-4">15€</p>
                <p className="text-gray-300">Yli 12-vuotiaat</p>
              </CardContent>
            </Card>
            
            <Card className="card-glass">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-hohtopink mb-2">Perhelippu</h3>
                <p className="text-4xl font-bold mb-4">40€</p>
                <p className="text-gray-300">2 aikuista + 2 lasta</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default CourseInfo;
