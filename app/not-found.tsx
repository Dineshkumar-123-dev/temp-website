import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ paddingTop: '0', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="animate-fade-in">
        <p style={{ fontSize: '8rem', fontWeight: 700, color: 'var(--surface-hover)', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>404</p>
        <h1 className="heading-lg" style={{ marginBottom: 'var(--space-md)', marginTop: '-1rem' }}>Page Not Found</h1>
        <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>The page you are looking for doesn&apos;t exist or has been moved.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/shop" className="btn btn-outline">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}
