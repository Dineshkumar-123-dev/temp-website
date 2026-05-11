import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero */}
      <section style={{ padding: 'var(--space-xl) 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem' }}>Our Story</span>
          <h1 className="heading-xl" style={{ marginTop: '1rem', marginBottom: 'var(--space-lg)' }}>
            Built Around<br />Beauty &amp; Purpose
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
            LUMINA was founded on a single conviction: great design should be accessible. We curate products that sit at the intersection of form and function — objects that make everyday life more beautiful and more intentional.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>What We Stand For</h2>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[
              { title: 'Curation Over Volume', desc: 'We choose fewer things, better. Every product earns its place through rigorous review of quality, design, and ethics.' },
              { title: 'Sustainable Choices', desc: 'We partner with makers who care about materials, processes, and the long-term impact of what they build.' },
              { title: 'Honest Pricing', desc: 'Premium does not mean overpriced. We believe the best products can be fairly made and fairly sold.' },
            ].map(v => (
              <div key={v.title} className="glass" style={{ padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)' }}>
                <h3 className="heading-md" style={{ marginBottom: '1rem', color: 'var(--accent)' }}>{v.title}</h3>
                <p className="text-muted" style={{ lineHeight: '1.8' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'var(--space-xl) 0', background: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="heading-lg" style={{ marginBottom: 'var(--space-md)' }}>Start Exploring</h2>
          <p className="text-muted" style={{ marginBottom: 'var(--space-lg)' }}>Discover a collection built with intention.</p>
          <Link href="/shop" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}
