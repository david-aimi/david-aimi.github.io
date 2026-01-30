import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  level?: 'expert' | 'advanced' | 'intermediate';
  icon?: React.ReactNode;
}

export function SkillBadge({ name, level = 'advanced', icon }: SkillBadgeProps) {
  const levelStyles = {
    expert: 'border-lightning-400/30 bg-lightning-400/10 text-lightning-300',
    advanced: 'border-electric-400/30 bg-electric-400/10 text-electric-300',
    intermediate: 'border-forest-400/30 bg-forest-400/10 text-forest-300',
  };

  return (
    <motion.span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium',
        levelStyles[level]
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {name}
    </motion.span>
  );
}
