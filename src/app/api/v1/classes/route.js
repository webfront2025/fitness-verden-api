export const dynamic = 'force-dynamic'

export async function GET() {
  const upstream = process.env.UPSTREAM_API_BASE_URL
  if (!upstream) {
    return new Response(JSON.stringify([]), { status: 200, headers: { 'content-type': 'application/json' } })
  }
  const res = await fetch(`${upstream}/api/v1/classes`, { cache: 'no-store' })
  return new Response(await res.text(), { status: res.status, headers: { 'content-type': 'application/json' } })
}
