import { NextResponse } from 'next/server';

const DOMAIN = 'temp-website-lake.vercel.app';
const CMS_RENDER_BASE = 'https://dev-api.topgeo.ai/cms/render';

export async function GET(request: Request, context: { params: { slug?: string[] } }) {
  const slugPath = context.params.slug?.join('/') ?? '';
  const targetUrl = `${CMS_RENDER_BASE}/${DOMAIN}${slugPath ? `/${slugPath}` : '/'}`;

  const res = await fetch(targetUrl, {
    headers: {
      accept: 'text/html',
    },
  });

  if (!res.ok) {
    return new NextResponse(
      JSON.stringify({ message: `CMS render failed: ${res.status}` }),
      { status: res.status, headers: { 'content-type': 'application/json' } }
    );
  }

  const text = await res.text();
  return new NextResponse(text, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}
