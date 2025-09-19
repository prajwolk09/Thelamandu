import React from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Users, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-6">
            Our <span className="text-gold-primary">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the heart of the Himalayas to your table, we bring authentic Nepali flavors 
            with recipes passed down through generations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-dark p-8 text-center hover-lift">
            <Heart className="text-gold-primary mx-auto mb-4" size={48} />
            <h3 className="heading-primary text-2xl mb-4">Made with Love</h3>
            <p className="text-muted-foreground">
              Every dish is prepared with traditional methods and authentic spices imported directly from Nepal.
            </p>
          </Card>

          <Card className="glass-dark p-8 text-center hover-lift">
            <Users className="text-gold-primary mx-auto mb-4" size={48} />
            <h3 className="heading-primary text-2xl mb-4">Community</h3>
            <p className="text-muted-foreground">
              A gathering place where friends and family come together to share authentic Nepali hospitality.
            </p>
          </Card>

          <Card className="glass-dark p-8 text-center hover-lift">
            <Award className="text-gold-primary mx-auto mb-4" size={48} />
            <h3 className="heading-primary text-2xl mb-4">Quality</h3>
            <p className="text-muted-foreground">
              We use only the finest ingredients, ensuring every meal meets our high standards of excellence.
            </p>
          </Card>
        </div>

        <div className="bg-gradient-dark rounded-3xl p-8 md:p-12 text-center">
          <h3 className="heading-display text-3xl md:text-4xl mb-6">
            Experience <span className="text-gold-primary">Nepal</span> in Every Bite
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our chefs bring decades of experience from the kitchens of Kathmandu, 
            creating an authentic dining experience that transports you straight to the heart of Nepal.
          </p>
        </div>
      </div>
    </section>
  );
};