import { motion } from 'framer-motion';
import {
  Camera,
  Mountain,
  Gamepad2,
  Music,
  Book,
  Code,
  Plane,
  Coffee,
  ChefHat,
} from 'lucide-react';
import { GlassCard } from '@/components/sections';

const hobbies = [
  {
    title: 'Cooking',
    description:
      'I love everything about cooking. Cooking fascinates me because it\'s one of the few things in this world that activates all of your senses. Art, science, entertainment -- its everythign all-in-one.',
    icon: ChefHat,
    color: 'lightning',
    images: ['/placeholder-photo-1.jpg', '/placeholder-photo-2.jpg'],
  },
  {
    title: 'Photography',
    description:
      'Capturing moments through the lens, with a focus on landscapes and street photography. Love experimenting with long exposures during storms.',
    icon: Camera,
    color: 'lightning',
    images: ['/placeholder-photo-1.jpg', '/placeholder-photo-2.jpg'],
  },
 
  
 

  {
    title: 'Tea Culture',
    description:
      'Appreciating the art of tea. From Pu-Erh to Oolong, I haven\'t met a tea I didn\'t like.',
    icon: Coffee,
    color: 'electric',
  },
];

const colorClasses = {
  lightning: {
    icon: 'text-lightning-400',
    bg: 'bg-lightning-400/10',
    border: 'border-lightning-400/20',
    glow: 'lightning' as const,
  },
  electric: {
    icon: 'text-electric-400',
    bg: 'bg-electric-400/10',
    border: 'border-electric-400/20',
    glow: 'electric' as const,
  },
  forest: {
    icon: 'text-forest-400',
    bg: 'bg-forest-400/10',
    border: 'border-forest-400/20',
    glow: 'forest' as const,
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hobbies() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Header */}
        <motion.header variants={itemVariants} className="text-center pt-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-storm-100 mb-4">
            Beyond the Code
          </h1>
          <p className="text-xl text-storm-300 max-w-2xl mx-auto">
            When I need a brain break from coding, AI, or technology.
          </p>
        </motion.header>

      

        {/* Hobbies Grid */}
        <motion.section variants={itemVariants}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const colors = colorClasses[hobby.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={hobby.title}
                  variants={itemVariants}
                  custom={index}
                >
                  <GlassCard
                    variant="default"
                    glow={colors.glow}
                    className="h-full p-6"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}
                      >
                        <hobby.icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-storm-100">
                        {hobby.title}
                      </h3>
                    </div>

                    <p className="text-storm-300 text-sm leading-relaxed mb-4">
                      {hobby.description}
                    </p>

                    {/* Stats if available */}
                    {'stats' in hobby && hobby.stats && (
                      <div className="grid grid-cols-3 gap-2 mt-4">
                        {Object.entries(hobby.stats).map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-2 rounded-lg bg-storm-800/50"
                          >
                            <div className={`text-lg font-bold ${colors.icon}`}>
                              {value}
                            </div>
                            <div className="text-xs text-storm-400 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Favorites if available */}
                    {'favorites' in hobby && hobby.favorites && (
                      <div className="mt-4 space-y-1">
                        <p className="text-xs text-storm-400 uppercase tracking-wider">
                          Favorites
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {hobby.favorites.map((fav) => (
                            <span
                              key={fav}
                              className={`px-2 py-1 text-xs rounded-full ${colors.bg} ${colors.border} border text-storm-200`}
                            >
                              {fav}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Current Read if available */}
                    {'currentRead' in hobby && hobby.currentRead && (
                      <div className="mt-4 p-3 rounded-lg bg-storm-800/50">
                        <p className="text-xs text-storm-400 uppercase tracking-wider mb-1">
                          Currently Reading
                        </p>
                        <p className="text-sm text-storm-200">{hobby.currentRead}</p>
                      </div>
                    )}

                    {/* Contributions if available */}
                    {'contributions' in hobby && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs text-storm-400">
                          GitHub Contributions:
                        </span>
                        <span className={`font-bold ${colors.icon}`}>
                          {hobby.contributions}
                        </span>
                      </div>
                    )}

                    {/* Countries if available */}
                    {'countries' in hobby && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="text-xs text-storm-400">
                          Countries Visited:
                        </span>
                        <span className={`font-bold ${colors.icon}`}>
                          {hobby.countries}
                        </span>
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section variants={itemVariants}>
          <GlassCard variant="intense" className="p-8">
            <h2 className="text-2xl font-bold text-storm-100 mb-6 flex items-center gap-3">
              <Camera className="w-6 h-6 text-lightning-400" />
              Photo Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="aspect-square rounded-xl bg-gradient-to-br from-storm-700 to-storm-800 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full flex items-center justify-center text-storm-500">
                    <Camera className="w-8 h-8" />
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-storm-400 mt-4 text-center">
              Photos coming soon...
            </p>
          </GlassCard>
        </motion.section>
      </motion.div>
    </div>
  );
}
