import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-24 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="text-sm px-4 py-1">
            🚀 Learn smarter, not harder
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto">
          Connect with Expert Tutors.
          <span className="text-blue-600 block">
            Learn Anytime, Anywhere.
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          SkillBridge helps students find verified tutors, book sessions instantly,
          and grow skills with confidence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="px-8">
            Find a Tutor
          </Button>
          <Button size="lg" variant="outline" className="px-8">
            Become a Tutor
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <span>✔ Verified Tutors</span>
          <span>✔ Flexible Scheduling</span>
          <span>✔ Secure Payments</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
