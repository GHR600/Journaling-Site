import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-card border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300 hover:scale-105">
      <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
        <Icon className="text-primary h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  )
}
