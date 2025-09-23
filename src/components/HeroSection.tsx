import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import momoHero from '@/assets/momo-hero.jpg';
import chiyaHero from '@/assets/chiya-hero.jpg';

const heroImages = [
  { src: momoHero, alt: 'Fresh Nepali Momos' },
  { src: chiyaHero, alt: 'Traditional Nepali Chiya' },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden vintage-pattern">
      <div className="container mx-auto px-4 py-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-vintage-slide">
              <h1 className="section-title text-4xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16 xl:mt-20 animate-vintage-glow">
              <span className="text-primary">THELA</span> 
              <span>MANDU</span>
            </h1>
              <div className="text-2xl sm:text-3xl md:text-4xl text-deep-brown mb-4 font-semibold">
              Authentic. Discovered. Delicious.
            </div>
            <div className="text-xl text-warm-orange mb-2 font-bold">
              घरको मिठो स्वाद, गल्लीको रमाइलो मजा
            </div>
            <div className="flex items-center justify-center lg:justify-start mb-8 text-deep-brown">
              <span className="text-2xl mr-2">👉</span>
              <span className="text-lg font-medium">Taste the street - with a heart from home</span>
              <span className="text-2xl ml-2">🏠</span>
            </div>
            <p className="text-xl md:text-2xl text-deep-brown mb-12 leading-relaxed max-w-2xl">
              From the heart of the Himalayas to your table, experience authentic Nepali flavors 
              with recipes passed down through generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="btn-vintage text-base sm:text-lg px-6 sm:px-10 py-4 hover-vintage w-full sm:w-auto"
                onClick={scrollToMenu}
              >
                Explore Menu
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-burnt-orange text-burnt-orange hover:bg-gradient-vintage hover:text-deep-brown px-10 py-4 text-lg font-semibold transition-all duration-500 hover-vintage"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Visit Us
              </Button>
            </div>
          </div>

          {/* Vintage Food Cart Illustration */}
          <div className="hidden lg:flex relative justify-end">
              <div className="relative w-96 h-96 lg:w-[450px] lg:h-[450px]">
              {/* Decorative vintage rings */}
              <div className="absolute inset-0 rounded-full border-4 border-golden-yellow/40 animate-vintage-glow"></div>
              <div className="absolute inset-2 sm:inset-4 rounded-full border-3 border-burnt-orange/30 animate-pulse"></div>
              <div className="absolute inset-4 sm:inset-8 rounded-full border-4 border-warm-orange/40"></div>  

              {/* Food image with vintage styling */}
              <div className="absolute inset-8 sm:inset-12 rounded-full overflow-hidden shadow-2xl animate-vintage-float glass-vintage">
                {heroImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                      index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                  />
                ))}
                
                {/* Vintage overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-golden-yellow/10 via-transparent to-burnt-orange/20 pointer-events-none"></div>
              </div>

              {/* Rotating vintage border - like a cart wheel */}
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-burnt-orange via-golden-yellow to-warm-orange opacity-60" 
                style={{ 
                  background: 'conic-gradient(from 0deg, hsl(var(--burnt-orange)), hsl(var(--golden-yellow)), hsl(var(--warm-orange)), hsl(var(--burnt-orange)))',
                  animation: 'rotateVintage 25s linear infinite',
                  mask: 'radial-gradient(circle, transparent 90%, black 92%, black 100%)'
                }}
              ></div>

              {/* Cart wheel spokes effect */}
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-0.5 bg-burnt-orange/30 absolute rotate-0"></div>
                <div className="w-full h-0.5 bg-burnt-orange/30 absolute rotate-45"></div>
                <div className="w-full h-0.5 bg-burnt-orange/30 absolute rotate-90"></div>
                <div className="w-full h-0.5 bg-burnt-orange/30 absolute rotate-135"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Vintage scroll indicator */}
        <div className="flex flex-col items-center space-y-2 animate-bounce mt-10 sm:mt-12 relative sm:absolute sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2">
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="ext-burnt-orange animate-vintage-glow" size={36} />
            <div className="w-0.5 h-12 bg-gradient-to-b from-burnt-orange to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Vintage background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10 animate-vintage-float">
        <div className="w-full h-full rounded-full bg-gradient-vintage"></div>
      </div>
      <div className="absolute bottom-32 right-16 w-24 h-24 opacity-15 animate-vintage-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full rounded-full bg-gradient-sunset"></div>
      </div>
    </section>
  );
};