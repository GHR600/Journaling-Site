import { Mail, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-display text-3xl text-accent mb-2">Journalling</h3>
          <p className="text-text-secondary">Your Intelligence, Amplified</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="mailto:contact@journalling.app"
            className="text-text-secondary hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-text-secondary hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>

        </div>

        <div className="text-center text-text-secondary text-sm">
          <p>&copy; {new Date().getFullYear()} Journaling</p>
          <p className="mt-2">
            
          </p>
        </div>
      </div>
    </footer>
  )
}
