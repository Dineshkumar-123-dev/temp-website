'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', address: '', city: '', zip: '', country: '',
    cardNumber: '', cardExpiry: '', cardCvc: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
        <div className="container checkout-success">
          <div className="success-icon">✓</div>
          <h1 className="heading-lg">Order Confirmed!</h1>
          <p className="text-muted">Thank you for your purchase. Your order is on its way.</p>
          <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => router.push('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    router.push('/cart');
    return null;
  }

  return (
    <div className="checkout-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <h1 className="heading-lg" style={{ marginBottom: 'var(--space-lg)' }}>Checkout</h1>

        {/* Stepper */}
        <div className="checkout-stepper">
          {steps.map((s, i) => (
            <div key={s} className={`step-item ${i <= step ? 'active' : ''}`}>
              <div className="step-num">{i < step ? '✓' : i + 1}</div>
              <span className="step-label">{s}</span>
              {i < steps.length - 1 && <div className="step-line" />}
            </div>
          ))}
        </div>

        <div className="checkout-layout">
          {/* Form */}
          <div className="checkout-form-section">
            {step === 0 && (
              <div className="form-card glass animate-fade-in">
                <h3 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>Shipping Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input name="address" value={form.address} onChange={handleChange} placeholder="123 Main Street" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input name="city" value={form.city} onChange={handleChange} placeholder="New York" />
                  </div>
                  <div className="form-group">
                    <label>ZIP Code</label>
                    <input name="zip" value={form.zip} onChange={handleChange} placeholder="10001" />
                  </div>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-md)' }} onClick={() => setStep(1)}>
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="form-card glass animate-fade-in">
                <h3 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>Payment Details</h3>
                <div className="form-group">
                  <label>Card Number</label>
                  <input name="cardNumber" value={form.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength={19} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input name="cardExpiry" value={form.cardExpiry} onChange={handleChange} placeholder="MM / YY" maxLength={7} />
                  </div>
                  <div className="form-group">
                    <label>CVC</label>
                    <input name="cardCvc" value={form.cardCvc} onChange={handleChange} placeholder="123" maxLength={4} />
                  </div>
                </div>
                <div className="form-actions">
                  <button className="btn btn-outline" onClick={() => setStep(0)}>Back</button>
                  <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setStep(2)}>Review Order</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="form-card glass animate-fade-in">
                <h3 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>Review Your Order</h3>
                <div className="review-shipping">
                  <p className="text-muted" style={{ marginBottom: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Shipping To</p>
                  <p>{form.firstName} {form.lastName} &mdash; {form.address}, {form.city} {form.zip}</p>
                </div>
                <div className="review-items">
                  {cart.map(item => (
                    <div key={item.id} className="review-item-row">
                      <span>{item.name} &times; {item.quantity}</span>
                      <span>${item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="form-actions" style={{ marginTop: 'var(--space-lg)' }}>
                  <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                  <button className="btn btn-primary" style={{ flex: 1 }} onClick={handlePlaceOrder}>Place Order</button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="checkout-summary glass">
            <h3 className="heading-md" style={{ marginBottom: 'var(--space-md)' }}>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="checkout-summary-item">
                <div className="checkout-item-img">
                  <img src={item.image} alt={item.name} />
                  <span className="checkout-qty-badge">{item.quantity}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '0.875rem' }}>{item.name}</p>
                </div>
                <p style={{ fontWeight: 600 }}>${item.price * item.quantity}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--border)', marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)' }}>
              <div className="summary-row"><span>Subtotal</span><span>${cartTotal}</span></div>
              <div className="summary-row"><span>Shipping</span><span>Free</span></div>
              <div className="summary-total"><span>Total</span><span>${cartTotal}</span></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
