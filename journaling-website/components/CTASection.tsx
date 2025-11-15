import EmailForm from './EmailForm'

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
          Ready to Amplify Your Intelligence?
        </h2>
        <p className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto">
          Join the waitlist to get early access and be notified when Journalling launches on Google Play.
        </p>

        <EmailForm />

        <div className="mt-16 p-8 bg-card/50 rounded-xl border border-primary/20">
          <h3 className="text-xl font-semibold text-text-primary mb-4">A Note from the Founder</h3>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            I built Journalling because I believe everyone deserves to understand themselves better.
            Traditional journaling is powerful, but combining it with AI pattern recognition unlocks
            a completely new level of self-awareness. I can't wait to share this with you.
          </p>
        </div>
      </div>
    </section>
  )
}
