export const dynamic = 'force-dynamic'

async function forward(req, { params }, method) {
  const { userId, classId } = await params
  const upstream = process.env.UPSTREAM_API_BASE_URL
  if (!upstream) {
    return new Response(JSON.stringify({ error: 'UPSTREAM_API_BASE_URL not set' }), { status: 500, headers: { 'content-type': 'application/json' } })
  }
  const token = req.headers.get('authorization') || ''
  const res = await fetch(`${upstream}/api/v1/users/${userId}/classes/${classId}`, {
    method,
    headers: { 'content-type': 'application/json', authorization: token },
    cache: 'no-store',
    body: method === 'POST' ? await req.text() : undefined,
  })
  return new Response(await res.text(), { status: res.status, headers: { 'content-type': 'application/json' } })
}

export async function POST(req, ctx) { return forward(req, ctx, 'POST') }
export async function DELETE(req, ctx) { return forward(req, ctx, 'DELETE') }
