'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t.projects.title}
            </h2>
            <p className="text-[var(--foreground-muted)] max-w-2xl">
              Select projects showcasing innovation in quantitative finance and financial technology.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.projects.items.map((project, index) => (
              <motion.article
                key={index}
                className={`group glow-card bento-item rounded-xl overflow-hidden bg-[var(--background-secondary)] flex flex-col ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Card Header with gradient */}
                <div className={`h-2 ${
                  project.featured
                    ? 'bg-gradient-to-r from-[var(--accent-gold)] via-[var(--accent-blue)] to-[var(--accent-gold)]'
                    : 'bg-gradient-to-r from-[var(--accent-gold)] to-[var(--accent-blue)]'
                }`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Organization Badge + Featured Badge */}
                  <div className="mb-3 flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono px-2 py-1 bg-[var(--background)] text-[var(--foreground-subtle)] rounded border border-[var(--border)]">
                      {project.organization}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-mono px-2 py-1 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] rounded border border-[var(--accent-gold)]/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold mb-3 group-hover:text-[var(--accent-gold)] transition-colors flex items-start gap-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4 flex-1">
                    {project.achievements.map((achievement, aIndex) => (
                      <div
                        key={aIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--foreground-muted)]">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link Button */}
                  {project.link && (
                    <div className="mb-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-gold)] text-[var(--background)] text-sm font-medium rounded-lg hover:bg-[var(--accent-gold-hover)] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.linkLabel || 'View Project'}
                      </a>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs font-mono px-2 py-1 bg-[var(--background)] text-[var(--accent-blue)] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
