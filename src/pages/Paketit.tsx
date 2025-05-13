
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Gift, Users, PartyPopper } from "lucide-react";

const Paketit: React.FC = () => {
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
              <span className="text-hohtopink animate-glow">PAKETIT</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Hohtominigolf elämykset ryhmille ja juhlijoille
            </p>
          </div>
        </div>
      </section>
      
      {/* Packages Tabs */}
      <section className="py-12 px-4 bg-black">
        <div className="container mx-auto">
          <Tabs defaultValue="syntymapäivät" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black border border-hohtopink/30">
              <TabsTrigger value="syntymapäivät" className="data-[state=active]:bg-hohtopink data-[state=active]:text-black">
                <PartyPopper className="mr-2 h-4 w-4" />
                Synttärit
              </TabsTrigger>
              <TabsTrigger value="tyhy" className="data-[state=active]:bg-hohtopink data-[state=active]:text-black">
                <Users className="mr-2 h-4 w-4" />
                TYHY päivät
              </TabsTrigger>
              <TabsTrigger value="muut" className="data-[state=active]:bg-hohtopink data-[state=active]:text-black">
                <Gift className="mr-2 h-4 w-4" />
                Muut juhlat
              </TabsTrigger>
            </TabsList>
            
            {/* Syntymäpäivät */}
            <TabsContent value="syntymapäivät">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <Card className="bg-card border-hohtopink/30">
                  <CardHeader>
                    <CardTitle className="text-hohtopink text-2xl">Syntymäpäivät Hohtominigolfissa</CardTitle>
                    <CardDescription>Tee syntymäpäiväjuhlista ikimuistoiset aktiviteetin parissa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Hohtominigolf Joensuussa syntymäpäiväjuhla on elämys, joka jää mieleen! Tarjoamme uniikin ympäristön juhlien viettämiseen – upeat 18-reikäiset hehkuvat radat haastavat kaikenikäisiä pelaajia.
                    </p>
                    <p>
                      Syntymäpäiväpakettimme sisältävät:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Minigolf-kierros koko ryhmälle</li>
                      <li>Oma juhlatila 2 tunniksi</li>
                      <li>Kahvi tai mehutarjoilu</li>
                      <li>Syntymäpäiväkakku (tilauksesta)</li>
                      <li>Viihtymistakuu!</li>
                    </ul>
                    
                    <div className="pt-4">
                      <h3 className="text-lg font-bold text-hohtopink mb-2">Hinnasto</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Pieni paketti (5-10 hlö)</span>
                          <span className="font-bold">149€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Keskikokoinen paketti (11-15 hlö)</span>
                          <span className="font-bold">199€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Suuri paketti (16-20 hlö)</span>
                          <span className="font-bold">249€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Lisähenkilö</span>
                          <span className="font-bold">15€/hlö</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Syntymäpäiväkakku</span>
                          <span className="font-bold">+45€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden border border-hohtopink/30">
                    <AspectRatio ratio={16/9}>
                      <div className="w-full h-full bg-gradient-to-br from-hohtopink/20 to-hohtopink/5 flex items-center justify-center">
                        <PartyPopper className="w-20 h-20 text-hohtopink opacity-60" />
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <Card className="bg-card border-hohtopink/30">
                    <CardHeader>
                      <CardTitle className="text-hohtopink text-xl">Varaa syntymäpäiväjuhla</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Varaa juhlat helposti! Ole yhteydessä meihin ja suunnitellaan yhdessä unohtumattomat syntymäpäivät.</p>
                      <Button className="btn-primary w-full">Varaa syntymäpäiväjuhla</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* TYHY päivät */}
            <TabsContent value="tyhy">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <Card className="bg-card border-hohtopink/30">
                  <CardHeader>
                    <CardTitle className="text-hohtopink text-2xl">TYHY-päivät Hohtominigolfissa</CardTitle>
                    <CardDescription>Työhyvinvointi kasvaa yhteisen tekemisen parissa</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Tyhy-päivät Hohtominigolf Joensuussa tarjoavat hauskan ja rennon ympäristön työyhteisön yhteishengen vahvistamiseen. 
                      Meillä yhdistyvät leikkimielinen kilpailu, yhdessäolo ja viihtyminen uniikissa ympäristössä.
                    </p>
                    <p>
                      Tyhy-pakettimme sisältävät:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Minigolf-kierros koko ryhmälle</li>
                      <li>Yksityisvaraus koko tilaan mahdollinen</li>
                      <li>Kokoustila käyttöön (2-4h)</li>
                      <li>Catering-mahdollisuus</li>
                      <li>Mahdollisuus järjestettyyn leikkimieliseen minigolf-turnaukseen</li>
                    </ul>
                    
                    <div className="pt-4">
                      <h3 className="text-lg font-bold text-hohtopink mb-2">Hinnasto</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Perus TYHY-paketti (10-15 hlö)</span>
                          <span className="font-bold">249€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Laaja TYHY-paketti (16-30 hlö)</span>
                          <span className="font-bold">399€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Premium TYHY-paketti (yli 30 hlö)</span>
                          <span className="font-bold">499€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Catering-palvelut</span>
                          <span className="font-bold">alk. 18€/hlö</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden border border-hohtopink/30">
                    <AspectRatio ratio={16/9}>
                      <div className="w-full h-full bg-gradient-to-br from-hohtopink/20 to-hohtopink/5 flex items-center justify-center">
                        <Users className="w-20 h-20 text-hohtopink opacity-60" />
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <Card className="bg-card border-hohtopink/30">
                    <CardHeader>
                      <CardTitle className="text-hohtopink text-xl">Varaa TYHY-päivä</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Ole yhteydessä meihin ja suunnitellaan yhdessä työyhteisöllenne sopiva TYHY-kokonaisuus!</p>
                      <Button className="btn-primary w-full">Varaa TYHY-päivä</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Muut juhlat */}
            <TabsContent value="muut">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <Card className="bg-card border-hohtopink/30">
                  <CardHeader>
                    <CardTitle className="text-hohtopink text-2xl">Muut juhlat ja tilaisuudet</CardTitle>
                    <CardDescription>Polttarit, pikkujoulut, valmistujaiset ja muut juhlat</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Hohtominigolf Joensuu tarjoaa ainutlaatuisen tilan kaikenlaisiin juhliin ja tilaisuuksiin. 
                      Järjestä polttarit, pikkujoulut, valmistujaiset tai mikä tahansa juhla hohtavan minigolfin parissa!
                    </p>
                    <p>
                      Juhlapakettimme sisältävät:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Minigolf-kierros koko ryhmälle</li>
                      <li>Mahdollisuus yksityistilaisuuteen</li>
                      <li>Baaripalvelut</li>
                      <li>Ruokatarjoilut toiveiden mukaan</li>
                      <li>Juhlien kesto sopimuksen mukaan</li>
                    </ul>
                    
                    <div className="pt-4">
                      <h3 className="text-lg font-bold text-hohtopink mb-2">Hinnasto</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Pieni ryhmä (5-10 hlö)</span>
                          <span className="font-bold">179€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Keskikokoinen ryhmä (11-20 hlö)</span>
                          <span className="font-bold">299€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Suuri ryhmä (21-40 hlö)</span>
                          <span className="font-bold">449€</span>
                        </div>
                        <div className="flex justify-between border-b border-hohtopink/20 pb-2">
                          <span>Yksityistilaisuus (koko tila)</span>
                          <span className="font-bold">699€</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-6">
                  <div className="rounded-lg overflow-hidden border border-hohtopink/30">
                    <AspectRatio ratio={16/9}>
                      <div className="w-full h-full bg-gradient-to-br from-hohtopink/20 to-hohtopink/5 flex items-center justify-center">
                        <Gift className="w-20 h-20 text-hohtopink opacity-60" />
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <Card className="bg-card border-hohtopink/30">
                    <CardHeader>
                      <CardTitle className="text-hohtopink text-xl">Varaa tilaisuus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Ota yhteyttä ja kerro juhlatoiveesi! Räätälöimme juhlat teille sopiviksi.</p>
                      <Button className="btn-primary w-full">Varaa juhlat tai tilaisuus</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Paketit;
