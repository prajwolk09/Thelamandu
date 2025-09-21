import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <Button
      onClick={onClick}
      className="relative btn-vintage hover-vintage flex items-center gap-2 text-base font-semibold"
    >
      <ShoppingCart size={20} />
      <span>Cart</span>
      {itemCount > 0 && (
        <Badge className="absolute -top-3 -right-3 bg-gradient-sunset text-white min-w-[24px] h-6 rounded-full p-0 flex items-center justify-center text-sm font-bold border-2 border-cream-vintage animate-vintage-glow">
          {itemCount}
        </Badge>
      )}
    </Button>
  );
};