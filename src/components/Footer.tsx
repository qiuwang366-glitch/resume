'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-8 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Copyright */}
          <p className="text-sm text-[var(--foreground-subtle)]">
            {t.footer.copyright}
          </p>

          {/* Built with */}
          <p className="text-sm text-[var(--foreground-subtle)]">
            {t.footer.builtWith}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
