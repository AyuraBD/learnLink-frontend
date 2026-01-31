import { Card, CardContent } from "@/components/ui/card"
import { Search, CalendarCheck, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse Tutors",
    description:
      "Explore verified tutors by subject, experience, and price. Find the perfect match for your learning goals.",
  },
  {
    icon: CalendarCheck,
    title: "Book a Session",
    description:
      "Check availability and book sessions instantly at a time that works best for you.",
  },
  {
    icon: GraduationCap,
    title: "Learn & Grow",
    description:
      "Join live sessions, learn from experts, and level up your skills with confidence.",
  },
]

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How LearnLink Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Start learning in just a few simple steps.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="border-gray-200 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-blue-100 text-blue-600 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
