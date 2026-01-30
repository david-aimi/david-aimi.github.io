import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface LightningContextType {
  isStriking: boolean;
  strikeCount: number;
  triggerStrike: () => void;
}

const LightningContext = createContext<LightningContextType | null>(null);

export function LightningProvider({ children }: { children: ReactNode }) {
  const [isStriking, setIsStriking] = useState(false);
  const [strikeCount, setStrikeCount] = useState(0);

  const triggerStrike = useCallback(() => {
    if (isStriking) return; // Prevent re-triggering while animation is running
    setIsStriking(true);
    setStrikeCount((prev) => prev + 1);
    setTimeout(() => setIsStriking(false), 1200);
  }, [isStriking]);

  return (
    <LightningContext.Provider value={{ isStriking, strikeCount, triggerStrike }}>
      {children}
    </LightningContext.Provider>
  );
}

export function useLightning() {
  const context = useContext(LightningContext);
  if (!context) {
    throw new Error('useLightning must be used within a LightningProvider');
  }
  return context;
}
