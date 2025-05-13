
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, User } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <section id="yhteystiedot" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Yhteystiedot</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="card-glass">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-hohtopink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Osoite</h3>
                  <p className="text-gray-200">Kauppakatu 29</p>
                  <p className="text-gray-200">80100 Joensuu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-hohtopink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Aukioloajat</h3>
                  <p className="text-gray-200">Ma-To: 12:00 - 21:00</p>
                  <p className="text-gray-200">Pe-La: 12:00 - 23:00</p>
                  <p className="text-gray-200">Su: 12:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-hohtopink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Puhelin</h3>
                  <p className="text-gray-200">050 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-hohtopink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Sähköposti</h3>
                  <p className="text-gray-200">info@hohtominigolfjoensuu.fi</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <User className="h-6 w-6 text-hohtopink flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Henkilökunta</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <p className="text-gray-200 font-medium">Eetu Lehtiniemi</p>
                      <p className="text-gray-300 text-sm">eetu@hohtominigolfjoensuu.fi</p>
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">Markus Laine</p>
                      <p className="text-gray-300 text-sm">markus@hohtominigolfjoensuu.fi</p>
                    </div>
                    <div>
                      <p className="text-gray-200 font-medium">Juuso Lehtiniemi</p>
                      <p className="text-gray-300 text-sm">juuso@hohtominigolfjoensuu.fi</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="h-full min-h-[300px] bg-black border border-hohtopink/30 rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-hohtopink font-bold">Kartta sijainnista</p>
                <p className="text-sm text-gray-400">(Placeholder karttaa varten)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
