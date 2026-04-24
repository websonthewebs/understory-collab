const GHOST_URL = import.meta.env.VITE_GHOST_URL
const CONTENT_API_KEY = import.meta.env.VITE_GHOST_CONTENT_API_KEY

function contentUrl(path, params = {}) {
  const url = new URL(`${GHOST_URL}/ghost/api/content${path}`)
  url.searchParams.set('key', CONTENT_API_KEY)
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, v)
  }
  return url.toString()
}

export async function listPosts({ limit = 'all' } = {}) {
  const res = await fetch(
    contentUrl('/posts/', {
      limit,
      include: 'authors',
      fields: 'id,title,slug,excerpt,feature_image,feature_image_alt,published_at,reading_time',
      order: 'published_at desc',
    })
  )
  if (!res.ok) throw new Error(`Ghost posts fetch failed: ${res.status}`)
  const data = await res.json()
  return data.posts ?? []
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    contentUrl(`/posts/slug/${encodeURIComponent(slug)}/`, {
      include: 'authors',
    })
  )
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`Ghost post fetch failed: ${res.status}`)
  const data = await res.json()
  return data.posts?.[0] ?? null
}

export async function subscribe(email) {
  const res = await fetch(`${GHOST_URL}/members/api/send-magic-link/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      emailType: 'signup',
    }),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(text || `Subscribe failed: ${res.status}`)
  }
  return true
}

export function formatPublishedDate(isoDate) {
  if (!isoDate) return ''
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
