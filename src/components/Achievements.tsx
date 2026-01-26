'use client';

import { motion } from 'framer-motion';
import { Trophy, Medal, Brain, Lightbulb } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  medal: Medal,
  brain: Brain,
  lightbulb: Lightbulb,
};

export default function Achievements() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-[var(--background-secondary)]">
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
            {t.achievements.title}
          </h2>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.achievements.items.map((achievement, index) => {
              const Icon = iconMap[achievement.icon] || Trophy;

              return (
                <motion.div
                  key={index}
                  className="glow-card bento-item rounded-xl p-6 bg-[var(--background)] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--background-secondary)] border border-[var(--border)] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[var(--accent-gold)]" />
                  </div>

                  {/* Year */}
                  <span className="font-mono text-sm text-[var(--accent-blue)]">
                    {achievement.year}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mt-2 mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
