import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const categories = [
  "Math",
  "Programming",
  "English",
  "Science",
  "Design",
  "Business",
]

const featuredTutors = [
  {
    name: "John Doe",
    subject: "Mathematics",
    rate: "$20/hr",
    rating: 4.8,
  },
  {
    name: "Sarah Khan",
    subject: "Web Development",
    rate: "$25/hr",
    rating: 4.9,
  },
  {
    name: "Amit Roy",
    subject: "English Speaking",
    rate: "$18/hr",
    rating: 4.7,
  },
]

const ExploreTutorsSection = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Explore Tutors & Subjects
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            Discover popular subjects and connect with top-rated tutors trusted by students.
          </p>
        </div>

        {/* Popular Categories */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Popular Categories
          </h3>

          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Tutors */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Featured Tutors
            </h3>
            <Button variant="link">View all tutors →</Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredTutors.map((tutor, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {tutor.name}
                    </h4>
                    <span className="flex items-center gap-1 text-sm text-yellow-500">
                      <Star className="w-4 h-4 fill-yellow-500" />
                      {tutor.rating}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {tutor.subject}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {tutor.rate}
                    </span>
                    <Button size="sm">View Profile</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ExploreTutorsSection
