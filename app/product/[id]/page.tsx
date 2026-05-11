import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';

interface PageProps {
  params: Promise<{ id: string }>;
}

import ProductActions from '@/components/product/ProductActions';

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-detail-page" style={{ paddingTop: '120px' }}>
      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{product.name}</span>
        </nav>

        <div className="product-detail-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={product.image} alt={product.name} className="main-image" />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-detailed">
            <span className="product-category-tag">{product.category}</span>
            <h1 className="heading-lg product-title">{product.name}</h1>
            <p className="product-price-lg">${product.price}</p>
            
            <div className="product-description-section">
              <p>{product.description}</p>
            </div>

            <ProductActions product={product} />

            <div className="product-meta">
              <div className="meta-item">
                <strong>SKU:</strong> <span>LUM-{product.id.padStart(4, '0')}</span>
              </div>
              <div className="meta-item">
                <strong>Category:</strong> <span>{product.category}</span>
              </div>
              <div className="meta-item">
                <strong>Shipping:</strong> <span>Free worldwide shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products section">
            <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>You May Also Like</h2>
            <div className="product-grid">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
