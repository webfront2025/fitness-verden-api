export async function GET() {
  const upstreamBase = process.env.UPSTREAM_API_URL || process.env.NEXT_PUBLIC_API_URL;
  if (!upstreamBase) {
    return new Response(JSON.stringify({ error: "Missing UPSTREAM_API_URL" }), { status: 500 });
  }
  const url = `${upstreamBase.replace(/\/+$/, "")}/classes`;
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Upstream error ${res.status}` }), { status: 502 });
    }
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return new Response(JSON.stringify({ error: "Upstream fetch failed" }), { status: 502 });
  }
}


