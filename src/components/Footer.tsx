import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerNavItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="heading-display text-3xl text-gold-primary mb-4">
              Thelamandu
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Bringing authentic Nepali flavors to your table since our founding.
              Experience the warmth of Himalayan hospitality with every visit.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-gold-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold-primary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-primary text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-gold-primary transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-primary text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Street</li>
              <li>City, State 12345</li>
              <li>
                <a href="tel:+9999999999" className="hover:underline block">
                      (999) 9999999999
                </a>
              </li>
              <li>
                <a href="tel:+8888888888" className="hover:underline block">
                      (999) 8888888888
                </a>
              </li>
              <li>
                <a href="mailto:info@thelamandu.com" className="hover:underline block">
                      info@thelamandu.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Thelamandu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};