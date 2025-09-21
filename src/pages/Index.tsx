
import React from 'react';
import { BackgroundSlideshow } from '@/components/BackgroundSlideshow';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { MenuSection } from '@/components/MenuSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from 'sonner';

const Index = () => {
  return (
    <CartProvider>
      <div className="relative min-h-screen">
        {/*<BackgroundSlideshow />*/}
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <MenuSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
};

export default Index;
