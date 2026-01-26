'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Calendar } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-16"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t.experience.title}
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-gold)] via-[var(--border)] to-transparent md:-translate-x-1/2" />

            {t.experience.timeline.map((job, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 last:mb-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 w-3 h-3 rounded-full bg-[var(--accent-gold)] border-4 border-[var(--background)] ${
                    index % 2 === 0
                      ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2 -translate-x-1/2 md:translate-x-[calc(50%+0.5px)]'
                      : 'left-0 md:-translate-x-1/2 -translate-x-1/2 md:-translate-x-[calc(50%+0.5px)]'
                  }`}
                />

                {/* Content Card */}
                <div className="ml-6 md:ml-0 glow-card bento-item rounded-xl p-6 bg-[var(--background-secondary)]">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3
                        className="text-xl font-semibold mb-1"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-[var(--accent-blue)]">
                        <Building2 className="w-4 h-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    {job.companyShort && (
                      <span className="font-mono text-xs px-2 py-1 bg-[var(--background)] rounded text-[var(--foreground-subtle)]">
                        {job.companyShort}
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--foreground-subtle)] mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="font-mono">{job.period}</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  {job.metrics && job.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-3 mb-4">
                      {job.metrics.map((metric, mIndex) => (
                        <div
                          key={mIndex}
                          className="flex items-center gap-2 px-3 py-1.5 bg-[var(--background)] rounded-lg border border-[var(--border)]"
                        >
                          <span className="text-xs text-[var(--foreground-subtle)]">{metric.label}</span>
                          <span className="font-mono font-semibold text-sm text-[var(--accent-gold)]">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {job.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm text-[var(--foreground-muted)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--border-hover)] before:rounded-full"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {job.tags && job.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                      {job.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs font-mono px-2 py-1 bg-[var(--background)] text-[var(--foreground-subtle)] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
