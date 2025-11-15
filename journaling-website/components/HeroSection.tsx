import EmailForm from './EmailForm'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Journaling GIF */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/Journaling Animation trpnt.gif"
            alt="Journaling Animation"
            width={500}
            height={500}
            className="rounded-lg"
            unoptimized
          />
        </div>

        
        {/* Main headline */}
        {/*<h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-accent mb-6">
          Journalling
        </h1>
        */}
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Your Intelligence, Amplified
        </h2>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
          Transform daily reflections into life insights using AI pattern recognition.
          Your personal intelligence system for understanding yourself better.
        </p>

        {/* Email form */}
        <EmailForm />

        <p className="text-text-secondary text-sm mt-6">
          Coming to Android and iOS • December 2025
        </p>
      </div>
    </section>
  )
}
