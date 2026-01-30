import { motion } from 'framer-motion';
import {
  Brain,
  MessageSquare,
  Database,
  Workflow,
  ExternalLink,
  Github,
  TrendingUp,
} from 'lucide-react';
import { GlassCard } from '@/components/sections';
import { Badge } from '@/components/ui/badge';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const projects = [
  {
    title: 'Enterprise RAG Pipeline',
    description:
      'Built a scalable retrieval-augmented generation system processing 10M+ documents with sub-second query response times. Implemented hybrid search combining semantic embeddings with keyword matching.',
    tags: ['LangChain', 'Pinecone', 'Claude API', 'FastAPI'],
    metrics: { docs: '10M+', latency: '<1s', accuracy: '94%' },
    icon: Database,
    color: 'lightning',
    github: '#',
    demo: '#',
  },
  {
    title: 'Conversational AI Agent',
    description:
      'Developed a multi-turn conversational agent with tool-use capabilities for enterprise customer support. Reduced support ticket resolution time by 60%.',
    tags: ['GPT-4', 'Function Calling', 'Redis', 'WebSocket'],
    metrics: { reduction: '60%', conversations: '100K+', satisfaction: '4.8/5' },
    icon: MessageSquare,
    color: 'electric',
    github: '#',
    demo: '#',
  },
  {
    title: 'Custom LLM Fine-tuning',
    description:
      'Fine-tuned domain-specific models for legal document analysis. Achieved 40% improvement in accuracy over base models while reducing inference costs by 70%.',
    tags: ['LoRA', 'PyTorch', 'Hugging Face', 'AWS SageMaker'],
    metrics: { accuracy: '+40%', cost: '-70%', models: '12' },
    icon: Brain,
    color: 'forest',
    github: '#',
  },
  {
    title: 'AI Workflow Orchestration',
    description:
      'Designed and implemented an AI workflow orchestration platform enabling non-technical users to build complex AI pipelines through a visual interface.',
    tags: ['React', 'Python', 'LangGraph', 'PostgreSQL'],
    metrics: { users: '500+', pipelines: '2K+', uptime: '99.9%' },
    icon: Workflow,
    color: 'lightning',
    github: '#',
    demo: '#',
  },
];

const experienceData = [
  { year: '2020', projects: 5 },
  { year: '2021', projects: 12 },
  { year: '2022', projects: 18 },
  { year: '2023', projects: 28 },
  { year: '2024', projects: 42 },
  { year: '2025', projects: 55 },
];

const chartConfig = {
  projects: {
    label: 'Projects',
    color: '#38bdf8',
  },
};

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

export default function Portfolio() {
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
            Portfolio
          </h1>
          <p className="text-xl text-storm-300 max-w-2xl mx-auto">
            A collection of AI projects showcasing expertise in LLMs, RAG systems,
            and intelligent automation.
          </p>
        </motion.header>

        {/* Growth Chart */}
        <motion.section variants={itemVariants}>
          <GlassCard variant="default" glow="lightning" className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-lightning-400" />
              <h2 className="text-2xl font-bold text-storm-100">Project Growth</h2>
            </div>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={experienceData}>
                  <defs>
                    <linearGradient id="projectGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="year"
                    stroke="#6b7a94"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#6b7a94"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="projects"
                    stroke="#38bdf8"
                    strokeWidth={2}
                    fill="url(#projectGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </GlassCard>
        </motion.section>

        {/* Projects Grid */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-bold text-storm-100 mb-6">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  custom={index}
                >
                  <GlassCard
                    variant="intense"
                    glow={colors.glow}
                    className="h-full p-6"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                        <project.icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-storm-100 mb-1">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              className="text-storm-400 hover:text-storm-200 transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="text-storm-400 hover:text-storm-200 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-storm-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
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

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs border-storm-600 text-storm-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section variants={itemVariants}>
          <GlassCard variant="subtle" className="p-8">
            <h2 className="text-2xl font-bold text-storm-100 mb-6">
              Technologies I Work With
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                'Claude API',
                'OpenAI GPT-4',
                'LangChain',
                'LlamaIndex',
                'Pinecone',
                'Weaviate',
                'PyTorch',
                'Hugging Face',
                'FastAPI',
                'React',
                'PostgreSQL',
                'Redis',
                'Docker',
                'Kubernetes',
                'AWS',
                'GCP',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="p-3 rounded-xl bg-storm-800/50 text-center text-sm text-storm-200 hover:bg-storm-700/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>
      </motion.div>
    </div>
  );
}
