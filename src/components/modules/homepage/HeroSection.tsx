import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-24 text-center">

        <div className="flex justify-center mb-6">
          <Badge variant="secondary" className="text-sm px-4 py-1 border-2">
            Learn smarter, not harder
          </Badge>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl mx-auto">
          Connect with Expert Tutors.
          <span className="text-blue-600 block">
            Learn Anytime, Anywhere.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          LearnLink helps students find verified tutors, book sessions instantly,
          and grow skills with confidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="px-8">
            <Link href="/tutors">Find a Tutor</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8">
            <Link href='/become-tutor'>Become a Tutor</Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-green-700">
            <Check className="h-4 w-4 rounded-full bg-green-100 p-0.5 text-green-600" />
            <span>Verified Tutors</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-green-700">
            <Check className="h-4 w-4 rounded-full bg-green-100 p-0.5 text-green-600" />
            <span>Flexible Scheduling</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-green-700">
            <Check className="h-4 w-4 rounded-full bg-green-100 p-0.5 text-green-600" />
            <span>Secure Payments</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
