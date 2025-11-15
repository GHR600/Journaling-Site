import { PenLine, Brain, TrendingUp } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: PenLine,
      title: 'Journal Your Day',
      description: 'Write freely about your thoughts, feelings, and experiences. No structure required—just be yourself.'
    },
    {
      icon: Brain,
      title: 'AI Analyzes Patterns',
      description: 'Our intelligent system discovers connections and patterns across your entries, revealing insights you might not see.'
    },
    {
      icon: TrendingUp,
      title: 'Discover Yourself',
      description: 'View analytics, trends, and personalized insights that help you understand your mental and emotional patterns.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary text-center mb-4">
          How It Works
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-16">
          Simple to use, powerful in impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
                <step.icon className="text-primary h-10 w-10" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
