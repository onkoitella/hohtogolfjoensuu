
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
      <section className="w-full">
        <Card className="card-glass overflow-hidden w-full rounded-none border-x-0">
          <CardContent className="p-0">
            <AspectRatio ratio={16 / 9} className="bg-black">
              <img src="/lovable-uploads/f3e73ff5-ceac-4610-b6bb-a5f67031494f.png" alt="Hohtava minigolf-rata neonvaloilla" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white hohto-glow">Koe ainutlaatuinen minigolf-elämys Joensuussa</h3>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </section>
      
      {/* Hero Section with Indoor Hohtominigolf Background */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          
          
          {/* Indoor Hohtominigolf Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Room structure */}
            <div className="w-full h-full relative">
              {/* Ceiling with UV lights */}
              <div className="absolute top-0 left-0 w-full h-1/6 flex justify-around">
                {[...Array(8)].map((_, i) => <div key={i} className="w-6 h-6 bg-hohtopink rounded-full shadow-[0_0_15px_5px_rgba(255,105,180,0.8)] animate-pulse"></div>)}
              </div>
              
              {/* Walls with neon decorations */}
              <div className="absolute left-0 top-1/6 h-4/6 w-full flex justify-between">
                {/* Left wall */}
                
                
                {/* Center - Playing Area */}
                
                
                {/* Right wall */}
                <div className="h-full w-1/6 bg-black/40 border-l border-hohtopink/30">
                  
                </div>
              </div>
              
              {/* Floor */}
              
            </div>
          </div>
          
          
        </div>
        
        <div className="container mx-auto relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            
            
          </div>
        </div>
      </section>
      
      <CourseInfo />
      
      <AppointmentForm />
      
      <ContactInfo />
      
      <Footer />
    </div>;
};
export default Index;
