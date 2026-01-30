import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightningBolt {
  id: number;
  path: string;
  left: number;
}

export function LightningEffect() {
  const [bolts, setBolts] = useState<LightningBolt[]>([]);

  const generatePath = () => {
    const segments = 5 + Math.floor(Math.random() * 3);
    let path = 'M 50 0';
    let x = 50;
    let y = 0;

    for (let i = 0; i < segments; i++) {
      const dx = (Math.random() - 0.5) * 40;
      const dy = 100 / segments;
      x = Math.max(10, Math.min(90, x + dx));
      y += dy;
      path += ` L ${x} ${y}`;
    }

    return path;
  };

  useEffect(() => {
    const createBolt = () => {
      const newBolt: LightningBolt = {
        id: Date.now(),
        path: generatePath(),
        left: 10 + Math.random() * 80,
      };

      setBolts((prev) => [...prev, newBolt]);

      setTimeout(() => {
        setBolts((prev) => prev.filter((b) => b.id !== newBolt.id));
      }, 500);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        createBolt();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <AnimatePresence>
        {bolts.map((bolt) => (
          <motion.div
            key={bolt.id}
            className="absolute top-0"
            style={{ left: `${bolt.left}%`, width: '100px', height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.3, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, times: [0, 0.1, 0.2, 0.3, 1] }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-1/2"
              preserveAspectRatio="none"
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d={bolt.path}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                filter="url(#glow)"
                className="opacity-80"
              />
              <path
                d={bolt.path}
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Flash overlay */}
      <AnimatePresence>
        {bolts.length > 0 && (
          <motion.div
            className="absolute inset-0 bg-lightning-400/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
