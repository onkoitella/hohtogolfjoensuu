import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Beer, Wine, Lamp } from "lucide-react";
const Baari: React.FC = () => {
  return <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-hohtopink/20 to-black/80 z-10 my-0"></div>
          <div className="bg-black w-full h-full"></div>
        </div>
        
        <div className="container mx-auto relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              BAARI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Nauti juomista loistavassa tunnelmassa!
            </p>
          </div>
        </div>
      </section>
      
      {/* UV-hohtava baaritiksi Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 my-[11px] py-0 px-0 mx-0">
        <div className="container mx-auto">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-0">
            <div className="p-4 order-2 md:order-1">
              <Card className="card-glass overflow-hidden border border-hohtopink/30">
                <CardContent className="p-0">
                  <AspectRatio ratio={16 / 9} className="bg-black">
                    <img src="/lovable-uploads/30496725-45c4-4863-b7be-a857d960f507.png" alt="UV-hohtava baaritiksi" className="object-cover w-full h-full" />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="card-glass p-6">
                
                <p className="mb-4 text-lg">
                  Hohtominigolfin yhteydessä toimiva baarimme tarjoaa ainutlaatuisen tunnelman UV-valaistuksen alla. 
                  Baaritiskin vihreä hohto ja sininen valaistus luovat täydellisen ilmapiirin illanviettoon.
                </p>
                <p className="mb-6 text-lg">
                  Tilavassa baarissamme voit nauttia laadukkaista juomista ja hyvästä seurasta koko illan ajan.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center">
                    <Beer className="text-hohtopink mr-2 h-5 w-5" />
                    <span>Laadukkaat oluet</span>
                  </div>
                  <div className="flex items-center">
                    <Wine className="text-hohtopink mr-2 h-5 w-5" />
                    <span>Monipuolinen valikoima</span>
                  </div>
                  <div className="flex items-center">
                    <Lamp className="text-hohtopink mr-2 h-5 w-5" />
                    <span>Ainutlaatuinen tunnelma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      
      
      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Juomavalikoimamme</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-glass border-hohtopink/30">
              <CardHeader>
                <CardTitle className="text-hohtopink">Alkoholittomat</CardTitle>
                <CardDescription className="text-gray-300">Raikkaita vaihtoehtoja</CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Limsat</span>
                    <span className="text-hohtopink">4,50 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Energiajuomat</span>
                    <span className="text-hohtopink">5,50 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mehut</span>
                    <span className="text-hohtopink">4,00 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Kivennäisvedet</span>
                    <span className="text-hohtopink">3,50 €</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-glass border-hohtopink/30">
              <CardHeader>
                <CardTitle className="text-hohtopink">Oluet ja Siiderit</CardTitle>
                <CardDescription className="text-gray-300">Laaja valikoima</CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Hanaolut 0,4L</span>
                    <span className="text-hohtopink">7,00 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hanaolut 0,25L</span>
                    <span className="text-hohtopink">5,50 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Erikoisoluet</span>
                    <span className="text-hohtopink">8,00 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Siiderit</span>
                    <span className="text-hohtopink">7,50 €</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-glass border-hohtopink/30">
              <CardHeader>
                <CardTitle className="text-hohtopink">Drinkit</CardTitle>
                <CardDescription className="text-gray-300">Hohtavat erikoisuutemme</CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Hohto Mojito</span>
                    <span className="text-hohtopink">10,00 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>UV Gin Tonic</span>
                    <span className="text-hohtopink">9,50 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pink Neon</span>
                    <span className="text-hohtopink">11,00 €</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Black Light</span>
                    <span className="text-hohtopink">12,00 €</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hohtopink animate-glow">Tule viihtymään!</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Järjestämme myös yksityistilaisuuksia ja teemailtoja. Ota yhteyttä ja kysy lisää!
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="btn-primary">
              Varaa Pöytä
            </Button>
            <Button variant="outline" className="btn-outline">
              Ota Yhteyttä
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Baari;