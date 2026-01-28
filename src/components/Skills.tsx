'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Code2,
  Database,
  Brain,
  Layers,
  Award,
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const iconMap: Record<string, React.ElementType> = {
  chart: BarChart3,
  code: Code2,
  database: Database,
  brain: Brain,
  layers: Layers,
  award: Award,
};

// Bento grid layout patterns for 6 items
const bentoLayouts = [
  'md:col-span-2 md:row-span-2', // Large - Quantitative Finance
  'md:col-span-1 md:row-span-1', // Small - Programming
  'md:col-span-1 md:row-span-2', // Tall - Market Data
  'md:col-span-1 md:row-span-1', // Small - AI/ML
  'md:col-span-2 md:row-span-1', // Wide - Asset Classes
  'md:col-span-1 md:row-span-1', // Small - Certifications
];

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-24 bg-[var(--background-secondary)]">
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
              {t.skills.title}
            </h2>
            <p className="text-[var(--foreground-muted)] max-w-2xl">
              A comprehensive toolkit spanning quantitative finance, programming, and market analytics.
            </p>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4 snap-x snap-mandatory" style={{ width: 'max-content' }}>
              {t.skills.categories.map((category, index) => {
                const Icon = iconMap[category.icon] || BarChart3;

                return (
                  <motion.div
                    key={index}
                    className="glow-card bento-item rounded-xl p-5 bg-[var(--background)] w-[280px] flex-shrink-0 snap-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--border)]">
                        <Icon className="w-5 h-5 text-[var(--accent-gold)]" />
                      </div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group">
                          <div className="flex items-baseline justify-between">
                            <span className="font-mono text-sm font-medium text-[var(--foreground)]">
                              {item.name}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-xs text-[var(--foreground-subtle)] mt-0.5">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {/* Scroll hint */}
            <p className="text-xs text-[var(--foreground-subtle)] text-center mt-2">
              Swipe to explore more skills
            </p>
          </div>

          {/* Desktop Bento Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
            {t.skills.categories.map((category, index) => {
              const Icon = iconMap[category.icon] || BarChart3;
              const layoutClass = bentoLayouts[index] || 'md:col-span-1';

              return (
                <motion.div
                  key={index}
                  className={`glow-card bento-item rounded-xl p-6 bg-[var(--background)] ${layoutClass}`}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--border)]">
                      <Icon className="w-5 h-5 text-[var(--accent-gold)]" />
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="group">
                        <div className="flex items-baseline justify-between">
                          <span className="font-mono text-sm font-medium text-[var(--foreground)]">
                            {item.name}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-[var(--foreground-subtle)] mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
