import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import momoHero from '@/assets/momo-hero.jpg';
import chiyaHero from '@/assets/chiya-hero.jpg';
import trayHero from '@/assets/food-tray.jpg';


const heroImages = [
  { src: momoHero, alt: 'Fresh Nepali Momos' },
  { src: chiyaHero, alt: 'Traditional Nepali Chiya' },
  { src: trayHero, alt: 'Sel Roti' },
];

export const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="heading-display text-4xl md:text-6xl lg:text-7xl mb-6">
              Welcome to{' '}
              <span className="text-gold-primary">Thelamandu</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Experience the authentic flavors of Nepal in every bite. From local street foods to signature Nepali style Mo:Mo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 hover-lift px-8 py-3"
                onClick={scrollToMenu}
              >
                View Menu
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-primary-foreground px-8 py-3"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Visit Us
              </Button>
            </div>
          </div>

          {/* Rotating Food Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gold-primary/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-copper/20"></div>
              
              {/* Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl animate-float">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-gold-primary via-transparent to-gold-primary animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gold-primary" size={32} />
        </div>
      </div>
    </section>
  );
};