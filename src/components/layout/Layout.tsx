import type { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { StormBackground, RainEffect, LightningEffect, StormAudioPlayer } from '../effects';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Background Effects */}
      <StormBackground />
      <RainEffect intensity={30} />
      <LightningEffect />

      {/* Navigation */}
      <Navigation />

      {/* Storm Audio Player */}
      <StormAudioPlayer />

      {/* Main Content */}
      <main className="relative z-20 pt-24 pb-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-storm-700/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-storm-400 text-sm">
            {new Date().getFullYear()} David Aimi. Crafted with storms and code.
          </p>
        </div>
      </footer>
    </div>
  );
}
