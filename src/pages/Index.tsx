import React from 'react';
import Header from '@/components/Header';
import CourseInfo from '@/components/CourseInfo';
import AppointmentForm from '@/components/AppointmentForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const Index: React.FC = () => {
  return <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      
      {/* Background Image Section - First div on landing page */}
      <section className="w-full relative">
        <Card className="card-glass overflow-hidden w-full rounded-none border-x-0">
          <CardContent className="p-0">
            <AspectRatio ratio={16 / 9} className="bg-black">
              <img src="/lovable-uploads/f3e73ff5-ceac-4610-b6bb-a5f67031494f.png" alt="Hohtava minigolf-rata neonvaloilla" className="object-cover w-full h-full" />
              <h3 className="absolute inset-0 flex items-center justify-center text-4xl hohto-glow md:text-3xl bg-black/30 lg:text-4xl my-0 font-bold text-white">Koe ainutlaatuinen minigolf-elämys Joensuussa</h3>
            </AspectRatio>
          </CardContent>
        </Card>
      </section>
      
      <CourseInfo />
      
      <AppointmentForm />
      
      <ContactInfo />
      
      <Footer />
    </div>;
};
export default Index;