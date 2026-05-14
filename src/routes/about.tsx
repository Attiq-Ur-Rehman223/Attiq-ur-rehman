import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle, ArrowRight, Download } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const skills = [
  {
    category: 'Shopify',
    color: 'oklch(0.72 0.17 200)',
    items: ['Shopify Liquid', 'Shopify Plus', 'Shopify Hydrogen', 'Shopify Apps (Ruby/Node)', 'Theme Development', 'Checkout Extensibility'],
  },
  {
    category: 'WordPress',
    color: 'oklch(0.65 0.25 290)',
    items: ['Custom Theme Development', 'Plugin Development', 'Gutenberg Blocks', 'WooCommerce', 'ACF & CPTs', 'REST API'],
  },
  {
    category: 'Frontend',
    color: 'oklch(0.70 0.18 162)',
    items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Figma → Code', 'Performance Optimization', 'Responsive Design'],
  },
  {
    category: 'SEO & Marketing',
    color: 'oklch(0.75 0.20 75)',
    items: ['Technical SEO', 'Core Web Vitals', 'Schema Markup', 'Google Analytics 4', 'Klaviyo', 'A/B Testing'],
  },
]

const experience = [
  {
    role: 'Senior Shopify & WordPress Developer',
    company: 'Freelance / Self-Employed',
    period: '2020 – Present',
    description: 'Building custom Shopify and WordPress solutions for eCommerce brands globally. Delivered 40+ projects across fashion, food, health, and B2B sectors with measurable ROI improvements.',
    highlights: ['80+ projects delivered', '$2M+ client revenue generated', '50+ satisfied clients'],
    color: 'oklch(0.65 0.25 290)',
  },
  {
    role: 'eCommerce Developer',
    company: 'Digital Forge Agency',
    period: '2018 – 2020',
    description: 'Led frontend development for mid-market eCommerce clients. Specialized in WooCommerce customization, Shopify theme development, and site performance optimization.',
    highlights: ['Led 25+ client projects', 'Reduced average load times by 60%', 'Grew agency Shopify practice'],
    color: 'oklch(0.72 0.17 200)',
  },
  {
    role: 'WordPress Developer',
    company: 'BrightPixel Studio',
    period: '2016 – 2018',
    description: 'Full-stack WordPress development for SME clients. Built custom themes, plugins, and WooCommerce stores while establishing SEO best practices across the team.',
    highlights: ['Built 30+ WordPress sites', 'Introduced SEO standards', 'Mentored junior developers'],
    color: 'oklch(0.70 0.18 162)',
  },
]

const certifications = [
  'Shopify Partner Certified Developer',
  'Google Analytics 4 Certified',
  'HubSpot Inbound Marketing',
  'Yoast SEO Expert',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">About Me</p>
            <h1 className="text-5xl font-black mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Attiq Ur Rehman</span> —
              eCommerce Developer
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I've spent 8+ years obsessing over one thing: building online stores and websites that
              actually convert. Not just look good — but drive measurable business results.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From solo entrepreneurs launching their first Shopify store to established brands
              needing a WooCommerce overhaul, I bring the same level of care, craftsmanship, and
              business thinking to every project.
            </p>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-gradient"
              >
                Work With Me <ArrowRight size={16} />
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
              >
                <Download size={16} /> Download CV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
              style={{ background: 'linear-gradient(135deg, oklch(0.55 0.28 290), oklch(0.72 0.17 200))' }} />
            <img
              src="/headshot-on-white.jpg"
              alt="Attiq Ur Rehman — Shopify & WordPress Developer"
              className="relative rounded-3xl w-full max-w-sm mx-auto object-cover shadow-2xl"
              style={{ aspectRatio: '4/5' }}
            />
            <div className="absolute -bottom-4 -right-4 p-4 rounded-2xl glass-card border border-border">
              <div className="text-2xl font-black gradient-text">8+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Expertise</p>
            <h2 className="text-4xl font-black">Skills & Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((group) => (
              <div key={group.category} className="p-5 rounded-2xl glass-card border border-border">
                <h3 className="font-bold mb-3" style={{ color: group.color }}>{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={12} style={{ color: group.color, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Career</p>
            <h2 className="text-4xl font-black">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job) => (
              <div key={job.role} className="p-6 rounded-2xl glass-card border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <p className="text-sm font-medium" style={{ color: job.color }}>{job.company}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-border text-muted-foreground self-start sm:self-center">
                    {job.period}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-3">
                  {job.highlights.map((h) => (
                    <span key={h} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg"
                      style={{ background: `${job.color}15`, color: job.color }}>
                      <CheckCircle size={11} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-2xl glass-card border border-border">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Certifications</p>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} style={{ color: 'oklch(0.70 0.18 162)', flexShrink: 0 }} />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl glass-card border border-border">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">My Values</p>
            <ul className="space-y-3">
              {[
                'Results over aesthetics — beautiful AND high-converting',
                'Clean, maintainable code you can build on',
                'Transparent communication, no surprises',
                'Long-term partnership, not one-off transactions',
              ].map((value) => (
                <li key={value} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle size={16} style={{ color: 'oklch(0.65 0.25 290)', flexShrink: 0, marginTop: 2 }} />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl glass-card border border-border"
          style={{ background: 'linear-gradient(135deg, oklch(0.55 0.28 290 / 0.08), oklch(0.72 0.17 200 / 0.08))' }}>
          <h2 className="text-3xl font-black mb-4">Let's Build Something Great</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            I'm selective about the projects I take on — which means when I'm working with you,
            you have my full attention and dedication.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-gradient"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
