import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ShoppingBag, Globe, Search, Zap, ArrowRight, Star,
  CheckCircle, TrendingUp, Users, Award, ChevronDown
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const stats = [
  { value: '80+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '6+', label: 'Years Experience' },
  { value: '$2M+', label: 'Client Revenue Generated' },
]

const services = [
  {
    icon: ShoppingBag,
    title: 'Shopify Development',
    description: 'Custom Shopify stores with bespoke themes, app integrations, and checkout optimization built to convert.',
    color: 'oklch(0.72 0.17 200)',
  },
  {
    icon: Globe,
    title: 'WordPress Design',
    description: 'Pixel-perfect WordPress websites with custom themes, page builders, and performance-first architecture.',
    color: 'oklch(0.65 0.25 290)',
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Solutions',
    description: 'Scalable WooCommerce stores with custom product pages, payment gateways, and inventory systems.',
    color: 'oklch(0.70 0.18 162)',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO audits, on-page optimization, Core Web Vitals improvements, and schema markup.',
    color: 'oklch(0.75 0.20 75)',
  },
  {
    icon: TrendingUp,
    title: 'eCommerce Strategy',
    description: 'Conversion rate optimization, A/B testing, abandoned cart recovery, and data-driven growth tactics.',
    color: 'oklch(0.72 0.17 200)',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed audits, image optimization, CDN setup, and caching strategies for 95+ PageSpeed scores.',
    color: 'oklch(0.65 0.25 290)',
  },
]

const projects = [
  {
    title: 'LuxeWear Fashion Store',
    category: 'Shopify',
    description: 'High-end fashion brand Shopify store with custom 3D product viewer and AR try-on feature.',
    results: '+340% conversion rate',
    tags: ['Shopify', 'Liquid', 'Custom App'],
    color: 'oklch(0.65 0.25 290)',
  },
  {
    title: 'GreenEats Restaurant Group',
    category: 'WordPress',
    description: 'Multi-location restaurant chain WordPress site with online ordering, reservations, and loyalty program.',
    results: '+280% online orders',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
    color: 'oklch(0.70 0.18 162)',
  },
  {
    title: 'TechParts B2B Platform',
    category: 'WooCommerce',
    description: 'B2B eCommerce platform with tiered pricing, custom quote requests, and ERP integration.',
    results: '$1.2M first year revenue',
    tags: ['WooCommerce', 'B2B', 'API'],
    color: 'oklch(0.72 0.17 200)',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, LuxeWear',
    content: 'Alex transformed our online store into a revenue machine. Our conversion rate tripled in 3 months. Absolutely incredible work.',
    rating: 5,
  },
  {
    name: 'Marcus Williams',
    role: 'Marketing Director, GreenEats',
    content: 'The WordPress site Alex built is fast, beautiful, and ranks #1 on Google. Our online orders have never been higher.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Founder, TechParts Inc.',
    content: 'Our B2B platform was complex and Alex delivered exactly what we needed. Professional, on-time, and exceptional quality.',
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-grid overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'oklch(0.55 0.28 290)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: 'oklch(0.72 0.17 200)' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground mb-8 animate-fade-in"
              style={{ background: 'oklch(0.12 0.005 285.823)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" style={{ background: 'oklch(0.70 0.18 162)' }} />
              Available for new projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 animate-fade-in-up">
              Shopify &{' '}
              <span className="gradient-text">WordPress</span>
              <br />Developer for{' '}
              <span className="gradient-text-green">eCommerce</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
              I build high-converting online stores and websites that drive real business results.
              From custom Shopify themes to WordPress powerhouses — your success is my craft.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-gradient"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-border hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border py-12" style={{ background: 'oklch(0.10 0.004 285.823)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">What I Do</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">Services That Drive Growth</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end eCommerce development and digital solutions designed to maximize your ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="p-6 rounded-2xl service-card glass-card gradient-border">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${service.color}20` }}
                  >
                    <Icon size={22} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24" style={{ background: 'oklch(0.10 0.004 285.823)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results for real businesses. Here are some highlights from my recent work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="p-6 rounded-2xl glass-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full border border-border"
                    style={{ color: 'oklch(0.70 0.18 162)' }}>
                    {project.results}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md border border-border text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-white/5 transition-all duration-200 font-medium"
            >
              See All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Client Love</p>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">What Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="p-6 rounded-2xl glass-card border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="oklch(0.75 0.20 75)" style={{ color: 'oklch(0.75 0.20 75)' }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-6 text-muted-foreground">"{t.content}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 rounded-3xl relative overflow-hidden"
            style={{ background: 'oklch(0.12 0.005 285.823)' }}>
            <div className="absolute inset-0 rounded-3xl"
              style={{ background: 'linear-gradient(135deg, oklch(0.55 0.28 290 / 0.1), oklch(0.72 0.17 200 / 0.1))' }} />
            <div className="relative">
              <Award size={40} className="mx-auto mb-6" style={{ color: 'oklch(0.65 0.25 290)' }} />
              <h2 className="text-4xl sm:text-5xl font-black mb-4">Ready to Grow Your Store?</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's build something extraordinary together. I'm currently taking on new clients for Q3 2026.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-gradient"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-border hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
                >
                  Learn About Me
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><CheckCircle size={14} style={{ color: 'oklch(0.70 0.18 162)' }} /> Free Consultation</span>
                <span className="flex items-center gap-2"><CheckCircle size={14} style={{ color: 'oklch(0.70 0.18 162)' }} /> Fixed-Price Projects</span>
                <span className="flex items-center gap-2"><CheckCircle size={14} style={{ color: 'oklch(0.70 0.18 162)' }} /> 30-Day Support Included</span>
                <span className="flex items-center gap-2"><Users size={14} style={{ color: 'oklch(0.70 0.18 162)' }} /> 50+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Alex Morgan. Crafting eCommerce experiences that convert.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <Link to="/projects" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
