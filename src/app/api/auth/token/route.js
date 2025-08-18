export const dynamic = 'force-dynamic'

export async function POST(req) {
  const upstream = process.env.UPSTREAM_API_BASE_URL
  if (!upstream) {
    return new Response(JSON.stringify({ error: 'UPSTREAM_API_BASE_URL not set' }), { status: 500, headers: { 'content-type': 'application/json' } })
  }
  const res = await fetch(`${upstream}/auth/token`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: await req.text(),
    cache: 'no-store'
  })
  return new Response(await res.text(), { status: res.status, headers: { 'content-type': 'application/json' } })
}
