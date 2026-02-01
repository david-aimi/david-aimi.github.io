import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/david-aimi',
    icon: Github,
    color: 'hover:text-storm-100 hover:bg-storm-600/50',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/david-aimi',
    icon: Linkedin,
    color: 'hover:text-lightning-400 hover:bg-lightning-400/10',
  },
  {
    name: 'Email',
    url: 'mailto:davidaimi@gmail.com',
    icon: Mail,
    color: 'hover:text-electric-400 hover:bg-electric-400/10',
  },
];

export function SocialSidebar() {
  return (
    <motion.aside
      className="glass rounded-2xl p-4 space-y-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-xs font-semibold text-storm-400 uppercase tracking-wider mb-3 px-2">
        Connect
      </h3>
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-storm-300 transition-all duration-300 ${link.color}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <link.icon className="w-4 h-4" />
          <span className="text-sm font-medium flex-1">{link.name}</span>
          <ExternalLink className="w-3 h-3 opacity-50" />
        </motion.a>
      ))}
    </motion.aside>
  );
}
