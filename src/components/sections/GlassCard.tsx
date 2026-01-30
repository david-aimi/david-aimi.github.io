import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'intense';
  hover?: boolean;
  glow?: 'lightning' | 'electric' | 'forest' | 'none';
}

export function GlassCard({
  children,
  className,
  variant = 'default',
  hover = true,
  glow = 'none',
}: GlassCardProps) {
  const variants = {
    default: 'glass',
    subtle: 'glass-subtle',
    intense: 'glass-intense',
  };

  const glowStyles = {
    lightning: 'hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]',
    electric: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]',
    forest: 'hover:shadow-[0_0_40px_rgba(74,222,128,0.25)]',
    none: '',
  };

  return (
    <motion.div
      className={cn(
        variants[variant],
        'rounded-2xl p-6',
        hover && 'transition-all duration-500',
        hover && 'hover:scale-[1.02]',
        glowStyles[glow],
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
