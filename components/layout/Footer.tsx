import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'block' }}>
              LUMINA
            </Link>
            <p className="text-muted" style={{ maxWidth: '300px', fontSize: '0.875rem' }}>
              Curating the finest essentials for the modern lifestyle. Quality and aesthetics in every detail.
            </p>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><Link href="/shop">All Products</Link></li>
              <li><Link href="/shop?category=new">New Arrivals</Link></li>
              <li><Link href="/shop?category=featured">Featured</Link></li>
              <li><Link href="/shop?category=sale">Sale</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul className="footer-links">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Newsletter</h4>
            <p className="text-muted" style={{ fontSize: '0.875rem' }}>Join our list for exclusive previews and offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email address" required />
              <button type="submit" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>Join</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LUMINA. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
