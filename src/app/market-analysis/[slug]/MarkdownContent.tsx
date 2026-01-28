'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

export default function MarkdownContent({ content }: Props) {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1
              className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-[var(--foreground)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-[var(--foreground)] border-b border-[var(--border)] pb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-[var(--foreground)]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-[var(--foreground-muted)] leading-relaxed mb-6">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-[var(--foreground-muted)]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-[var(--foreground-muted)]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[var(--foreground)]">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[var(--accent-gold)]">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[var(--accent-gold)] pl-4 py-2 my-6 bg-[var(--background-secondary)] rounded-r-lg italic text-[var(--foreground-muted)]">
              {children}
            </blockquote>
          ),
          code: ({ className, children }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="font-mono text-sm bg-[var(--background-secondary)] text-[var(--accent-blue)] px-1.5 py-0.5 rounded">
                  {children}
                </code>
              );
            }
            return (
              <code className="font-mono text-sm">{children}</code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-xl p-4 overflow-x-auto mb-6 font-mono text-sm">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[var(--accent-blue)] hover:text-[var(--accent-blue-hover)] underline underline-offset-2 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          hr: () => (
            <hr className="h-px my-8 bg-gradient-to-r from-transparent via-[var(--border)] to-transparent border-0" />
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[var(--border)] rounded-lg overflow-hidden">
                {children}
              </table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-[var(--background-secondary)]">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border border-[var(--border)] px-4 py-2 text-left font-semibold text-[var(--foreground)]">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-[var(--border)] px-4 py-2 text-[var(--foreground-muted)]">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
