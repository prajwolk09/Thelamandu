import React from 'react';
import { Heart, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-warm border-t-4 border-burnt-orange vintage-pattern relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-2 bg-gradient-vintage"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="text-logo-style text-4xl mb-6">
              THELAMANDU
            </div>
            <div className="text-xl text-deep-brown mb-4 font-semibold">
              Authentic. Discovered. Delicious.
            </div>
            <p className="text-deep-brown mb-6 max-w-md leading-relaxed">
              Bringing authentic Nepali flavors to your table since our founding. 
              Experience the warmth of Himalayan hospitality with every visit to our street food haven.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 rounded-full bg-gradient-vintage hover:bg-gradient-sunset transition-all duration-300 hover-vintage group">
                <Facebook className="text-deep-brown group-hover:text-white" size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gradient-vintage hover:bg-gradient-sunset transition-all duration-300 hover-vintage group">
                <Instagram className="text-deep-brown group-hover:text-white" size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-gradient-vintage hover:bg-gradient-sunset transition-all duration-300 hover-vintage group">
                <Twitter className="text-deep-brown group-hover:text-white" size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-primary text-xl mb-6 text-burnt-orange">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#home" 
                  className="text-deep-brown hover:text-burnt-orange transition-colors duration-300 font-medium flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full bg-golden-yellow group-hover:bg-burnt-orange transition-colors duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-deep-brown hover:text-burnt-orange transition-colors duration-300 font-medium flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full bg-golden-yellow group-hover:bg-burnt-orange transition-colors duration-300"></span>
                  Our Story
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  className="text-deep-brown hover:text-burnt-orange transition-colors duration-300 font-medium flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full bg-golden-yellow group-hover:bg-burnt-orange transition-colors duration-300"></span>
                  Menu
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-deep-brown hover:text-burnt-orange transition-colors duration-300 font-medium flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full bg-golden-yellow group-hover:bg-burnt-orange transition-colors duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-primary text-xl mb-6 text-burnt-orange">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-deep-brown">
                <MapPin className="text-warm-orange mt-1 shrink-0" size={18} />
                <div>
                  <div className="font-medium">#######</div>
                  <div className="font-medium">#######</div>
                  <div className="font-medium">#######</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-deep-brown">
                <Phone className="text-warm-orange shrink-0" size={18} />
                <div>
                  <div className="font-medium"><a href="tel:+15551236372" className="block hover:underline">9999999999</a></div>
                  <div className="font-medium"><a href="tel:+15551236372" className="block hover:underline">9999999999</a></div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-deep-brown">
                <Mail className="text-warm-orange shrink-0" size={18} />
                <div>
                  <div className="font-medium"><a href="mailto:info@thelamandu.com" className="block hover:underline">info@thelamandu.com</a></div>
                  <div className="font-medium"><a href="mailto:info@thelamandu.com" className="block hover:underline">orders@thelamandu.com</a></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Hours Section */}
        <div className="mt-12 pt-8 border-t-2 border-burnt-orange/30">
          <div className="card-vintage text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="text-burnt-orange" size={28} />
              <h4 className="heading-primary text-2xl text-burnt-orange">Our Opening Hours</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-deep-brown">
              <div>
                <div className="font-semibold text-lg">Monday - Thursday</div>
                <div className="text-warm-orange">11:00 AM - 9:00 PM</div>
              </div>
              <div>
                <div className="font-semibold text-lg">Friday - Saturday</div>
                <div className="text-warm-orange">11:00 AM - 10:00 PM</div>
              </div>
              <div>
                <div className="font-semibold text-lg">Sunday</div>
                <div className="text-warm-orange">12:00 PM - 8:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-burnt-orange/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-deep-brown font-medium mb-2">
                © 2025 Thelamandu Restaurant. All rights reserved.
              </p>
              <p className="text-warm-orange text-sm">
                घरको मिठो स्वाद, गल्लीको रमाइलो मजा - Taste the street with a heart from home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-16 right-12 w-24 h-24 opacity-10 animate-vintage-float">
        <div className="w-full h-full rounded-full bg-gradient-vintage"></div>
      </div>
      <div className="absolute bottom-20 left-16 w-16 h-16 opacity-15 animate-vintage-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full rounded-full bg-gradient-sunset"></div>
      </div>
      
      {/* Bottom decorative border */}
      <div className="h-2 bg-gradient-sunset"></div>
    </footer>
  );
};