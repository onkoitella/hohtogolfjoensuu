
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Baari: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-hohtopink/20 to-black/80 z-10"></div>
          <div className="bg-black w-full h-full"></div>
        </div>
        
        <div className="container mx-auto relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              <span className="text-hohtopink animate-glow">HOHTO</span>BAARI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Nauti juomista loistavassa tunnelmassa!
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="tietoa-baarista" className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title text-center mb-12">Tietoa Baaristamme</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="card-glass p-6">
                <p className="mb-4 text-lg">
                  Hohtominigolfin yhteydessä toimiva baari tarjoaa laajan valikoiman juomia ja pientä purtavaa. 
                  Voit nauttia virvokkeita ennen peliä, pelin aikana tai sen jälkeen mukavassa ilmapiirissä.
                </p>
                <p className="mb-4 text-lg">
                  Baarin UV-valaistus ja energinen musiikki luovat ainutlaatuisen tunnelman, joka sopii täydellisesti hohtominigolf-elämykseen.
                </p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="aspect-ratio rounded-lg overflow-hidden border-2 border-hohtopink/50 shadow-lg shadow-hohtopink/20 h-[300px]">
                <div className="w-full h-full bg-gradient-to-br from-hohtopink/20 to-black flex items-center justify-center">
                  <span className="text-hohtopink text-4xl font-bold">Baari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-hohtopink animate-glow">
            Tule viihtymään baariin!
          </h2>
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
    </div>
  );
};

export default Baari;
