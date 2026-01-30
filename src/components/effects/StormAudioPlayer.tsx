import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Pause, Play } from 'lucide-react';

export function StormAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const startPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || hasInteracted) return;

    setHasInteracted(true);
    audio.volume = 0.5;
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      setIsPlaying(false);
    });
  }, [hasInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set initial volume
    audio.volume = 0.5;

    // Try autoplay immediately
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch(() => {
        // Autoplay blocked - wait for user interaction
        setIsPlaying(false);
      });
    }

    // Listen for any user interaction to start audio
    const handleInteraction = () => {
      startPlayback();
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [startPlayback]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/weather.mp3" loop preload="auto" />
      <motion.button
        onClick={togglePlay}
        className="fixed top-24 right-4 z-40 flex items-center gap-2 px-3 py-2 rounded-xl glass-subtle hover:bg-storm-700/50 transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <CloudRain className="w-4 h-4 text-lightning-400" />
        <span className="text-sm text-storm-200 font-medium">Storm</span>
        {isPlaying ? (
          <Pause className="w-4 h-4 text-storm-300" />
        ) : (
          <Play className="w-4 h-4 text-storm-300" />
        )}
      </motion.button>
    </>
  );
}
