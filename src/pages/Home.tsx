import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Sparkles,
  Code2,
  Cpu,
  MessageSquare,
  Workflow,
  Database,
  Cloud,
  ArrowRight,
  ChefHat,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard, SocialSidebar, SkillBadge } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { useLightning } from '@/contexts/LightningContext';

const skills = [
  { name: 'Claude API', level: 'expert' as const, icon: <Brain className="w-3.5 h-3.5" /> },
  { name: 'GPT-4 / OpenAI', level: 'expert' as const, icon: <Sparkles className="w-3.5 h-3.5" /> },
  { name: 'LangChain', level: 'expert' as const, icon: <Workflow className="w-3.5 h-3.5" /> },
  { name: 'RAG Systems', level: 'expert' as const, icon: <Database className="w-3.5 h-3.5" /> },
  { name: 'Fine-tuning', level: 'advanced' as const, icon: <Cpu className="w-3.5 h-3.5" /> },
  { name: 'Prompt Engineering', level: 'expert' as const, icon: <MessageSquare className="w-3.5 h-3.5" /> },
  { name: 'React', level: 'expert' as const, icon: <Code2 className="w-3.5 h-3.5" /> },
  { name: 'TypeScript', level: 'expert' as const, icon: <Code2 className="w-3.5 h-3.5" /> },
  { name: 'Angular', level: 'advanced' as const, icon: <Code2 className="w-3.5 h-3.5" /> },
  { name: 'Cloud Deploy', level: 'advanced' as const, icon: <Cloud className="w-3.5 h-3.5" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { isStriking, strikeCount } = useLightning();
  const [isRevealed, setIsRevealed] = useState(false);

  // After 2nd strike, reveal the face permanently
  useEffect(() => {
    if (strikeCount >= 2 && !isRevealed) {
      setIsRevealed(true);
    }
  }, [strikeCount, isRevealed]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[1fr_280px] gap-8">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="pt-8 lg:pt-16">
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-sm text-storm-300"
              >
                <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
                Available for AI consulting
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-storm-100">Hi, I'm </span>
                <span className="text-gradient-storm">David Aimi</span>
              </h1>

              {/* Face image that flashes with lightning, then stays visible after 3rd strike */}
              {!isRevealed ? (
                // Before reveal: flash with lightning (first 3 strikes)
                <AnimatePresence>
                  {isStriking && (
                    <motion.div
                      className="fixed left-[5%] sm:left-[10%] lg:left-[15%] top-1/3 -translate-y-1/2 z-30 pointer-events-none"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: [0, 1, 0], scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, times: [0, 0.3, 1], ease: 'easeInOut' }}
                    >
                      <div
                        className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full"
                        style={{
                          backgroundImage: 'url(/image.jpg)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                          WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                // After reveal: permanently visible with electric shock flicker on lightning
                <motion.div
                  className="fixed left-[5%] sm:left-[10%] lg:left-[15%] top-1/3 -translate-y-1/2 z-30 pointer-events-none"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: isStriking ? [0.6, 1, 0.9, 1, 0.6] : 0.6,
                    scale: isStriking ? [1, 1.02, 0.99, 1.01, 1] : 1,
                    x: isStriking ? [0, -2, 3, -1, 2, 0] : 0,
                    y: isStriking ? [0, 1, -2, 2, -1, 0] : 0,
                  }}
                  transition={{
                    opacity: isStriking
                      ? { duration: 0.4, times: [0, 0.2, 0.4, 0.7, 1], ease: 'easeOut' }
                      : { duration: 0.8 },
                    scale: isStriking
                      ? { duration: 0.4, times: [0, 0.2, 0.4, 0.7, 1], ease: 'easeOut' }
                      : { duration: 0.8 },
                    x: isStriking
                      ? { duration: 0.3, times: [0, 0.15, 0.3, 0.5, 0.75, 1], ease: 'easeOut' }
                      : { duration: 0 },
                    y: isStriking
                      ? { duration: 0.3, times: [0, 0.15, 0.3, 0.5, 0.75, 1], ease: 'easeOut' }
                      : { duration: 0 },
                  }}
                >
                  <motion.div
                    className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full"
                    animate={{
                      filter: isStriking
                        ? [
                            'brightness(1) contrast(1) blur(0px)',
                            'brightness(1.4) contrast(1.2) blur(1px)',
                            'brightness(1.1) contrast(1.1) blur(0px)',
                            'brightness(1.3) contrast(1.15) blur(0.5px)',
                            'brightness(1) contrast(1) blur(0px)',
                          ]
                        : 'brightness(1) contrast(1) blur(0px)',
                    }}
                    transition={{
                      filter: isStriking
                        ? { duration: 0.4, times: [0, 0.2, 0.4, 0.7, 1], ease: 'easeOut' }
                        : { duration: 0.3 },
                    }}
                    style={{
                      backgroundImage: 'url(/image.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      maskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
                    }}
                  />
                </motion.div>
              )}

              <p className="text-xl sm:text-2xl text-storm-300 max-w-2xl">
                Principal Engineer specializing in{' '}
                <span className="text-lightning-400">Large Language Models</span>,{' '}
                <span className="text-electric-400">Generative AI</span>, and{' '}
                <span className="text-forest-400">intelligent systems</span>.
              </p>

              <p className="text-storm-400 max-w-xl leading-relaxed">
                I build production-ready AI solutions that transform how businesses
                operate. From RAG pipelines to custom fine-tuned models, I turn
                complex AI challenges into elegant, scalable systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/portfolio">
                  <Button className="bg-lightning-400 hover:bg-lightning-300 text-storm-900 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                    View My Work
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-storm-600 text-storm-200 hover:bg-storm-700/50 px-6 py-2.5 rounded-xl">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={itemVariants}>
            <GlassCard variant="default" glow="lightning" className="p-8">
              <h2 className="text-2xl font-bold text-storm-100 mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6 text-lightning-400" />
                Core Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.section>

          {/* Quick Stats */}
          <motion.section variants={itemVariants}>
            <div className="grid sm:grid-cols-3 gap-4">
              <GlassCard variant="subtle" hover={false} className="text-center p-6">
                <motion.div
                  className="text-4xl font-bold text-gradient-storm mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', bounce: 0.5 }}
                >
                  50+
                </motion.div>
                <p className="text-storm-400 text-sm">AI Projects Delivered</p>
              </GlassCard>

              <GlassCard variant="subtle" hover={false} className="text-center p-6">
                <motion.div
                  className="text-4xl font-bold text-gradient-nature mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}
                >
                  5+
                </motion.div>
                <p className="text-storm-400 text-sm">Years in AI/ML</p>
              </GlassCard>

              <GlassCard variant="subtle" hover={false} className="text-center p-6">
                <motion.div
                  className="text-4xl font-bold text-electric-400 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                >
                  99%
                </motion.div>
                <p className="text-storm-400 text-sm">Client Satisfaction</p>
              </GlassCard>
            </div>
          </motion.section>

          {/* Featured Work Preview */}
          <motion.section variants={itemVariants}>
            <GlassCard variant="intense" glow="electric" className="p-8">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-storm-100 flex items-center gap-3">
                 
                  Active Projects
                </h2>
                <Link
                  to="/portfolio"
                  className="text-sm text-lightning-400 hover:text-lightning-300 transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-storm-100 flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-forest-400" />
                  FlavorBase.com
                </h3>
                <p className="text-lg text-storm-200 font-medium">
                  Master the Art of Flavor Pairing
                </p>
                <p className="text-storm-300 leading-relaxed">
                  Understand flavor. Create better food. Discover scientifically-backed
                  ingredient combinations, professional techniques, and culinary insights
                  trusted by chefs worldwide.
                </p>
                 <p className="text-storm-300 leading-relaxed">
               <a href="http://www.flavorbase.com">FlavorBase.com</a>
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-lightning-400/10 text-lightning-300 border border-lightning-400/20">
                    React
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-electric-400/10 text-electric-300 border border-electric-400/20">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-forest-400/10 text-forest-300 border border-forest-400/20">
                    Culinary AI
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.section>
        </motion.div>

        {/* Sidebar */}
        <aside className="lg:pt-24 space-y-6">
          <SocialSidebar />

          {/* Quick Contact Card */}
          <GlassCard variant="subtle" className="p-4">
            <h3 className="text-xs font-semibold text-storm-400 uppercase tracking-wider mb-3 px-2">
              Quick Contact
            </h3>
            <p className="text-sm text-storm-300 px-2 mb-3">
              Let's discuss your AI project
            </p>
            <Link to="/contact" className="block">
              <Button className="w-full bg-storm-700 hover:bg-storm-600 text-storm-100 rounded-xl text-sm">
                Send Message
              </Button>
            </Link>
          </GlassCard>
        </aside>
      </div>
    </div>
  );
}
