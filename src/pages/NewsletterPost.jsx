import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostBySlug, formatPublishedDate } from '../lib/ghost'
import SubscribeForm from '../components/SubscribeForm'
import './NewsletterPost.css'

function NewsletterPost() {
  const { slug } = useParams()
  return <NewsletterPostContent key={slug} slug={slug} />
}

function NewsletterPostContent({ slug }) {
  const [post, setPost] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    getPostBySlug(slug)
      .then((data) => {
        if (cancelled) return
        if (!data) {
          setStatus('not-found')
          return
        }
        setPost(data)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  if (status === 'loading') {
    return (
      <div className="newsletter-post">
        <section className="section-container newsletter-post__status-wrap">
          <p className="newsletter-post__status">Loading…</p>
        </section>
      </div>
    )
  }

  if (status === 'not-found') {
    return (
      <div className="newsletter-post">
        <section className="section-container newsletter-post__status-wrap">
          <h1>Post not found</h1>
          <p>
            <Link to="/newsletter">Back to newsletter</Link>
          </p>
        </section>
      </div>
    )
  }

  if (status === 'error' || !post) {
    return (
      <div className="newsletter-post">
        <section className="section-container newsletter-post__status-wrap">
          <p className="newsletter-post__status newsletter-post__status--error">
            We couldn't load this post right now.
          </p>
          <p>
            <Link to="/newsletter">Back to newsletter</Link>
          </p>
        </section>
      </div>
    )
  }

  const author = post.authors?.[0]

  return (
    <div className="newsletter-post">
      <article>
        <header className="newsletter-post__header">
          <div className="section-container">
            <p className="newsletter-post__breadcrumb">
              <Link to="/newsletter">← Newsletter</Link>
            </p>
            <h1 className="newsletter-post__title">{post.title}</h1>
            <p className="newsletter-post__meta">
              {author?.name && <span>{author.name}</span>}
              {author?.name && <span aria-hidden="true"> · </span>}
              <time dateTime={post.published_at}>
                {formatPublishedDate(post.published_at)}
              </time>
              {post.reading_time ? (
                <>
                  <span aria-hidden="true"> · </span>
                  <span>{post.reading_time} min read</span>
                </>
              ) : null}
            </p>
          </div>
        </header>

        {post.feature_image && (
          <div className="newsletter-post__feature-wrap">
            <img
              src={post.feature_image}
              alt={post.feature_image_alt || ''}
              className="newsletter-post__feature"
            />
          </div>
        )}

        <div className="section-container">
          <div
            className="newsletter-post__body"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      <section className="newsletter-post__subscribe" aria-label="Subscribe">
        <div className="section-container">
          <SubscribeForm
            heading="Enjoyed this post?"
            description="Subscribe to get new posts in your inbox."
          />
        </div>
      </section>
    </div>
  )
}

export default NewsletterPost
