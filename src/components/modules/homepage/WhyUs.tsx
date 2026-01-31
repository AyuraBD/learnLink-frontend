import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, GraduationCap, CalendarCheck, Star } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    icon: Users,
    label: "Active Students",
    value: "1,200+",
  },
  {
    icon: GraduationCap,
    label: "Verified Tutors",
    value: "150+",
  },
  {
    icon: CalendarCheck,
    label: "Sessions Completed",
    value: "4,500+",
  },
  {
    icon: Star,
    label: "Average Rating",
    value: "4.8 / 5",
  },
]

const values = [
  {
    title: "Verified & Trusted Tutors",
    description:
      "Every tutor on SkillBridge is carefully reviewed to ensure quality learning experiences.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. See tutor rates upfront and book sessions confidently.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Learn at your own pace with tutors available across different time slots.",
  },
  {
    title: "Secure & Reliable Platform",
    description:
      "Your bookings, payments, and data are protected with industry-standard security.",
  },
]

const WhyUsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Why Choose LearnLink?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A trusted learning platform backed by real results, real tutors, and real students.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center shadow-sm">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 text-blue-600">
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-12 md:grid-cols-2 mb-20">
          {values.map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="px-10">
            <Link href="/tutors">Get Started with LearnLink</Link>
          </Button>
        </div>

      </div>
    </section>
  )
}

export default WhyUsSection
