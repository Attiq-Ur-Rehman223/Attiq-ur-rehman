import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ShoppingBag, Globe, Search, Zap, TrendingUp, Palette,
  CheckCircle, ArrowRight, Code, Smartphone, Shield
} from 'lucide-react'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const services = [
  {
    icon: ShoppingBag,
    title: 'Shopify Store Development',
    description: 'Full-scale Shopify store builds from scratch or migrations from other platforms. Custom Liquid themes, app development, checkout extensibility, and Shopify Plus features.',
    features: [
      'Custom Liquid theme development',
      'Shopify Plus & B2B features',
      'App integrations (ERP, CRM, 3PL)',
      'Checkout optimization',
      'Headless Shopify (Hydrogen)',
      'Store migrations & re-platforms',
    ],
    color: 'oklch(0.72 0.17 200)',
    price: 'From $2,500',
  },
  {
    icon: Globe,
    title: 'WordPress Website Design',
    description: 'Beautiful, fast WordPress websites tailored to your brand. Custom themes, Gutenberg blocks, and performance-first builds that stand out from templates.',
    features: [
      'Custom WordPress theme development',
      'Gutenberg block development',
      'ACF & custom post types',
      'Multilingual (WPML / Polylang)',
      'Membership & subscription sites',
      'WordPress multisite networks',
    ],
    color: 'oklch(0.65 0.25 290)',
    price: 'From $1,800',
  },
  {
    icon: ShoppingBag,
    title: 'WooCommerce Development',
    description: 'Powerful WooCommerce stores built for scale. Custom product types, payment gateways, shipping rules, and integrations with your business systems.',
    features: [
      'Custom WooCommerce themes',
      'Payment gateway integrations',
      'Subscription & recurring billing',
      'B2B wholesale pricing',
      'Custom product configurators',
      'ERP & inventory sync',
    ],
    color: 'oklch(0.70 0.18 162)',
    price: 'From $2,000',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Technical SEO that gets you ranking. From Core Web Vitals to schema markup, structured data, and site architecture built for search engine dominance.',
    features: [
      'Technical SEO audits',
      'Core Web Vitals optimization',
      'Schema markup & structured data',
      'XML sitemaps & robots.txt',
      'On-page SEO implementation',
      'Competitor gap analysis',
    ],
    color: 'oklch(0.75 0.20 75)',
    price: 'From $800',
  },
  {
    icon: TrendingUp,
    title: 'eCommerce Strategy & CRO',
    description: 'Data-driven conversion rate optimization to turn more visitors into buyers. A/B testing, funnel analysis, and customer journey mapping.',
    features: [
      'Conversion rate audits',
      'A/B testing implementation',
      'Cart abandonment recovery',
      'Upsell & cross-sell setups',
      'Google Analytics 4 setup',
      'Heatmap & session recording',
    ],
    color: 'oklch(0.72 0.17 200)',
    price: 'From $1,200',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed is a conversion killer. I audit and optimize your site for blazing-fast load times — targeting 90+ PageSpeed scores across all devices.',
    features: [
      'PageSpeed Insights audit',
      'Image optimization & WebP',
      'CDN configuration',
      'Caching strategy setup',
      'CSS/JS minification & deferring',
      'Database optimization',
    ],
    color: 'oklch(0.65 0.25 290)',
    price: 'From $600',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description: 'Mobile-first designs that look stunning on every screen size. Pixel-perfect implementation with accessibility and UX at the core.',
    features: [
      'Mobile-first design approach',
      'Cross-browser compatibility',
      'WCAG accessibility compliance',
      'Touch-optimized interactions',
      'Progressive Web App (PWA)',
      'Dark/light mode support',
    ],
    color: 'oklch(0.70 0.18 162)',
    price: 'From $1,500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive, beautiful interfaces designed to guide users toward conversion. Figma designs, design systems, and component libraries.',
    features: [
      'Figma wireframes & prototypes',
      'Design system creation',
      'Component library',
      'Brand identity & style guide',
      'User flow mapping',
      'Usability testing',
    ],
    color: 'oklch(0.75 0.20 75)',
    price: 'From $1,200',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Keep your site secure, updated, and performing optimally. Monthly maintenance plans with uptime monitoring and priority support.',
    features: [
      'WordPress/plugin updates',
      'Security monitoring & backups',
      'Uptime monitoring',
      'Monthly performance reports',
      'Priority bug fixes',
      'Content updates',
    ],
    color: 'oklch(0.65 0.25 290)',
    price: 'From $150/mo',
  },
]

const process = [
  { step: '01', title: 'Discovery Call', description: 'Free 30-minute call to understand your goals, timeline, and requirements.' },
  { step: '02', title: 'Proposal & Scoping', description: 'Detailed project proposal with timeline, deliverables, and fixed price.' },
  { step: '03', title: 'Design & Build', description: 'Iterative development with regular check-ins and progress updates.' },
  { step: '04', title: 'Launch & Support', description: 'Smooth launch with 30 days of included post-launch support.' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Services</p>
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Full-Stack <span className="gradient-text">eCommerce</span>
            <br />Development Services
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            From strategy to deployment, I handle every aspect of your online presence.
            All services come with clean code, documentation, and ongoing support options.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="p-6 rounded-2xl glass-card service-card flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${service.color}20` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={13} style={{ color: service.color, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                  <span className="font-bold gradient-text">{service.price}</span>
                  <Link
                    to="/contact"
                    className="text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                    style={{ color: service.color }}
                  >
                    Get Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">How It Works</p>
            <h2 className="text-4xl font-black">My Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px border-t border-dashed border-border z-0" />
                )}
                <div className="relative z-10 p-6 rounded-2xl glass-card border border-border text-center">
                  <div className="text-4xl font-black gradient-text mb-3">{p.step}</div>
                  <h3 className="font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="p-10 rounded-3xl glass-card border border-border text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Technology</p>
          <h2 className="text-3xl font-black mb-6">Tools I Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Shopify', 'Shopify Plus', 'Hydrogen', 'Liquid', 'WordPress',
              'WooCommerce', 'Elementor', 'ACF', 'Gutenberg', 'PHP',
              'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js',
              'MySQL', 'REST APIs', 'GraphQL', 'Git', 'Figma',
              'Google Analytics', 'GTM', 'Klaviyo', 'Mailchimp', 'Stripe',
            ].map((tech) => (
              <span key={tech} className="px-3 py-1.5 rounded-lg text-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4">Not Sure What You Need?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call and let's figure out the best approach for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-gradient"
          >
            Book Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
