import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
})

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function toPost(entry) {
  const f = entry.fields
  const imageUrl = f.image?.fields?.file?.url
  return {
    slug: f.slug,
    title: f.title,
    date: f.publishDate ? formatDate(f.publishDate) : '',
    tag: Array.isArray(f.tags) ? f.tags[0] : '',
    tags: f.tags ?? [],
    summary: f.summary ?? '',
    body: f.body,
    image: imageUrl ? `https:${imageUrl}` : null,
    imageAlt: f.image?.fields?.title ?? '',
  }
}

export async function getPosts() {
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: ['-fields.publishDate'],
  })
  return res.items.map(toPost)
}

export async function getPost(slug) {
  const res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })
  return res.items.length ? toPost(res.items[0]) : null
}
