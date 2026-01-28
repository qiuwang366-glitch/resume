import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { Calendar, Tag, ArrowRight, ArrowLeft, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Market Analysis | Lu Liu',
  description: 'Macro insights and fixed income market analysis by Lu Liu',
};

export default function MarketAnalysisPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="border-b border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8 text-[var(--accent-gold)]" />
            <h1
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Market Analysis
            </h1>
          </div>
          <p className="text-[var(--foreground-muted)] text-lg">
            Macro insights and fixed income market perspectives
          </p>
        </div>
      </header>

      {/* Posts List */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[var(--foreground-muted)] text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group glow-card rounded-xl p-6 bg-[var(--background-secondary)] hover:bg-[var(--background-tertiary)] transition-colors"
              >
                <Link href={`/market-analysis/${post.slug}`}>
                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-[var(--foreground-subtle)] mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-[var(--accent-gold)] transition-colors flex items-start gap-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {post.title}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[var(--foreground-muted)] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <Tag className="w-4 h-4 text-[var(--foreground-subtle)]" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 bg-[var(--background)] text-[var(--accent-blue)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-[var(--foreground-subtle)]">
          <p>Views expressed are personal and do not constitute investment advice.</p>
        </div>
      </footer>
    </div>
  );
}
