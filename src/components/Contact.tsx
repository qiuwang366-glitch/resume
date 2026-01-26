'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Title */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {t.contact.title}
          </h2>

          <p className="text-[var(--foreground-muted)] text-lg mb-10">
            Interested in discussing investment strategies, quantitative approaches, or collaboration opportunities? I'd love to connect.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {/* Email */}
            <motion.a
              href={`mailto:${t.contact.email}`}
              className="glow-card bento-item rounded-xl p-6 bg-[var(--background)] flex items-center gap-4 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--background-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors">
                <Mail className="w-5 h-5 text-[var(--accent-gold)]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="font-mono text-sm text-[var(--foreground)] group-hover:text-[var(--accent-blue)] transition-colors">
                  {t.contact.email}
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${t.contact.phone.replace(/[^+\d]/g, '')}`}
              className="glow-card bento-item rounded-xl p-6 bg-[var(--background)] flex items-center gap-4 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--background-secondary)] border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent-gold)] transition-colors">
                <Phone className="w-5 h-5 text-[var(--accent-gold)]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[var(--foreground-subtle)] uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="font-mono text-sm text-[var(--foreground)] group-hover:text-[var(--accent-blue)] transition-colors">
                  {t.contact.phone}
                </p>
              </div>
            </motion.a>
          </div>

          {/* CTA Button */}
          <motion.a
            href={`mailto:${t.contact.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent-gold)] text-[var(--background)] font-medium rounded-lg hover:bg-[var(--accent-gold-hover)] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Send className="w-4 h-4" />
            {t.contact.cta}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
