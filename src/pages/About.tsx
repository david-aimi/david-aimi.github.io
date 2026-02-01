import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  Briefcase,
  GraduationCap,
  ChefHat,
  Cpu,
  Building2,
  Rocket,
  Award,
  MapPin,
  Mail,
  Linkedin,
  Sparkles,
  CodeXml,
  Handshake,
} from 'lucide-react';
import { GlassCard } from '@/components/sections';
import { Badge } from '@/components/ui/badge';
import { useLightning } from '@/contexts/LightningContext';

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

const timeline = [
  {
    period: '2022 – Present',
    role: 'Architecture Senior Advisor — UI Lead & AI Enablement',
    company: 'Cigna Healthcare',
    description: 'Spearheading enterprise AI enablement with Claude, GPT, and agentic AI platforms. Authoring LLM governance policies and leading scalable Angular applications serving millions.',
    icon: Brain,
    color: 'lightning',
  },
  {
    period: '2021 – 2022',
    role: 'Software Engineering Senior Advisor',
    company: 'Cigna Healthcare',
    description: 'Strategic technical leadership across global teams in US, UK, South Korea, and China. Architecting event-driven systems and migrating monoliths to modular architecture.',
    icon: Building2,
    color: 'electric',
  },
  {
    period: '2021',
    role: 'Principal Engineer — Consultant',
    company: 'Harley-Davidson (via Ntelicor/BCG)',
    description: 'Principal engineer for LiveWire.com launch — Harley-Davidson\'s electric motorcycle brand. Architected NestJS APIs with Stripe, Plaid integration in Azure Cloud.',
    icon: Rocket,
    color: 'forest',
  },
  {
    period: '2012 – 2021',
    role: 'App Dev Advisor — Senior UI Developer',
    company: 'Cigna Healthcare',
    description: 'Pioneered Angular adoption from v1 to v2+. Built enterprise solutions for DoD and healthcare clients. Mentored UI/UX teams across waterfall and agile methodologies.',
    icon: Code2,
    color: 'lightning',
  },
  {
    period: '2007 – 2012',
    role: 'Senior UI Developer & Architect',
    company: 'Various (Travelers, A&E Television, iiCREATiVE)',
    description: 'Delivered high-profile projects for History Channel, Criss Angel Mindfreak, The Sopranos. Clients included Aetna, Prudential, LeGrand, CertainTeed.',
    icon: Award,
    color: 'electric',
  },
  {
    period: '2003 – 2007',
    role: 'Web Developer & E-commerce Specialist',
    company: 'Web Solutions, Collectibles Online, Bizatomic',
    description: 'Early career building e-commerce platforms and web solutions. Established foundation in full-stack development and user experience design.',
    icon: GraduationCap,
    color: 'forest',
  },
];

