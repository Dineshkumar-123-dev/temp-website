'use client';

import { useState } from 'react';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

export default function ShopPage() {
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [priceMax, setPriceMax] = useState(500);

  const filteredProducts = products
    .filter(p => (category === 'All' || p.category === category) && p.price <= priceMax)
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return (b.rating ?? 0) - (a.rating ?? 0);
      return 0;
    });

  return (
    <div className="shop-page" style={{ paddingTop: '120px', paddingBottom: 'var(--space-xl)' }}>
      <div className="container">
        <div className="shop-header">
          <div>
            <h1 className="heading-lg">Shop All</h1>
            <p className="text-muted" style={{ marginTop: '0.25rem' }}>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Sort:</label>
            <select className="sort-select" style={{ width: 'auto' }} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          {/* Sidebar Filters */}
          <aside className="shop-sidebar">
            <div className="filter-group">
              <h4 className="filter-title">Category</h4>
              <ul className="filter-list">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      className={`filter-btn ${category === cat ? 'active' : ''}`}
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filter-group">
              <h4 className="filter-title">Max Price</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                  type="range"
                  min={50} max={500} step={10}
                  value={priceMax}
                  onChange={e => setPriceMax(Number(e.target.value))}
                  style={{ accentColor: 'var(--accent)', width: '100%' }}
                />
                <span style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 600 }}>Up to ${priceMax}</span>
              </div>
            </div>

            {(category !== 'All' || priceMax < 500) && (
              <button
                className="btn btn-outline"
                style={{ width: '100%', fontSize: '0.75rem', padding: '0.5rem' }}
                onClick={() => { setCategory('All'); setPriceMax(500); }}
              >
                Clear Filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <main>
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No products match your filters.</p>
                <button className="btn btn-outline" onClick={() => { setCategory('All'); setPriceMax(500); }}>
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
