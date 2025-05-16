
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
      
      {/* Hero Section with Indoor Hohtominigolf Background */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-hohtopink/20 to-black/80 z-10"></div>
          
          {/* Indoor Hohtominigolf Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Room structure */}
            <div className="w-full h-full relative">
              {/* Ceiling with UV lights */}
              <div className="absolute top-0 left-0 w-full h-1/6 flex justify-around">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-hohtopink rounded-full shadow-[0_0_15px_5px_rgba(255,105,180,0.8)] animate-pulse"></div>
                ))}
              </div>
              
              {/* Walls with neon decorations */}
              <div className="absolute left-0 top-1/6 h-4/6 w-full flex justify-between">
                {/* Left wall */}
                <div className="h-full w-1/6 bg-black/40 border-r border-hohtopink/30">
                  <div className="h-1/2 w-full border-b border-hohtopink/40 relative">
                    <div className="absolute top-1/4 right-0 w-3/4 h-1 bg-hohtopink shadow-[0_0_10px_2px_rgba(255,105,180,0.8)]"></div>
                  </div>
                </div>
                
                {/* Center - Playing Area */}
                <div className="h-full w-4/6 relative">
                  {/* Minigolf courses */}
                  <div className="absolute top-1/4 left-1/6 w-2/3 h-1/2">
                    {/* Course 1 */}
                    <div className="absolute top-0 left-0 w-1/3 h-full bg-black/80 border border-hohtopink/50 rounded-lg shadow-[0_0_10px_2px_rgba(255,105,180,0.3)]">
                      <div className="absolute bottom-1/4 left-1/2 w-4 h-4 rounded-full bg-hohtopink/70 shadow-[0_0_8px_3px_rgba(255,105,180,0.6)]"></div>
                      <div className="absolute top-1/2 left-1/4 w-1/2 h-2 bg-hohtopink/40 rounded-full"></div>
                    </div>
                    
                    {/* Course 2 */}
                    <div className="absolute top-1/4 left-1/3 w-1/3 h-3/4 bg-black/80 border border-hohtopink/50 rounded-lg shadow-[0_0_10px_2px_rgba(255,105,180,0.3)]">
                      <div className="absolute top-0 left-1/4 w-1/2 h-2 bg-hohtopink/40"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-hohtopink/70 shadow-[0_0_8px_3px_rgba(255,105,180,0.6)]"></div>
                    </div>
                    
                    {/* Course 3 */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-black/80 border border-hohtopink/50 rounded-lg shadow-[0_0_10px_2px_rgba(255,105,180,0.3)]">
                      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-hohtopink/70 shadow-[0_0_8px_3px_rgba(255,105,180,0.6)]"></div>
                      <div className="absolute top-1/3 left-1/4 w-1/2 h-2 bg-hohtopink/40 rounded-md"></div>
                    </div>
                  </div>
                  
                  {/* People playing */}
                  <div className="absolute bottom-1/6 left-1/4 w-8 h-12 bg-black/80 rounded-full">
                    <div className="w-6 h-6 bg-black/80 rounded-full mx-auto"></div>
                  </div>
                  <div className="absolute bottom-1/5 right-1/3 w-8 h-12 bg-black/80 rounded-full">
                    <div className="w-6 h-6 bg-black/80 rounded-full mx-auto"></div>
                  </div>
                </div>
                
                {/* Right wall */}
                <div className="h-full w-1/6 bg-black/40 border-l border-hohtopink/30">
                  <div className="h-1/3 w-full border-b border-hohtopink/40 relative">
                    <div className="absolute bottom-1/4 left-0 w-3/4 h-1 bg-hohtopink shadow-[0_0_10px_2px_rgba(255,105,180,0.8)]"></div>
                  </div>
                </div>
              </div>
              
              {/* Floor */}
              <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black/60 border-t border-hohtopink/20">
                <div className="w-full h-full flex justify-around">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="h-full w-px bg-hohtopink/20"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-black w-full h-full opacity-40"></div>
        </div>
        
        <div className="container mx-auto relative z-20">
          <div className="text-center max-w-3xl mx-auto">
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
