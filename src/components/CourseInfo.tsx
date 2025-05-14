
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
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-hohtopink/20 to-black/60 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-hohtopink/30 to-black/80">
                      <div className="w-full h-full p-8 flex flex-col items-center justify-center">
                        <div className="rounded-full w-24 h-24 bg-hohtopink/30 mb-4 flex items-center justify-center">
                          <div className="rounded-full w-16 h-16 bg-hohtopink/50 flex items-center justify-center">
                            <div className="rounded-full w-8 h-8 bg-hohtopink animate-pulse"></div>
                          </div>
                        </div>
                        <div className="h-2 w-32 rounded-full bg-hohtopink/30 mb-2"></div>
                        <div className="h-2 w-48 rounded-full bg-hohtopink/20 mb-2"></div>
                        <div className="h-2 w-40 rounded-full bg-hohtopink/10"></div>
                        
                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-hohtopink/50"></div>
                        <div className="absolute top-10 left-6 w-6 h-6 rounded-full bg-hohtopink/40"></div>
                        <div className="absolute top-4 right-12 w-4 h-4 rounded-full bg-hohtopink/60"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 w-full text-center text-white font-semibold">
                    Hohtava 9-reikäinen rata
                  </div>
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
