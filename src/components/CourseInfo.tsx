
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Target, Dices } from "lucide-react";

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
              <AspectRatio ratio={16 / 9} className="bg-black">
                <img src="/lovable-uploads/ee95df46-34a1-468b-8a0e-41bbb6c38ea4.png" alt="Hohtava 9-reikäinen minigolf-rata" className="object-cover w-full h-full" />
                <div className="absolute bottom-2 w-full text-center text-white font-semibold bg-black/50 py-1">
              </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>

        {/* Darts Section */}
        <div className="mt-16">
          <h2 className="section-title text-center">Darts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <Card className="card-glass overflow-hidden order-2 md:order-1">
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9} className="bg-black">
                  <img 
                    src="/lovable-uploads/e4319ac8-1356-4ae9-ae6a-a878f2418c47.png" 
                    alt="Hohtava darts-taulu punaisella kehyksellä" 
                    className="object-cover w-full h-full" 
                  />
                </AspectRatio>
              </CardContent>
            </Card>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-hohtopink mb-4">Kokeile tarkkuuttasi hohtodartsin parissa!</h3>
              <p className="text-gray-200 mb-4">
                Haasta ystäväsi jännittävään darts-mittelöön UV-valaistuksessa. Ammattiluokan darts-taulumme hohtavat 
                UV-valojen alla, luoden ainutlaatuisen pelikokemuksen.
              </p>
              <p className="text-gray-200">
                Dartsin pelaaminen sopii kaikille taitotasosta riippumatta. Heittäisitkö sinä täydellisen 180?
              </p>
            </div>
          </div>
        </div>

        {/* Shuffleboard Section */}
        <div className="mt-16">
          <h2 className="section-title text-center">Shuffleboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-hohtopink mb-4">Shuffleboard - takuuvarma hauskuuden takaaja!</h3>
              <p className="text-gray-200 mb-4">
                Shuffleboard on suosittu pöytäpeli, jossa pelaajat liu'uttavat kiekkoja pelipöydän pintaa pitkin 
                kohti pöydän toisessa päässä sijaitsevia pisteytysalueita.
              </p>
              <p className="text-gray-200">
                Peli on helppo oppia mutta vaikea hallita. Shuffleboard tarjoaa hauskaa ajanvietettä ystävien 
                ja perheen kesken hohtavassa ympäristössä.
              </p>
            </div>
            <Card className="card-glass overflow-hidden">
              <CardContent className="p-0">
                <AspectRatio ratio={16 / 9} className="bg-black">
                  <div className="flex items-center justify-center h-full w-full bg-black/80">
                    <Dices size={120} className="text-hohtopink animate-pulse" />
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
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
