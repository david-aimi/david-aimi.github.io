# David Aimi Portfolio - Claude Code Rules

## Project Overview
A visually stunning glassmorphic portfolio website for David Aimi, an AI Engineer. The design features a storm/nature theme with controlled, futuristic aesthetics.

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4+
- **Components**: ShadCN UI (customized for storm theme)
- **Animations**: Framer Motion + CSS animations
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages (domain: davidaimi.com)

## Design Theme: "Storm"

### Color Palette

#### Storm Grays (Primary Background)
| Token | Hex | Usage |
|-------|-----|-------|
| `storm-900` | `#0a0c10` | Deepest background, body |
| `storm-800` | `#111318` | Card backgrounds, sections |
| `storm-700` | `#1a1d24` | Elevated surfaces |
| `storm-600` | `#252a33` | Borders, dividers |
| `storm-500` | `#363d4a` | Subtle highlights |
| `storm-400` | `#4a5568` | Disabled states |
| `storm-300` | `#6b7a94` | Muted text |
| `storm-200` | `#9aabc4` | Secondary text |
| `storm-100` | `#c5d3e8` | Primary text |

#### Lightning Blues (Primary Accent)
| Token | Hex | Usage |
|-------|-----|-------|
| `lightning-500` | `#0ea5e9` | Deep accent |
| `lightning-400` | `#38bdf8` | Primary accent, links, CTAs |
| `lightning-300` | `#7dd3fc` | Hover states, highlights |

#### Electric Cyan (Secondary Accent)
| Token | Hex | Usage |
|-------|-----|-------|
| `electric-500` | `#06b6d4` | Deep cyan accent |
| `electric-400` | `#22d3ee` | Secondary accent |
| `electric-300` | `#67e8f9` | Light cyan highlights |

#### Forest Greens (Nature Accent)
| Token | Hex | Usage |
|-------|-----|-------|
| `forest-700` | `#14532d` | Deep forest |
| `forest-600` | `#166534` | Forest accent |
| `forest-500` | `#22c55e` | Success states |
| `forest-400` | `#4ade80` | Green highlights |
| `forest-300` | `#86efac` | Light green |

### Typography

#### Font Families
- **Display/Headings**: Inter (system-ui fallback)
- **Body**: Inter (system-ui fallback)
- **Code/Mono**: JetBrains Mono, Fira Code

#### Type Scale
- **Hero**: 4rem-6rem (responsive), font-weight 800
- **H1**: 3rem, font-weight 700
- **H2**: 2.25rem, font-weight 600
- **H3**: 1.5rem, font-weight 600
- **H4**: 1.25rem, font-weight 500
- **Body**: 1rem, font-weight 400
- **Small**: 0.875rem, font-weight 400
- **Caption**: 0.75rem, font-weight 400

### Glassmorphism Styles

#### Standard Glass
```css
.glass {
  background: rgba(17, 19, 24, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(56, 189, 248, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 1px 0 rgba(56, 189, 248, 0.1);
}
```

#### Subtle Glass (for overlays)
```css
.glass-subtle {
  background: rgba(17, 19, 24, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(56, 189, 248, 0.08);
}
```

#### Intense Glass (for prominent cards)
```css
.glass-intense {
  background: rgba(17, 19, 24, 0.85);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.5),
              inset 0 1px 0 rgba(56, 189, 248, 0.15);
}
```

### Animations

#### Available Animations
| Class | Description | Duration |
|-------|-------------|----------|
| `animate-storm-pulse` | Gentle pulsing opacity/scale | 4s |
| `animate-lightning` | Flickering lightning effect | 8s |
| `animate-rain` | Falling rain drops | 1.5s |
| `animate-ripple` | Expanding ripple effect | 1.5s |
| `animate-wave` | Gentle wave motion | 6s |
| `animate-float` | Floating up/down | 6s |
| `animate-glow-pulse` | Pulsing glow shadow | 3s |
| `animate-wind-sway` | Wind-blown movement | 8s |
| `animate-shimmer` | Shimmer highlight effect | 2s |

#### Animation Guidelines
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth easing
- Keep animations subtle and purposeful
- Prefer longer durations (3-8s) for ambient effects
- Use shorter durations (200-400ms) for interactions
- Always respect `prefers-reduced-motion`

### Glow Effects
```css
.glow-lightning { box-shadow: 0 0 30px rgba(56, 189, 248, 0.4); }
.glow-electric { box-shadow: 0 0 30px rgba(34, 211, 238, 0.4); }
.glow-forest { box-shadow: 0 0 30px rgba(74, 222, 128, 0.3); }
```

### Text Gradients
```css
.text-gradient-storm {
  background: linear-gradient(135deg, #38bdf8, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-nature {
  background: linear-gradient(135deg, #4ade80, #22d3ee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

## Component Guidelines

### Cards
- Always use `glass` or `glass-intense` for card backgrounds
- Border radius: `rounded-xl` (0.75rem) or `rounded-2xl` (1rem)
- Padding: `p-6` minimum, `p-8` for larger cards
- Add subtle hover effects with scale and glow

### Buttons
- Primary: `bg-lightning-400` with `hover:bg-lightning-300`
- Ghost: `bg-transparent` with `hover:bg-storm-700`
- Always include smooth transitions
- Add glow on hover for important CTAs

### Navigation
- Fixed position with `glass-subtle` background
- Logo on left, nav items centered or right
- Active state: `text-lightning-400` with underline
- Mobile: Hamburger menu with slide-in panel

### Icons
- Use Lucide React exclusively
- Default size: 20-24px
- Color: Inherit from text or use accent colors
- Add subtle animations on hover where appropriate

## File Structure
```
src/
├── components/
│   ├── ui/          # ShadCN components
│   ├── layout/      # Header, Footer, Layout
│   ├── effects/     # Rain, Lightning, etc.
│   └── sections/    # Page sections
├── pages/
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── Hobbies.tsx
│   └── Contact.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Content Guidelines

### Professional Focus
- AI Engineer specializing in LLM/GenAI
- Technologies: Claude, GPT, LangChain, RAG, Fine-tuning
- Emphasis on practical applications and results

### Tone
- Professional but approachable
- Technical but accessible
- Confident but not boastful

## Accessibility
- Maintain color contrast ratios (WCAG AA minimum)
- Provide focus indicators on all interactive elements
- Support keyboard navigation
- Respect `prefers-reduced-motion`
- Include alt text for all images

## Performance
- Lazy load images and heavy components
- Use CSS animations over JS where possible
- Optimize images (WebP format preferred)
- Keep bundle size minimal

## Deployment
- Build output: `dist/`
- Base URL: `/` (custom domain)
- GitHub Pages deployment via GitHub Actions
