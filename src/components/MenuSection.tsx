import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Plus, Star } from 'lucide-react';
import { useCart, MenuItem } from '@/contexts/CartContext';
import momoImage from '@/assets/momo.jpg';
import dalBhatImage from '@/assets/dal-bhat.jpg';
import chiyaImage from '@/assets/chiya.jpg';
import selRotiImage from '@/assets/sel-roti.jpg';
import chatpateImage from '@/assets/chatpate.jpg';
import thukpaImage from '@/assets/thukpa.jpg';
import milkteaImage from '@/assets/milk-tea.jpg';
import greenteaImage from '@/assets/green-tea.jpg'
import lassiImage from '@/assets/lassi.jpg'
import bubbleteaImage from '@/assets/bubble-tea.jpg'
import beveragesImage from '@/assets/beverages.jpg'
import donutImage from '@/assets/donut.jpg'
import alubadamImage from '@/assets/alu-badam.jpg'
import sausageImage from '@/assets/sausage.jpg'
import syafaleImage from '@/assets/syafale.jpg'
import wingsImage from '@/assets/wings.jpg'
import drumsticksImage from '@/assets/drumsticks.jpg'
import sukutiImage from '@/assets/sukuti.jpg'
import spiralpotatoImage from '@/assets/spiralpotato.jpg'
import setImage from '@/assets/set.jpg'
import laphingImage from '@/assets/laphing.jpg'
import keemanoodlesImage from '@/assets/keema-noodles.jpg'
import muttonmadkaImage from '@/assets/mutton-madka.jpg'

interface MenuItemType {
  id: string;
  name: string;
  price: number;
  description?: string;
  popular?: boolean;
  image?: string;
}

interface MenuCategory {
  title: string;
  emoji: string;
  items: MenuItemType[];
}

const menuData: MenuCategory[] = [
  {
    title: "Tea & Drinks",
    emoji: "🫖",
    items: [
      { id: "chiya-1", name: "Milk tea", price: 3.99, description: "Traditional Nepali spiced milk tea", image: milkteaImage },
      { id: "masala-tea", name: "Black Tea", price: 3.99, description: "Bold black tea with aromatic spices", image: chiyaImage },
      { id: "black-tea", name: "Green Tea", price: 3.99, description: "Fresh green tea", image: greenteaImage },
      { id: "lassi", name: "Lassi (Mango/Banana)", price: 4.99, description: "Creamy yogurt drink with fresh fruit", image: lassiImage },
      { id: "bubble-tea", name: "Bubble Tea", price: 4.99, description: "Fun and refreshing with tapioca pearls", image: bubbleteaImage },
      { id: "beverages", name: "Water / Coke / Fanta", price: 3.99, description: "Soft drinks and beverages", image: beveragesImage },
    ]
  },
  {
    title: "Snacks & Quick Bites",
    emoji: "🥟",
    items: [
      { id: "sel-roti", name: "Sel Roti (2 pcs)", price: 4.99, description: "Traditional ring-shaped bread", image: selRotiImage },
      { id: "donut", name: "Donut (2 pcs)", price: 4.99, description: "Fresh homemade donuts", image: donutImage },
      { id: "alu-badam", name: "Alu Badam Sadeko", price: 5.99, description: "Spiced potato and peanut salad", image: alubadamImage },
      { id: "sausage", name: "Sausage (3 pcs)", price: 7.99, description: "Fried sausages", image: sausageImage },
      { id: "syafale", name: "Syafale", price: 4.99, description: "Traditional Nepali fried bread filled with minced meat", image: syafaleImage },
      { id: "wings", name: "Chicken Wings", price: 9.99, description: "Marinated and grilled to perfection", image: wingsImage },
      { id: "drumsticks", name: "Drumsticks", price: 9.99, description: "Marinated and grilled to perfection", image: drumsticksImage },
      { id: "chatpate", name: "Chatpate - Veg", price: 5.00, description: "Spicy puffed rice salad", image: chatpateImage },
      { id: "sukuti", name: "Sukuti", price: 9.99, description: "Dried Meat cooked with Nepali spices", image: sukutiImage },
      { id: "spiral-potato", name: "Spiral Potato", price: 6.99, description: "Crispy spiral-cut seasoned potato", image: spiralpotatoImage },
    ]
  },
  {
    title: "Signature Dishes",
    emoji: "🍳",
    items: [
      { id: "set", name: "Tareko Egg + Kerau Jhol + Sel Roti + Chiya", price: 9.99, description: "Complete traditional breakfast set", image: setImage },
      { id: "laphing", name: "Laphing (Dry/Jhol)", price: 8.99, description: "Spicy cold mung bean noodles", image: laphingImage },
      { id: "keema-noodles", name: "Keema Noodles", price: 10.99, description: "Stir-fried noodles with minced meat", image: keemanoodlesImage },
      { id: "mutton-madka", name: "Mutton Madka", price: 15.99, description: "Slow-cooked tender mutton curry", image: muttonmadkaImage },            
      { id: "momo-steam", name: "Momo (Chicken/Veg)", price: 11.99, description: "Jhol, Steam, Fry, or C Momo style", image: momoImage },
    ]
  },
  {
    title: "Combo Sets",
    emoji: "🍽️",
    items: [
      { id: "combo1", name: "Thelamandu Combo Set 1", price: 14.99, description: "Alu Badam Achar + Buff/Chicken Choila + Chiura + Sel Roti + Tea" },
      { id: "combo2", name: "Thelamandu Combo Set 2", price: 14.99, description: "Sausage (3 pcs) / Chicken Wings / Drumstick (2 pcs) + Syafale + Laphing (Dry/Jhol)" },
    ]
  }
];

