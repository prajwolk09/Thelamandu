import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Users, Award, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative vintage-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title text-5xl md:text-6xl mb-8 animate-vintage-glow">
            OUR STORY
          </h2>
          <div className="text-2xl text-deep-brown mb-6 font-semibold">
            From Kathmandu Streets to Your Heart
          </div>
          <p className="text-xl text-warm-orange max-w-4xl mx-auto leading-relaxed">
            Born from the bustling streets of Kathmandu, Thelamandu brings you the authentic taste 
            of Nepal's rich culinary heritage. Every dish tells a story of tradition, community, 
            and the warmth that defines Nepali hospitality.
          </p>
        </div>

        {/* Story Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="card-vintage hover-vintage text-center group">
            <div className="p-2 rounded-full bg-gradient-vintage inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
              <Heart className="text-deep-brown" size={48} />
            </div>
            <h3 className="heading-primary text-2xl mb-4 text-burnt-orange">Made with Love</h3>
            <p className="text-deep-brown leading-relaxed">
              Every dish is prepared with traditional methods and authentic spices imported directly 
              from the valleys and hills of Nepal, preserving generations of culinary wisdom.
            </p>
          </Card>

          <Card className="card-vintage hover-vintage text-center group">
            <div className="p-2 rounded-full bg-gradient-vintage inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
              <Users className="text-deep-brown" size={48} />
            </div>
            <h3 className="heading-primary text-2xl mb-4 text-burnt-orange">Community</h3>
            <p className="text-deep-brown leading-relaxed">
              A gathering place where friends and family come together to share authentic Nepali hospitality, 
              just like in the chai shops and local eateries of Nepal.
            </p>
          </Card>

          <Card className="card-vintage hover-vintage text-center group">
            <div className="p-2 rounded-full bg-gradient-vintage inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
              <Award className="text-deep-brown" size={48} />
            </div>
            <h3 className="heading-primary text-2xl mb-4 text-burnt-orange">Authenticity</h3>
            <p className="text-deep-brown leading-relaxed">
              We use only the finest ingredients and time-honored recipes, ensuring every meal 
              captures the true essence of Nepal's diverse culinary landscape.
            </p>
          </Card>
        </div>

        {/* Main Story Section */}
        <div className="card-vintage max-w-6xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10 animate-vintage-float">
            <div className="w-full h-full rounded-full bg-gradient-sunset"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-logo-style text-3xl md:text-4xl text-burnt-orange">
                The Journey from Streets to Tables
              </h3>
              <p className="text-lg text-deep-brown leading-relaxed">
                Our story began in the narrow alleys of Kathmandu, where the aroma of spices 
                mingles with the laughter of families sharing meals. We bring that same spirit 
                to your neighborhood - the warmth of a Nepali kitchen, the joy of street food, 
                and the comfort of home-cooked meals.
              </p>
              <p className="text-lg text-deep-brown leading-relaxed">
                Our chefs carry decades of experience from the bustling kitchens of Nepal, 
                each recipe a treasured family secret passed down through generations. 
                From the perfect blend of spices in our dal to the delicate folds of our momos, 
                every detail reflects our commitment to authenticity.
              </p>
              <div className="flex items-center gap-3 text-warm-orange">
                <MapPin size={20} />
                <span className="font-semibold">Bringing Nepal to You, One Dish at a Time</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="card-vintage bg-gradient-warm border-l-4 border-burnt-orange pl-6">
                <h4 className="text-xl font-semibold text-deep-brown mb-2">Our Mission</h4>
                <p className="text-warm-orange">
                  To create a bridge between cultures through food, sharing the rich flavors 
                  and traditions of Nepal while building community connections.
                </p>
              </div>
              
              <div className="card-vintage bg-gradient-warm border-l-4 border-burnt-orange pl-6">
                <h4 className="text-xl font-semibold text-deep-brown mb-2">Our Promise</h4>
                <p className="text-warm-orange">
                  Every meal is prepared with the same care and attention as if we were 
                  cooking for our own family, using only authentic ingredients and methods.
                </p>
              </div>
              
              <div className="card-vintage bg-gradient-warm border-l-4 border-burnt-orange pl-6">
                <h4 className="text-xl font-semibold text-deep-brown mb-2">Our Vision</h4>
                <p className="text-warm-orange">
                  To become your neighborhood's favorite place for authentic Nepali cuisine, 
                  where every visit feels like coming home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-vintage max-w-4xl mx-auto">
            <h3 className="text-logo-style text-3xl md:text-4xl mb-6 text-burnt-orange">
              Experience Nepal in Every Bite
            </h3>
            <p className="text-xl text-deep-brown mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us on a culinary journey through the Himalayas. Taste the difference 
              that authentic ingredients, traditional methods, and genuine hospitality make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-vintage text-lg px-8 py-3 hover-vintage"
              >
                Explore Our Menu
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-3 border-burnt-orange text-burnt-orange hover:bg-gradient-vintage hover:text-deep-brown px-8 py-3 text-lg font-semibold transition-all duration-500 hover-vintage rounded-lg bg-transparent"
              >
                Visit Our Location
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-8 w-16 h-16 opacity-20 animate-vintage-float">
        <div className="w-full h-full rounded-full bg-gradient-vintage"></div>
      </div>
      <div className="absolute bottom-24 right-12 w-20 h-20 opacity-15 animate-vintage-float" style={{ animationDelay: '3s' }}>
        <div className="w-full h-full rounded-full bg-gradient-sunset"></div>
      </div>
    </section>
  );
};