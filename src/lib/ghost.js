const GHOST_URL = import.meta.env.VITE_GHOST_URL
const CONTENT_API_KEY = import.meta.env.VITE_GHOST_CONTENT_API_KEY

const COMMON_HEADERS = {
  'Accept-Version': 'v5.0',
}

function contentUrl(path, params = {}) {
  const url = new URL(`${GHOST_URL}/ghost/api/content${path}`)
  url.searchParams.set('key', CONTENT_API_KEY)
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) url.searchParams.set(k, v)
  }
  return url.toString()
}

async function describeError(res) {
  try {
    const data = await res.clone().json()
    const message = data?.errors?.[0]?.message || data?.message
    if (message) return message
  } catch {
    // not JSON, fall through
  }
  try {
    const text = await res.text()
    if (text) return text
  } catch {
    // ignore
  }
  return `${res.status} ${res.statusText}`
}

export async function listPosts({ limit = 'all' } = {}) {
  const res = await fetch(
    contentUrl('/posts/', {
      limit,
      include: 'authors',
      fields: 'id,title,slug,excerpt,feature_image,feature_image_alt,published_at,reading_time',
      order: 'published_at desc',
    }),
    { headers: COMMON_HEADERS }
  )
  if (!res.ok) {
    const detail = await describeError(res)
    console.error('Ghost listPosts failed:', res.status, detail)
    throw new Error(`Ghost posts fetch failed: ${res.status} — ${detail}`)
  }
  const data = await res.json()
  return data.posts ?? []
}

export async function getPostBySlug(slug) {
  const res = await fetch(
    contentUrl(`/posts/slug/${encodeURIComponent(slug)}/`, {
      include: 'authors',
    }),
    { headers: COMMON_HEADERS }
  )
  if (res.status === 404) return null
  if (!res.ok) {
    const detail = await describeError(res)
    console.error('Ghost getPostBySlug failed:', res.status, detail)
    throw new Error(`Ghost post fetch failed: ${res.status} — ${detail}`)
  }
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
      labels: [],
      name: '',
    }),
  })
  if (!res.ok) {
    const detail = await describeError(res)
    console.error('Ghost subscribe failed:', res.status, detail)
    throw new Error(detail || `Subscribe failed: ${res.status}`)
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