export const MenuSection: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: MenuItemType, category: string) => {
    const menuItem: MenuItem = {
      ...item,
      category
    };
    addToCart(menuItem);
  };

  return (
    <section id="menu" className="py-20 relative">
      <div className="section-container-cream container mx-auto px-8 py-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="section-title text-5xl md:text-6xl mb-8 animate-vintage-glow">
            OUR MENU
          </h2>
          <div className="text-2xl text-brown-warm mb-4 font-semibold">
            Street Food • Home Cooking • Authentic Flavors
          </div>
          <p className="text-xl text-brown-medium max-w-4xl mx-auto leading-relaxed">
            Discover the tastes that have filled Nepali streets and homes for generations. 
            Each dish tells a story of tradition, community, and the warmth of Himalayan hospitality.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="max-w-6xl mx-auto space-y-16">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-vintage-slide">
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="topic-heading text-3xl mb-2 flex items-center justify-center gap-4 text-golden-dark">
                  <span className="text-5xl animate-vintage-float">{category.emoji}</span>
                  {category.title}
                </div>
              </div>

              {/* Menu Items List */}
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="glass-vintage rounded-xl p-6 hover-vintage group flex items-start gap-4 border-2 border-golden-primary/60"
                  >
                    {/* Item Image */}
                    {item.image && (
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 border-golden-primary/50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="heading-primary text-lg text-brown-warm group-hover:text-golden-dark transition-colors duration-300 leading-tight">
                          {item.name}
                          {item.popular && (
                            <Badge className="ml-2 bg-gradient-sunset text-white text-xs px-2 py-0.5">
                              <Star size={10} fill="currentColor" className="mr-1" />
                              Popular
                            </Badge>
                          )}
                        </h4>
                        <span className="price-vintage text-xl font-bold shrink-0">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Description */}
                      {item.description && (
                        <p className="text-brown-medium text-sm leading-relaxed mb-3">
                          {item.description}
                        </p>
                      )}

                      {/* Add to Cart Button */}
                      <Button
                        onClick={() => handleAddToCart(item, category.title)}
                        className="btn-vintage text-sm px-4 py-2 group-hover:scale-105 transition-transform duration-300"
                        size="sm"
                      >
                        <Plus size={14} className="mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};