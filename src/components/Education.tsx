'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Education() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-[var(--background)]">
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
            {t.education.title}
          </h2>

          {/* Education Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.education.items.map((edu, index) => (
              <motion.div
                key={index}
                className="glow-card bento-item rounded-xl p-6 bg-[var(--background-secondary)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Icon */}
                <div className="w-10 h-10 mb-4 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[var(--accent-gold)]" />
                </div>

                {/* School */}
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {edu.school}
                </h3>

                {/* Degree */}
                <p className="text-[var(--accent-blue)] font-medium mb-3">
                  {edu.degree}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-sm text-[var(--foreground-subtle)] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                </div>

                {/* GPA */}
                {edu.gpa && (
                  <div className="mb-3 p-2 bg-[var(--background)] rounded-lg border border-[var(--border)]">
                    <span className="font-mono text-sm text-[var(--accent-gold)]">
                      {edu.gpa}
                    </span>
                  </div>
                )}

                {/* Highlights */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm text-[var(--foreground-muted)] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[var(--border-hover)] before:rounded-full"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
