import Link from 'next/link';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero Background" 
          />
        </div>
        <div className="container">
          <div className="hero-content animate-fade-in">
            <span className="hero-subtitle">New Collection 2026</span>
            <h1 className="heading-xl hero-title">Refined Aesthetics <br /> For Every Day</h1>
            <div className="hero-actions" style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/shop" className="btn btn-primary">Shop Collection</Link>
              <Link href="/about" className="btn btn-outline">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="heading-lg">Featured Arrivals</h2>
              <p className="text-muted">Explore our hand-picked selection of premium essentials.</p>
            </div>
            <Link href="/shop" className="nav-link" style={{ borderBottom: '1px solid var(--accent)' }}>
              View All
            </Link>
          </div>
          
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Collections CTA */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="collection-card glass" style={{ padding: 'var(--space-xl)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Tech Essentials</h3>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>Precision engineering meets minimalist design.</p>
              <Link href="/shop?category=tech" className="btn btn-outline">Explore Tech</Link>
            </div>
            <div className="collection-card glass" style={{ padding: 'var(--space-xl)', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Lifestyle Wear</h3>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>Elegance for every occasion, crafted to last.</p>
              <Link href="/shop?category=lifestyle" className="btn btn-outline">Explore Lifestyle</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
