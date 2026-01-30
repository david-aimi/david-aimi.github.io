import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RainDrop {
  id: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export function RainEffect({ intensity = 50 }: { intensity?: number }) {
  const [drops, setDrops] = useState<RainDrop[]>([]);

  useEffect(() => {
    const newDrops: RainDrop[] = [];
    for (let i = 0; i < intensity; i++) {
      newDrops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 1 + Math.random() * 1,
        opacity: 0.1 + Math.random() * 0.3,
      });
    }
    setDrops(newDrops);
  }, [intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-px bg-gradient-to-b from-transparent via-lightning-400/30 to-transparent"
          style={{
            left: `${drop.left}%`,
            height: '80px',
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, drop.opacity, drop.opacity, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
