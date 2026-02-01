import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLightning } from '@/contexts/LightningContext';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/hobbies', label: 'Hobbies' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isStriking } = useLightning();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass-subtle mx-4 mt-4 rounded-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Avatar */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-lightning-400/30 group-hover:border-lightning-400/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: isStriking ? [0.7, 1, 0.8, 1, 0.7] : 0.85,
                filter: isStriking
                  ? [
                      'brightness(1) contrast(1)',
                      'brightness(1.5) contrast(1.2)',
                      'brightness(1.1) contrast(1.1)',
                      'brightness(1.4) contrast(1.15)',
                      'brightness(1) contrast(1)',
                    ]
                  : 'brightness(1) contrast(1)',
              }}
              transition={{
                opacity: isStriking
                  ? { duration: 0.4, times: [0, 0.2, 0.4, 0.7, 1], ease: 'easeOut' }
                  : { duration: 0.3 },
                filter: isStriking
                  ? { duration: 0.4, times: [0, 0.2, 0.4, 0.7, 1], ease: 'easeOut' }
                  : { duration: 0.3 },
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: 'url(/image.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
            <span className="text-xl font-bold text-gradient-storm">
              David Aimi
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className="relative px-4 py-2">
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors ${
                      isActive ? 'text-lightning-400' : 'text-storm-200 hover:text-storm-100'
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-lightning-400/10 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-xl hover:bg-storm-700/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-storm-200" />
            ) : (
              <Menu className="w-5 h-5 text-storm-200" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-lightning-400/10 text-lightning-400'
                            : 'text-storm-200 hover:bg-storm-700/50 hover:text-storm-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
