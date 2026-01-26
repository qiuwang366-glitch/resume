'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-12"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t.about.title}
          </h2>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2 space-y-6">
              {t.about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-[var(--foreground-muted)] text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats Card */}
            <motion.div
              className="glow-card rounded-xl p-6 bg-[var(--background)]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-sm font-mono text-[var(--foreground-subtle)] uppercase tracking-wider mb-6">
                Key Metrics
              </h3>
              <div className="space-y-6">
                {t.about.highlights.map((metric, index) => (
                  <div key={index} className="flex justify-between items-baseline border-b border-[var(--border)] pb-4 last:border-0 last:pb-0">
                    <span className="text-[var(--foreground-muted)]">{metric.label}</span>
                    <span className="text-xl font-mono font-bold text-[var(--accent-gold)]">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
