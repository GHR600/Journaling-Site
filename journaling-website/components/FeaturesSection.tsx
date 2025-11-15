import { Brain, Shield, Activity, Sparkles } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI Pattern Recognition',
      description: 'Discover hidden connections in your thoughts and behaviors. Our AI analyzes your journal entries to reveal meaningful patterns you might miss.'
    },
    {
      icon: Activity,
      title: 'Health Integration',
      description: 'Connect sleep, activity, and mood data to understand how your lifestyle affects your well-being. See the complete picture of your health.'
    },
    {
      icon: Shield,
      title: 'Privacy-First',
      description: 'Your data, your control. Everything is stored securely with end-to-end encryption. We never sell or share your personal information.'
    },
    {
      icon: Sparkles,
      title: 'Daily Insights',
      description: 'Receive personalized intelligence from your reflections. Transform raw journal entries into actionable insights for personal growth.'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          More Than Just Journaling
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
          A complete life intelligence system designed to help you understand yourself better
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
