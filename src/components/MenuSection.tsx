import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { after } from 'node:test';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

interface MenuCategory {
  title: string;
  emoji: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Tea & Drinks',
    emoji: '🍵',
    items: [
      { name: 'Milk Chiya', price: '$3.99', description: 'Traditional Nepali spiced milk tea' },
      { name: 'Black Chiya', price: '$3.99', description: 'Bold black tea with aromatic spices' },
      { name: 'Green Tea', price: '$3.99', description: 'Fresh green tea leaves' },
      { name: 'Lassi (Mango/Banana)', price: '$4.99', description: 'Creamy yogurt drink with fresh fruit' },
      // { name: 'Bubble Tea', price: '$4.99', description: 'Fun and refreshing with tapioca pearls', popular: true },
      { name: 'Bubble Tea', price: '$4.99', description: 'Fun and refreshing with tapioca pearls'},

      { name: 'Water / Coke / Fanta', price: '$3.99', description: 'Soft drinks and beverages' },
    ],
  },
  {
    title: 'Snacks & Quick Bites',
    emoji: '🥟',
    items: [
      { name: 'Sel Roti (2 pcs)', price: '$4.99', description: 'Traditional ring-shaped rice bread' },
      { name: 'Donut (2 pcs)', price: '$4.99', description: 'Fresh homemade donuts' },
      { name: 'Alu Badam Sadeko', price: '$5.99', description: 'Spiced potato and peanut salad' },
      { name: 'Sausage (3 pcs)', price: '$7.99', description: 'Grilled sausages with spices' },
      { name: 'Syafale', price: '$4.99', description: 'Traditional Nepali fried bread' },
      { name: 'Chicken Wings/Drumstick (3 pcs)', price: '$9.99', description: 'Marinated and grilled to perfection' },
      { name: 'Chatpate - Veg', price: '$5.00', description: 'Spicy puffed rice salad' },
      { name: 'Sukuti', price: '$9.99', description: 'Dried meat' },
      { name: 'Spiral Potato', price: '$6.99', description: 'Crispy spiral-cut seasoned potato' },
    ],
  },
  {
    title: 'Signature Dishes',
    emoji: '🍳',
    items: [
      { 
        name: 'Tareko Egg + Kerau Jhol + Sel Roti + Chiya', 
        price: '$9.99', 
        description: 'Complete traditional breakfast set',
     
      },
      { name: 'Laphing (Dry/Jhol)', price: '$8.99', description: 'Spicy cold mung bean noodles' },
      { name: 'Kima Noodles', price: '$10.99', description: 'Stir-fried noodles with minced meat' },
      { name: 'Mutton Madka', price: '$15.99', description: 'Slow-cooked tender mutton curry' },
      { name: 'Momo (Chicken/Veg)', price: '$11.99', description: 'Jhol, Steam, Fry, or C Momo style' },
    ],
  },
  {
    title: 'Combo Sets',
    emoji: '🍽️',
    items: [
      {
        name: 'Thelamandu Combo Set',
        price: '$14.99',
        description: 'Choice of: 1️⃣ Alu Badam Achar + Buff/Chicken Choila + Chiura + Sel Roti + Tea OR 2️⃣ Sausage (3 pcs) / Chicken Wings / Drumstick (2 pcs) + Syafale + Laphing (Dry/Jhol)'
      },
    ],
  },
];


export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl md:text-5xl mb-6">
            Our <span className="text-gold-primary">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover authentic Nepali flavors crafted with traditional recipes and the finest ingredients.
          </p>
        </div>

        <div className="grid gap-12">
          {menuData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-dark p-8 hover-lift">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.emoji}</span>
                <h3 className="heading-display text-3xl text-gold-primary">
                  {category.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex justify-between items-start gap-4 p-4 rounded-lg bg-background/20 hover:bg-background/30 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-foreground">
                          {item.name}
                        </h4>
                        {item.popular && (
                          <Badge className="bg-gold-primary text-primary-foreground">
                            Popular
                          </Badge>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="text-gold-primary font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};