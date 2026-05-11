'use client';

import Link from 'next/link';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="product-card animate-fade-in">
      <Link href={`/product/${product.id}`}>
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />

          {/* Badges */}
          <div className="product-badges">
            {product.isNew && <span className="badge badge-new">New</span>}
            {product.originalPrice && (
              <span className="badge badge-sale">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          <div className="product-overlay">
            <button
              className="btn btn-primary quick-add"
              onClick={(e) => { e.preventDefault(); addToCart(product); }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <Link href={`/product/${product.id}`}>
          <h3 className="product-name">{product.name}</h3>
        </Link>

        {product.rating && (
          <div className="product-rating">
            <span className="stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
            <span className="review-count">({product.reviewCount})</span>
          </div>
        )}

        <div className="product-price-row">
          <p className="product-price">${product.price}</p>
          {product.originalPrice && (
            <p className="product-original-price">${product.originalPrice}</p>
          )}
        </div>
      </div>
    </div>
  );
}
