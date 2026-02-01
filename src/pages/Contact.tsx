import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { GlassCard } from '@/components/sections';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'davidaimi@gmail.com',
    href: 'davidaimi@gmail.com',
    color: 'lightning',
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/david-aimi',
    href: 'https://github.com/david-aimi',
    color: 'electric',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/david-aimi',
    href: 'https://linkedin.com/in/david-aimi',
    color: 'forest',
  },
];

const colorClasses = {
  lightning: {
    icon: 'text-lightning-400',
    bg: 'bg-lightning-400/10',
    border: 'border-lightning-400/20',
  },
  electric: {
    icon: 'text-electric-400',
    bg: 'bg-electric-400/10',
    border: 'border-electric-400/20',
  },
  forest: {
    icon: 'text-forest-400',
    bg: 'bg-forest-400/10',
    border: 'border-forest-400/20',
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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            Let's Connect
          </h1>
          <p className="text-xl text-storm-300 max-w-2xl mx-auto">
            Have an AI project in mind? Want to collaborate? Or just want to say
            hello? I'd love to hear from you.
          </p>
        </motion.header>

        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <GlassCard variant="intense" glow="lightning" className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-lightning-400" />
                <h2 className="text-2xl font-bold text-storm-100">
                  Send a Message
                </h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-forest-400 mb-4" />
                  <h3 className="text-xl font-semibold text-storm-100 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-storm-300">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-storm-200"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-storm-800/50 border-storm-600 text-storm-100 placeholder:text-storm-500 focus:border-lightning-400 focus:ring-lightning-400/20"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-storm-200"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-storm-800/50 border-storm-600 text-storm-100 placeholder:text-storm-500 focus:border-lightning-400 focus:ring-lightning-400/20"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-storm-200"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-storm-800/50 border-storm-600 text-storm-100 placeholder:text-storm-500 focus:border-lightning-400 focus:ring-lightning-400/20"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-storm-200"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-storm-800/50 border-storm-600 text-storm-100 placeholder:text-storm-500 focus:border-lightning-400 focus:ring-lightning-400/20 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-lightning-400 hover:bg-lightning-300 text-storm-900 font-semibold py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </GlassCard>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.aside variants={itemVariants} className="space-y-6">
            {/* Contact Methods */}
            <GlassCard variant="default" className="p-6">
              <h3 className="text-lg font-semibold text-storm-100 mb-4">
                Other Ways to Connect
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const colors =
                    colorClasses[method.color as keyof typeof colorClasses];
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-storm-700/30 transition-colors group"
                    >
                      <div
                        className={`p-2 rounded-lg ${colors.bg} ${colors.border} border`}
                      >
                        <method.icon className={`w-5 h-5 ${colors.icon}`} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-storm-200 group-hover:text-storm-100 transition-colors">
                          {method.title}
                        </p>
                        <p className="text-xs text-storm-400">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </GlassCard>

            {/* Location & Availability */}
            <GlassCard variant="subtle" className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-lightning-400" />
                  <div>
                    <p className="text-sm font-medium text-storm-200">Location</p>
                    <p className="text-xs text-storm-400">
                      Remote / Global
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-electric-400" />
                  <div>
                    <p className="text-sm font-medium text-storm-200">
                      Response Time
                    </p>
                    <p className="text-xs text-storm-400">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Availability Status */}
            <GlassCard variant="subtle" className="p-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-forest-400 animate-pulse" />
                <div>
                  <p className="text-sm font-medium text-storm-200">
                    Currently Available
                  </p>
                  <p className="text-xs text-storm-400">
                    Open to new projects and collaborations
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.aside>
        </div>
      </motion.div>
    </div>
  );
}
