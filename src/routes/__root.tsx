import { HeadContent, Scripts, Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alex Morgan — Shopify & WordPress Developer' },
      { name: 'description', content: 'Expert Shopify & WordPress developer specializing in eCommerce solutions, custom theme development, SEO optimization, and high-converting online stores.' },
    ],
  }),
  shellComponent: RootDocument,
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
    </>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
