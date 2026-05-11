import Link from 'next/link';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

const collections = [
  { id: 'tech', name: 'Tech Essentials', description: 'Precision engineering meets minimalist design.', color: '#1a1a2e' },
  { id: 'audio', name: 'Studio Audio', description: 'Immersive sound for the discerning listener.', color: '#16213e' },
  { id: 'watches', name: 'Timepieces', description: 'Crafted to stand the test of time.', color: '#0f3460' },
  { id: 'accessories', name: 'Accessories', description: 'The details that define your style.', color: '#1a0a2e' },
];

export default function CollectionsPage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div style={{ paddingTop: '120px' }}>
      <div className="container">
        {/* Page Hero */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', padding: 'var(--space-xl) 0' }}>
          <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.875rem' }}>Curated For You</span>
          <h1 className="heading-xl" style={{ marginTop: '1rem' }}>Our Collections</h1>
          <p className="text-muted" style={{ maxWidth: '500px', margin: '1rem auto 0' }}>
            Every collection is carefully curated around a distinct aesthetic and purpose.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="collections-grid">
          {collections.map(col => (
            <Link href={`/shop?category=${col.id}`} key={col.id} className="collection-item" style={{ background: col.color }}>
              <div className="collection-item-inner">
                <h2 className="heading-md">{col.name}</h2>
                <p className="text-muted" style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>{col.description}</p>
                <span className="collection-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured from all collections */}
        <section className="section">
          <div className="section-header">
            <h2 className="heading-lg">All-Time Favourites</h2>
            <Link href="/shop" className="nav-link" style={{ borderBottom: '1px solid var(--accent)' }}>Shop All</Link>
          </div>
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
