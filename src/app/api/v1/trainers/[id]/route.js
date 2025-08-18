export const dynamic = 'force-dynamic'

export async function GET(_req, { params }) {
  const { id } = await params
  const upstream = process.env.UPSTREAM_API_BASE_URL
  if (!upstream) {
    return new Response(JSON.stringify({ error: 'UPSTREAM_API_BASE_URL not set' }), { status: 500, headers: { 'content-type': 'application/json' } })
  }
  const res = await fetch(`${upstream}/api/v1/trainers/${id}`, { cache: 'no-store' })
  return new Response(await res.text(), { status: res.status, headers: { 'content-type': 'application/json' } })
}
