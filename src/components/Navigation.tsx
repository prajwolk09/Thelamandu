import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CartButton } from '@/components/CartButton';
import { Cart } from '@/components/Cart';
import logo from '@/assets/logo.jpg'

const navItems = [
  { name: 'Home', href: '#home', path: '/' },
  { name: 'About', href: '#about', path: '/about' },
  { name: 'Menu', href: '#menu', path: '/menu' },
  { name: 'Contact', href: '#contact', path: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, path: string) => {
    window.history.replaceState({}, '', path);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-vintage shadow-2xl' : 'glass'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div onClick={() => handleNavClick('#home', '/')} className="cursor-pointer">
            {/* Text logo (only on large screens and up) */}
            <div className="hidden lg:block text-logo-style text-3xl lg:text-4xl hover-glow-vintage transition-all duration-500">
            THELAMANDU
            </div>

            {/* Image logo (visible on medium screens and below) */}
            <img
            src={logo}
            alt="Thelamandu Logo"
            className="block lg:hidden h-10 w-auto hover-glow-vintage transition-all duration-500"
            />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.path)}
                  className="text-deep-brown hover:text-burnt-orange transition-all duration-300 font-semibold text-lg relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-vintage group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Custom styled cart button */}
              <div className="ml-4">
                <CartButton onClick={() => setIsCartOpen(true)} />
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <CartButton onClick={() => setIsCartOpen(true)} />
              <Button
                variant="ghost"
                size="icon"
                className="text-deep-brown hover:text-burnt-orange hover:bg-golden-yellow/20 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden glass-vintage border-t-2 border-burnt-orange/30 animate-vintage-slide">
              <div className="px-4 pt-4 pb-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.path)}
                    className="block w-full text-left px-4 py-3 text-deep-brown hover:text-burnt-orange hover:bg-golden-yellow/20 transition-all duration-300 font-semibold text-lg rounded-lg"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Decorative border */}
        <div className="h-1 bg-gradient-vintage"></div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};