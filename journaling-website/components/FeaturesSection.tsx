import { Brain, Waves, Activity, Sparkles, Leaf, Palmtree, BarChart, BarChart2, BarChart3 } from 'lucide-react'
import FeatureCard from './FeatureCard'

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI Pattern Recognition',
      description: 'Journaling  reveals meaningful patterns you might miss. Discover hidden connections in your thoughts and behaviors.'
    },
    {
      icon: Activity,
      title: 'Health Integration',
      description: 'Connect sleep, activity, and mood data to understand how your lifestyle affects your well-being. See the complete picture of your health.'
    },
    {
      icon: Palmtree,
      title: 'Convenience',
      description: 'No need to type. Journal using your voice anytime, anywhere. Capture your thoughts on the go with ease and security.'
    },
    {
      icon: BarChart3,
      title: 'Track your Progress',
      description: 'Receive personalized statistics from your reflections. Transform raw journal entries into understanding yourself.'
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
