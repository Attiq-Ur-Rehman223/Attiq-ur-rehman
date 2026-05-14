# AGENTS.md

This document provides an overview of the project architecture for AI agents working on this codebase.

## Project Overview

A professional dark-themed portfolio website for a Shopify & WordPress developer / eCommerce specialist. Built with TanStack Start (SSR) and deployed on Netlify.

## Directory Structure

```
content/
  blog/          # Blog posts (markdown with frontmatter)
  education/     # Education entries
  jobs/          # Work experience entries
  projects/      # Portfolio project case studies
public/
  contact-form.html   # Netlify Forms static skeleton (NEVER delete)
  headshot-on-white.jpg
src/
  components/
    ui/          # Radix UI primitives (Badge, Card, etc.)
    Header.tsx   # Fixed navigation header with mobile menu
  lib/
    utils.ts     # cn() class merge helper
  routes/
    __root.tsx   # Root layout: Header + Outlet
    index.tsx    # Homepage (hero, stats, services, projects, testimonials)
    about.tsx    # About page (bio, skills, experience)
    services.tsx # Services page (9 service cards + process + tech stack)
    projects.tsx # Portfolio page (filterable project grid)
    resume.tsx   # Resume page (uses content-collections data)
    contact.tsx  # Contact form (Netlify Forms)
    blog/
      $slug.tsx  # Blog post detail page
  styles.css     # Global CSS: Tailwind + custom dark theme tokens + animations
content-collections.ts  # Zod schemas for jobs, education, blog, projects
```

## Key Architecture Decisions

### Dark Theme as Default
The CSS custom properties in `styles.css` are set to a dark palette by default (no `.dark` class needed). This is intentional — the portfolio uses a permanent dark UI. Do not add a light/dark toggle unless explicitly requested.

### Design System
Custom utility classes defined in `styles.css`:
- `.gradient-text` — violet→cyan gradient text (used for headings)
- `.gradient-text-green` — cyan→emerald gradient text
- `.glass-card` — semi-transparent card with backdrop blur
- `.btn-gradient` — violet gradient button with hover lift
- `.service-card` — hoverable card with border glow
- `.glow-violet`, `.glow-cyan` — box shadow glow utilities
- `.hero-grid` — subtle grid background pattern
- `animation-delay-{100-600}` — staggered animation delays

### Netlify Forms
The contact form at `/contact` uses Netlify Forms. The static skeleton at `public/contact-form.html` **must** match the form field names exactly. It is required for Netlify to detect the form at build time (TanStack Start is SSR, so Netlify cannot scan the React component). If you add new fields to the contact form, add them to both the React component AND `public/contact-form.html`.

### Content Collections
Jobs, education, blog posts, and projects are type-safe markdown files. Schemas are in `content-collections.ts`. Frontmatter field types must match the Zod schema. `startDate` and `endDate` on jobs must be strings.

### Routes & Navigation
TanStack Router file-based routing. The Header component hardcodes nav links — if you add a new route that should appear in the nav, update `src/components/Header.tsx`'s `navLinks` array.

## Coding Conventions

- **Styling**: Tailwind utility classes + custom CSS classes in `styles.css`. Inline `style` props used for oklch color values that Tailwind can't express statically.
- **Icons**: lucide-react — import only what you use.
- **TypeScript**: Strict mode, `@/` alias for `src/`. Type-only imports with `import type`.
- **Components**: PascalCase. Static data (services, projects, testimonials) is defined as constants within the route file unless shared across routes.
- **No comments**: Code is self-documenting. Only add a comment for non-obvious constraints.

## Content Management

To update portfolio content, edit the markdown files in `content/`. No code changes needed for:
- Work experience → `content/jobs/*.md`
- Education → `content/education/*.md`
- Portfolio projects → `content/projects/*.md`
- Blog posts → `content/blog/*.md`

The `projects.tsx` route also has a hardcoded `projects` array for the filterable portfolio grid — this is separate from content-collections and should be updated to match real projects.
