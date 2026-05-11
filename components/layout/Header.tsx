'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="container header-content">
          <Link href="/" className="logo">LUMINA</Link>

          <nav className="nav">
            <Link href="/shop" className="nav-link">Shop</Link>
            <Link href="/collections" className="nav-link">Collections</Link>
            <Link href="/about" className="nav-link">About</Link>
          </nav>

          <div className="header-actions">
            <Link href="/cart" className="icon-btn cart-btn" aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>

            <Link href="/account" className="icon-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              className="hamburger icon-btn"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu glass animate-fade-in">
          <nav className="mobile-nav">
            <Link href="/shop" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Shop</Link>
            <Link href="/collections" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Collections</Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/account" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Account</Link>
          </nav>
        </div>
      )}
    </>
  );
}
