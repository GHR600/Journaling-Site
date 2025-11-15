import { CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-500 h-12 w-12" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
          You're on the list!
        </h1>

        <p className="text-xl text-text-secondary mb-8">
          We'll email you when Journalling launches on Google Play in early 2025.
        </p>

        <div className="bg-card border border-primary/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            What to Expect
          </h2>
          <ul className="text-left text-text-secondary space-y-3 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              <span>Early access to premium features before the official launch</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              <span>Exclusive insights on how to maximize your journaling practice</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3">•</span>
              <span>Be part of shaping the future of intelligent journaling</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-text-secondary">
            In the meantime, follow our journey:
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-card border border-primary/30 rounded-lg text-text-primary hover:border-primary transition-all"
            >
              Twitter
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-card border border-primary/30 rounded-lg text-text-primary hover:border-primary transition-all"
            >
              GitHub
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-12 text-text-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </main>
  )
}
