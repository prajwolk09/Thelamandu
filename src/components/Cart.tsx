import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus, Trash2, X, Star } from 'lucide-react';
import { sendOrderEmail, OrderData } from '@/services/emailService';
import { toast } from 'sonner';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [isOrdering, setIsOrdering] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsOrdering(true);

    const orderData: OrderData = {
      customerName: customerInfo.name,
      customerEmail: customerInfo.email,
      customerPhone: customerInfo.phone,
      items,
      totalPrice: getTotalPrice(),
      orderNotes: customerInfo.notes
    };

    try {
      await sendOrderEmail(orderData);
      toast.success('Order sent successfully! We will contact you soon.');
      clearCart();
      setCustomerInfo({ name: '', email: '', phone: '', notes: '' });
      onClose();
    } catch (error) {
      toast.error('Failed to send order. Please try again or call us directly.');
    } finally {
      setIsOrdering(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 ">
      <Card className="glass-vintage w-full max-w-3xl max-h-[90vh] overflow-hidden border-4 vintage-border">
        {/* Header */}
        <div className="p-6 border-b-2 border-burnt-orange/30 bg-gradient-warm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2 rounded-full bg-gradient-vintage">
                <ShoppingCart className="text-deep-brown" size={28} />
              </div>
              <div>
                <h2 className="text-logo-style text-2xl">YOUR ORDER</h2>
                <p className="text-warm-orange text-sm">From our street to your table</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-burnt-orange/20 text-deep-brown hover:text-burnt-orange transition-all duration-300 p-3"
            >
              <X size={24} />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 vintage-pattern">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-warm flex items-center justify-center">
                <ShoppingCart className="text-warm-orange animate-vintage-float" size={64} />
              </div>
              <h3 className="text-2xl font-semibold text-deep-brown mb-2">Your cart is empty</h3>
              <p className="text-warm-orange">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              {items.map((item) => (
                <Card key={item.id} className="card-vintage hover-vintage p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="heading-primary text-lg text-deep-brown">{item.name}</h3>
                        {item.popular && (
                          <Badge className="bg-gradient-sunset text-white text-xs px-2 py-0.5">
                            <Star size={10} fill="currentColor" className="mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="price-vintage text-lg">${item.price.toFixed(2)} each</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-10 w-10 border-2 border-burnt-orange hover:bg-gradient-vintage hover:border-burnt-orange transition-all duration-300"
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="w-12 text-center font-bold text-lg text-deep-brown">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-10 w-10 border-2 border-burnt-orange hover:bg-gradient-vintage hover:border-burnt-orange transition-all duration-300"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                        className="h-10 w-10 text-vintage-red hover:text-vintage-red hover:bg-vintage-red/10 transition-all duration-300"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Item total */}
                  <div className="border-t border-burnt-orange/20 pt-3 mt-4 flex justify-between items-center">
                    <span className="text-warm-orange">Subtotal:</span>
                    <span className="price-vintage">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </Card>
              ))}

              {/* Order Summary */}
              <div className="card-vintage border-4 vintage-border bg-gradient-warm">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold text-deep-brown">Total Amount:</span>
                  <span className="text-logo-style text-3xl">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>

                {/* Order Form */}
                <form onSubmit={handleSubmitOrder} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name *"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="border-2 border-burnt-orange/30 focus:border-burnt-orange bg-cream-vintage/80 text-deep-brown placeholder:text-warm-orange/60"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email *"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="border-2 border-burnt-orange/30 focus:border-burnt-orange bg-cream-vintage/80 text-deep-brown placeholder:text-warm-orange/60"
                    />
                  </div>
                  
                  <Input
                    type="tel"
                    placeholder="Your Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="border-2 border-burnt-orange/30 focus:border-burnt-orange bg-cream-vintage/80 text-deep-brown placeholder:text-warm-orange/60"
                  />
                  
                  <Textarea
                    placeholder="Special instructions or dietary requirements (optional)"
                    value={customerInfo.notes}
                    onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                    rows={3}
                    className="border-2 border-burnt-orange/30 focus:border-burnt-orange bg-cream-vintage/80 text-deep-brown placeholder:text-warm-orange/60 resize-none"
                  />
                  
                  <Button
                    type="submit"
                    className="w-full btn-vintage text-lg py-4 font-bold hover-vintage disabled:opacity-50"
                    disabled={isOrdering || items.length === 0}
                  >
                    {isOrdering ? 'Sending Your Order...' : 'Place Order - We\'ll Call You!'}
                  </Button>
                  
                  <p className="text-center text-sm text-warm-orange">
                    We'll call you to confirm your order and arrange pickup/delivery
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};