'use client';

import { motion } from 'framer-motion';
import { Download, ArrowDown, Mail } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--background-secondary)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground-subtle) 1px, transparent 1px),
                           linear-gradient(90deg, var(--foreground-subtle) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Pre-title */}
          <motion.p
            className="text-sm font-mono text-[var(--accent-gold)] mb-4 tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Portfolio Management & Quantitative Strategy
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.hero.name}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-2xl md:text-3xl text-[var(--foreground-muted)] mb-2"
            style={{ fontFamily: 'var(--font-serif)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t.hero.title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-[var(--accent-blue)] font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-[var(--foreground-muted)] text-lg leading-relaxed mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t.hero.description}
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {t.about.highlights.map((metric, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-xl md:text-3xl font-bold font-mono text-[var(--foreground)]">
                  {metric.value}
                </p>
                <p className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href={t.hero.resumeFile}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-gold)] text-[var(--background)] font-medium rounded-lg hover:bg-[var(--accent-gold-hover)] transition-colors"
            >
              <Download className="w-4 h-4" />
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--foreground)] rounded-lg hover:border-[var(--border-hover)] hover:bg-[var(--background-secondary)] transition-all"
            >
              <Mail className="w-4 h-4" />
              {t.contact.cta}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a href="#about" className="text-[var(--foreground-subtle)] hover:text-[var(--foreground-muted)] transition-colors">
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
