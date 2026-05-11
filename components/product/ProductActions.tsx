'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/data';

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-actions-detailed">
      <div className="quantity-selector">
        <button 
          className="qty-btn"
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
        >
          -
        </button>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="qty-input" 
        />
        <button 
          className="qty-btn"
          onClick={() => setQuantity(q => q + 1)}
        >
          +
        </button>
      </div>
      <button 
        className="btn btn-primary add-to-cart-btn"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
