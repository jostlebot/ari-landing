import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jocelyn Skillman | Assistive Relational Intelligence',
  description: 'Clinical AI ethics innovator building tools that strengthen human connection rather than simulate it. Trauma-informed design for the age of synthetic intimacy.',
  openGraph: {
    title: 'Jocelyn Skillman | Assistive Relational Intelligence',
    description: 'Clinical AI ethics innovator building tools that strengthen human connection rather than simulate it.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