const expertise = [
  { category: 'AI & LLM', skills: ['Claude 3.x–4.5 Opus', 'GPT-5 Codex', 'Cursor AI', 'Devin AI', 'RAG', 'MCP', 'Agentic AI', 'Sudolang'] },
  { category: 'Frontend', skills: ['Angular 1–20+', 'React', 'TypeScript', 'NgRx', 'RxJS', 'Signals', 'HTML5', 'SASS'] },
  { category: 'Backend & APIs', skills: ['NestJS', 'Node.js', 'Express', 'Java', 'Spring Boot', 'REST', 'GraphQL'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'] },
];

const certifications = [
  'Gen AI Ops Certified',
  'SAFe Agile Certified',
  'Dale Carnegie Leadership',
];

const colorClasses = {
  lightning: {
    bg: 'bg-lightning-400/10',
    border: 'border-lightning-400/30',
    text: 'text-lightning-400',
    glow: 'lightning' as const,
  },
  electric: {
    bg: 'bg-electric-400/10',
    border: 'border-electric-400/30',
    text: 'text-electric-400',
    glow: 'electric' as const,
  },
  forest: {
    bg: 'bg-forest-400/10',
    border: 'border-forest-400/30',
    text: 'text-forest-400',
    glow: 'forest' as const,
  },
};

export default function About() {
  const { isStriking } = useLightning();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="pt-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Avatar */}
            <motion.div
              className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-lightning-400/30 flex-shrink-0"
              animate={{
                opacity: isStriking ? [0.8, 1, 0.9, 1, 0.8] : 1,
                filter: isStriking
                  ? [
                      'brightness(1) contrast(1)',
                      'brightness(1.4) contrast(1.2)',
                      'brightness(1.1) contrast(1.1)',
                      'brightness(1.3) contrast(1.15)',
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

            {/* Intro Text */}
            <div className="text-center lg:text-left space-y-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-sm text-storm-300"
              >
                <Sparkles className="w-4 h-4 text-lightning-400" />
                20+ Years of Engineering Excellence
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="text-storm-100">About </span>
                <span className="text-gradient-storm">David Aimi</span>
              </h1>

              <p className="text-xl text-storm-200 font-medium">
                Principal UI Engineer & AI Architect
              </p>

              <p className="text-storm-300 leading-relaxed max-w-2xl">
                I specialize in Large Language Models, Generative AI, and intelligent systems.
                I build production-ready AI solutions that transform how businesses operate — from
                RAG pipelines to custom fine-tuned models, turning complex AI challenges into
                elegant, scalable systems.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <div className="flex items-center gap-2 text-storm-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>Durham, Connecticut</span>
                </div>
                <a href="mailto:davidaimi@gmail.com" className="flex items-center gap-2 text-storm-400 hover:text-lightning-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span>davidaimi@gmail.com</span>
                </a>
                <a href="https://linkedin.com/in/davidaimi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-storm-400 hover:text-lightning-400 transition-colors text-sm">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/davidaimi</span>
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Who I Am Section */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <CodeXml className="w-6 h-6 text-lightning-400" />
            <ChefHat className="w-6 h-6 text-forest-400" />
            <h2 className="text-2xl font-bold text-storm-100">Who I Am</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* The Builder */}
            <GlassCard variant="subtle" glow="lightning" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-lightning-400/10 border border-lightning-400/30">
                  <Code2 className="w-5 h-5 text-lightning-400" />
                </div>
                <h3 className="text-lg font-semibold text-storm-100">The Builder</h3>
              </div>
              <p className="text-storm-300 leading-relaxed mb-4">
                I'm a guy who <span className="text-lightning-300 font-medium">lives and breathes building things</span>.
                There's something magical about taking an idea and watching it come to life through elegant, well-crafted code.
              </p>
              <div className="p-3 rounded-lg bg-storm-800/50 border-l-2 border-lightning-400">
                <p className="text-storm-400 text-sm italic">
                  "Whether it's architecting enterprise-scale applications or building a pizza dough calculator, I find deep satisfaction in designing and building."
                </p>
              </div>
            </GlassCard>

            {/* The Chef */}
            <GlassCard variant="subtle" glow="forest" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-forest-400/10 border border-forest-400/30">
                  <ChefHat className="w-5 h-5 text-forest-400" />
                </div>
                <h3 className="text-lg font-semibold text-storm-100">The Chef</h3>
              </div>
              <p className="text-storm-300 leading-relaxed mb-4">
                They say <span className="text-forest-300 font-medium">do what you like, not what you love</span> for your career.
                When I step away from the screen, you'll find me in the kitchen — cooking is my other passion.
              </p>
              <div className="p-3 rounded-lg bg-storm-800/50 border-l-2 border-forest-400">
                <p className="text-storm-400 text-sm italic">
                  "There's a beautiful parallel between coding and cooking: both require creativity,
                  precision, and the patience to perfect your craft."
                </p>
              </div>
            </GlassCard>

            {/* The Leader */}
            <GlassCard variant="subtle" glow="electric" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-electric-400/10 border border-electric-400/30">
                  <Handshake className="w-5 h-5 text-electric-400" />
                </div>
                <h3 className="text-lg font-semibold text-storm-100">The Leader</h3>
              </div>
              <p className="text-storm-300 leading-relaxed mb-4">
                <span className="text-electric-300 font-medium">20+ years in tech</span> have taught me that
                the best solutions come from understanding people, not just code.
              </p>
              <div className="p-3 rounded-lg bg-storm-800/50 border-l-2 border-electric-400">
                <p className="text-storm-400 text-sm italic">
                  "I've led teams across continents, mentored engineers at every level, and helped
                  organizations navigate the exciting (and sometimes turbulent) waters of digital transformation."
                </p>
              </div>
            </GlassCard>

            {/* The AI Pioneer */}
            <GlassCard variant="subtle" glow="lightning" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-lightning-400/10 border border-lightning-400/30">
                  <Brain className="w-5 h-5 text-lightning-400" />
                </div>
                <h3 className="text-lg font-semibold text-storm-100">An AI Pioneer</h3>
              </div>
              <p className="text-storm-300 leading-relaxed mb-4">
                Today, I'm focused on the <span className="text-lightning-300 font-medium">frontier of AI</span> —
                helping enterprises harness the power of large language models responsibly and effectively.
              </p>
              <div className="p-3 rounded-lg bg-storm-800/50 border-l-2 border-lightning-400">
                <p className="text-storm-400 text-sm italic">
                  "It's the most exciting time to be in tech, I've finally been able to move at the speed my brain operates."
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Identity Tags */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-subtle"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-4 h-4 text-lightning-400" />
              <span className="text-storm-200 text-sm font-medium">Coder</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-subtle"
              whileHover={{ scale: 1.05 }}
            >
              <ChefHat className="w-4 h-4 text-forest-400" />
              <span className="text-storm-200 text-sm font-medium">Chef</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-subtle"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-4 h-4 text-electric-400" />
              <span className="text-storm-200 text-sm font-medium">AI Enthusiast</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-subtle"
              whileHover={{ scale: 1.05 }}
            >
              <Briefcase className="w-4 h-4 text-lightning-400" />
              <span className="text-storm-200 text-sm font-medium">Leader</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-6 h-6 text-lightning-400" />
            <h2 className="text-2xl font-bold text-storm-100">Technical Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {expertise.map((category) => (
              <GlassCard key={category.category} variant="subtle" className="p-5">
                <h3 className="text-lg font-semibold text-storm-100 mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs border-storm-600 text-storm-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-forest-400" />
            <h2 className="text-2xl font-bold text-storm-100">Certifications</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert}
                className="px-4 py-3 rounded-xl glass-subtle flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <Award className="w-4 h-4 text-forest-400" />
                <span className="text-storm-200">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Career Timeline */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-6 h-6 text-electric-400" />
            <h2 className="text-2xl font-bold text-storm-100">Career Journey</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-lightning-400/50 via-electric-400/50 to-forest-400/50 hidden md:block" />

            <div className="space-y-6">
              {timeline.map((item, index) => {
                const colors = colorClasses[item.color as keyof typeof colorClasses];
                return (
                  <motion.div
                    key={item.period}
                    variants={itemVariants}
                    custom={index}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-4 w-5 h-5 rounded-full ${colors.bg} border-2 ${colors.border} hidden md:flex items-center justify-center z-10`}>
                      <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')}`} />
                    </div>

                    <div className="md:ml-16">
                      <GlassCard variant="subtle" glow={colors.glow} className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                          <div className={`p-2 rounded-lg ${colors.bg} ${colors.border} border w-fit`}>
                            <item.icon className={`w-5 h-5 ${colors.text}`} />
                          </div>
                          <div>
                            <span className={`text-sm font-medium ${colors.text}`}>{item.period}</span>
                            <h3 className="text-lg font-semibold text-storm-100">{item.role}</h3>
                            <p className="text-storm-400 text-sm">{item.company}</p>
                          </div>
                        </div>
                        <p className="text-storm-300 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </GlassCard>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Cloud & Leadership */}
        <motion.section variants={itemVariants}>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard variant="subtle" glow="electric" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-electric-400" />
                <h3 className="text-xl font-bold text-storm-100">UI Architecture</h3>
              </div>
              <p className="text-storm-300 text-sm leading-relaxed">
                Crafting profound user interfaces that delight and perform. Expert in React, Angular,
                and TypeScript — building pixel-perfect, accessible experiences with modern design systems,
                responsive layouts, and fluid animations that bring applications to life.
              </p>
            </GlassCard>

            <GlassCard variant="subtle" glow="forest" className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-forest-400" />
                <h3 className="text-xl font-bold text-storm-100">Leadership</h3>
              </div>
              <p className="text-storm-300 text-sm leading-relaxed">
                Leading cross-functional and global teams across US, UK, India, South Korea, and China.
                Technical mentorship, Agile/Scrum/Kanban methodologies, architecture reviews, and
                driving strategic initiatives at enterprise scale.
              </p>
            </GlassCard>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
