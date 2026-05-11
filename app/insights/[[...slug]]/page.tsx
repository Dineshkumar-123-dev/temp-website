'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function buildApiUrl(pathname: string) {
  const slugPath = pathname.replace(/^\/insights/, '');
  return `/api/insights${slugPath}`;
}

export default function InsightsPage() {
  const pathname = usePathname();
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pathname) return;

    const controller = new AbortController();
    const url = buildApiUrl(pathname);

    setLoading(true);
    setError(null);
    setHtml('');

    fetch(url, { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) throw new Error(`CMS render failed: ${res.status}`);
        const text = await res.text();
        setHtml(text);
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        console.error('CMS render failed', err);
        setError(err.message || 'Unable to load insights content.');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [pathname]);

  return (
    <div className="insights-page">
      <div className="container">
        <section className="section insights-header">
          <div>
            <span className="text-muted">Insights</span>
            <h1 className="heading-xl">Stories, analysis, and CMS pages</h1>
            <p className="text-muted">Navigate the latest insights without leaving the site.</p>
          </div>
        </section>

        <nav className="insights-nav-bar">
          <Link href="/insights" className="nav-link">Overview</Link>
          <Link href="/insights/industry-trends" className="nav-link">Industry Trends</Link>
          <Link href="/insights/product-story" className="nav-link">Product Story</Link>
          <Link href="/insights/sustainability" className="nav-link">Sustainability</Link>
        </nav>

        <section className="section insights-content">
          {loading && <p>Loading insights...</p>}
          {error && <p className="text-error">{error}</p>}
          {!loading && !error && (
            <div dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </section>
      </div>
    </div>
  );
}
