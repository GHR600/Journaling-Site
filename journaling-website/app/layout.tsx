import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Journalling - Your Intelligence, Amplified',
  description: 'Transform daily reflections into life insights with AI-powered pattern recognition. Coming soon to Google Play.',
  keywords: 'journaling app, AI journal, mental health, self-reflection, pattern recognition, personal growth',
  openGraph: {
    title: 'Journalling - Your Intelligence, Amplified',
    description: 'AI-powered journaling for deeper self-understanding',
    url: 'https://journalling.app',
    siteName: 'Journalling',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Journalling - Your Intelligence, Amplified',
    description: 'Transform daily reflections into life insights with AI-powered pattern recognition.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#6B46C1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
