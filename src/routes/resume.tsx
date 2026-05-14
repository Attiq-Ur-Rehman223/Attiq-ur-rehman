import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  const jobs = [...allJobs].sort((a, b) => {
    const aEnd = a.endDate ? parseInt(String(a.endDate)) : 9999
    const bEnd = b.endDate ? parseInt(String(b.endDate)) : 9999
    return bEnd - aEnd
  })

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest gradient-text mb-4">Resume</p>
          <h1 className="text-5xl font-black mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            8+ years building eCommerce solutions with Shopify, WordPress, and WooCommerce.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-border hover:border-primary/50 hover:bg-white/5 transition-all duration-200"
          >
            <Download size={16} /> Download PDF Resume
          </a>
        </div>

        <Separator className="mb-16 opacity-20" />

        {/* Career Summary */}
        <div className="p-8 rounded-2xl glass-card border border-border mb-12">
          <h2 className="text-2xl font-black mb-4">Career Summary</h2>
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Results-driven Shopify and WordPress developer with 8+ years of experience
                delivering high-converting eCommerce stores and digital experiences. Proven track
                record of improving conversion rates, driving organic traffic growth, and building
                scalable platforms that support business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Expertise spans the full development lifecycle — from strategy and design to
                deployment and ongoing optimization — with a focus on clean code, performance,
                and measurable business outcomes.
              </p>
            </div>
            <img
              src="/headshot-on-white.jpg"
              alt="Alex Morgan"
              className="w-36 h-44 rounded-2xl object-cover shadow-lg shrink-0"
            />
          </div>
        </div>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Work Experience</h2>
          <div className="space-y-5">
            {jobs.map((job) => (
              <div key={job.jobTitle} className="p-6 rounded-2xl glass-card border border-border">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                    <p className="text-sm font-medium" style={{ color: 'oklch(0.65 0.25 290)' }}>
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs shrink-0">
                    {job.startDate} – {job.endDate || 'Present'}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-black mb-6">Education</h2>
          <div className="space-y-5">
            {allEducations.map((education) => (
              <div key={education.school} className="p-6 rounded-2xl glass-card border border-border">
                <h3 className="text-xl font-bold mb-1">{education.school}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{education.summary}</p>
                {education.tags && education.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {education.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-10 rounded-2xl glass-card border border-border"
          style={{ background: 'linear-gradient(135deg, oklch(0.55 0.28 290 / 0.08), oklch(0.72 0.17 200 / 0.08))' }}>
          <h2 className="text-2xl font-black mb-3">Interested in Working Together?</h2>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            I'm currently open to new Shopify and WordPress projects. Let's discuss how I can help grow your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-gradient"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}
