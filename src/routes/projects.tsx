import { createFileRoute, Link } from '@tanstack/react-router'
import { ExternalLink, Github, ArrowRight, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

const projects = [
  {
    title: 'LuxeWear Fashion Store',
    category: 'Shopify',
    description: 'High-end fashion Shopify store with a bespoke Liquid theme, custom 3D product viewer, AR try-on integration, and Klaviyo email flows. Launched with full SEO optimization.',
    results: '+340% conversion rate',
    resultDetail: 'vs. previous Magento store',
    tags: ['Shopify', 'Liquid', 'Klaviyo', 'AR Integration', 'SEO'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.65 0.25 290)',
    year: '2024',
  },
  {
    title: 'GreenEats Restaurant Group',
    category: 'WordPress',
    description: 'Multi-location restaurant chain WordPress site with online ordering via WooCommerce, OpenTable reservations, digital loyalty card program, and location-based content.',
    results: '+280% online orders',
    resultDetail: 'within 6 months of launch',
    tags: ['WordPress', 'WooCommerce', 'OpenTable API', 'Loyalty Program'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.70 0.18 162)',
    year: '2024',
  },
  {
    title: 'TechParts B2B Platform',
    category: 'WooCommerce',
    description: 'B2B eCommerce platform for industrial parts distributor. Custom quote request system, tiered wholesale pricing, Net-30 invoicing, and ERP sync via REST API.',
    results: '$1.2M first-year revenue',
    resultDetail: 'exceeding projections by 40%',
    tags: ['WooCommerce', 'B2B', 'REST API', 'ERP Integration', 'Custom Pricing'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.72 0.17 200)',
    year: '2023',
  },
  {
    title: 'PureBeauty Subscription Box',
    category: 'Shopify',
    description: 'DTC beauty brand Shopify store with Recharge subscriptions, curated box builder, influencer referral program, and automated post-purchase flows.',
    results: '4.2x customer LTV',
    resultDetail: 'via subscription program',
    tags: ['Shopify Plus', 'Recharge', 'Yotpo', 'Loyalty'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.75 0.20 75)',
    year: '2023',
  },
  {
    title: 'BuildRight Contractors',
    category: 'WordPress',
    description: 'Lead generation WordPress site for a regional contractor network. Custom job estimator tool, contractor directory with advanced filters, and HubSpot CRM integration.',
    results: '+520% organic traffic',
    resultDetail: 'from local SEO strategy',
    tags: ['WordPress', 'ACF', 'HubSpot', 'Local SEO', 'Custom Plugin'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.65 0.25 290)',
    year: '2023',
  },
  {
    title: 'SportStack Equipment',
    category: 'Shopify',
    description: 'Sports equipment Shopify store with custom size/fit finder, compare feature, bundle builder, and Shopify POS integration for their brick-and-mortar locations.',
    results: '+190% mobile conversions',
    resultDetail: 'after responsive redesign',
    tags: ['Shopify', 'POS Integration', 'Custom App', 'Bundle Builder'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.70 0.18 162)',
    year: '2022',
  },
  {
    title: 'NourishWell Health Platform',
    category: 'WordPress',
    description: 'Health & wellness membership platform on WordPress with MemberPress, video library, nutritionist booking, and recipe content with nutrition data.',
    results: '2,800+ active members',
    resultDetail: 'in first year post-launch',
    tags: ['WordPress', 'MemberPress', 'WooCommerce', 'Video Library'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.72 0.17 200)',
    year: '2022',
  },
  {
    title: 'CycleCity Urban Bikes',
    category: 'WooCommerce',
    description: 'Urban cycling brand WooCommerce store with custom bike configurator, stock level API from warehouse, click-and-collect, and local delivery radius calculator.',
    results: '0→$400K in 18 months',
    resultDetail: 'from zero to profitability',
    tags: ['WooCommerce', 'Custom Configurator', 'Inventory API', 'Performance'],
    github: null,
    liveUrl: '#',
    color: 'oklch(0.75 0.20 75)',
    year: '2022',
  },
]

const categories = ['All', 'Shopify', 'WordPress', 'WooCommerce']

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Portfolio</p>
          <h1 className="text-5xl sm:text-6xl font-black mb-6">
            Projects That <span className="gradient-text">Deliver Results</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Every project is a partnership. Here's proof that great development
            translates directly to business growth.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'text-white btn-gradient shadow-lg'
                  : 'border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="p-6 rounded-2xl glass-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: `${project.color}20`, color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {/* Results highlight */}
              <div
                className="flex items-center gap-3 p-3 rounded-xl mb-4"
                style={{ background: `${project.color}10`, borderLeft: `3px solid ${project.color}` }}
              >
                <TrendingUp size={16} style={{ color: project.color, flexShrink: 0 }} />
                <div>
                  <span className="font-bold text-sm" style={{ color: project.color }}>{project.results}</span>
                  <span className="text-xs text-muted-foreground ml-2">{project.resultDetail}</span>
                </div>
              </div>

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

        {/* CTA */}
        <div className="text-center p-12 rounded-3xl glass-card border border-border">
          <h2 className="text-3xl font-black mb-4">Got a Project in Mind?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's add your success story to this list. Reach out for a free project consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white btn-gradient"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
