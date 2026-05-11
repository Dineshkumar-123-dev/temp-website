'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="heading-lg" style={{ marginBottom: 'var(--space-md)' }}>Your Cart is Empty</h1>
          <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>Looks like you haven't added anything to your cart yet.</p>
          <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="heading-lg" style={{ marginBottom: 'var(--space-xl)' }}>Shopping Cart</h1>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items-section">
            <div className="cart-header-row">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {cart.map(item => (
              <div key={item.id} className="cart-item-row animate-fade-in">
                <div className="cart-item-info">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div>
                    <Link href={`/product/${item.id}`}>
                      <h4 className="cart-item-name">{item.name}</h4>
                    </Link>
                    <p className="text-muted">${item.price}</p>
                  </div>
                </div>

                <div className="cart-item-quantity">
                  <div className="quantity-selector">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input type="number" value={item.quantity} readOnly className="qty-input" />
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="cart-item-total">
                  ${item.price * item.quantity}
                </div>

                <div className="cart-item-remove">
                  <button onClick={() => removeFromCart(item.id)} className="icon-btn" style={{ color: 'var(--text-muted)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <aside className="cart-summary-section">
            <div className="cart-summary-card glass">
              <h3 className="heading-md" style={{ marginBottom: 'var(--space-md)' }}>Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
              <Link href="/checkout" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-md)' }}>
                Checkout
              </Link>
              <Link href="/shop" className="nav-link" style={{ display: 'block', textAlign: 'center', marginTop: 'var(--space-md)', fontSize: '0.875rem' }}>
                Continue Shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
