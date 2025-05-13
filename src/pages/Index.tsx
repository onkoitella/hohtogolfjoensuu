
import React from 'react';
import Header from '@/components/Header';
import CourseInfo from '@/components/CourseInfo';
import AppointmentForm from '@/components/AppointmentForm';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
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
              <span className="text-hohtopink animate-glow">HOHTO</span>MINIGOLF
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Koe ainutlaatuinen minigolf-elämys Joensuussa!
            </p>
            <a 
              href="#varaa"
              className="btn-primary text-lg px-8 py-3 inline-block"
            >
              Varaa Aika Nyt
            </a>
          </div>
        </div>
      </section>
      
      <CourseInfo />
      
      <AppointmentForm />
      
      <ContactInfo />
      
      <Footer />
    </div>
  );
};

export default Index;
