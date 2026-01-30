import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard, SocialSidebar, SkillBadge } from '@/components/sections';
import { Button } from '@/components/ui/button';

const skills = [
  { name: 'Claude API', level: 'expert' as const, icon: <Brain className="w-3.5 h-3.5" /> },
  { name: 'GPT-4 / OpenAI', level: 'expert' as const, icon: <Sparkles className="w-3.5 h-3.5" /> },
  { name: 'LangChain', level: 'expert' as const, icon: <Workflow className="w-3.5 h-3.5" /> },
  { name: 'RAG Systems', level: 'expert' as const, icon: <Database className="w-3.5 h-3.5" /> },
  { name: 'Fine-tuning', level: 'advanced' as const, icon: <Cpu className="w-3.5 h-3.5" /> },
  { name: 'Prompt Engineering', level: 'expert' as const, icon: <MessageSquare className="w-3.5 h-3.5" /> },
  { name: 'Python', level: 'expert' as const, icon: <Code2 className="w-3.5 h-3.5" /> },
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

              <p className="text-xl sm:text-2xl text-storm-300 max-w-2xl">
                AI Engineer specializing in{' '}
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
                  <Sparkles className="w-6 h-6 text-electric-400" />
                  Featured Project
                </h2>
                <Link
                  to="/portfolio"
                  className="text-sm text-lightning-400 hover:text-lightning-300 transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-storm-100">
                  Enterprise RAG Pipeline
                </h3>
                <p className="text-storm-300 leading-relaxed">
                  Built a scalable retrieval-augmented generation system processing
                  10M+ documents with sub-second query response times. Implemented
                  hybrid search combining semantic embeddings with keyword matching
                  for optimal relevance.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-lightning-400/10 text-lightning-300 border border-lightning-400/20">
                    LangChain
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-electric-400/10 text-electric-300 border border-electric-400/20">
                    Pinecone
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-forest-400/10 text-forest-300 border border-forest-400/20">
                    Claude API
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
