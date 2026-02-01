import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tutor } from "@/types"
import { Star } from "lucide-react"
import Link from "next/link"

const TutorsCard = ({tutor}:{tutor:Tutor}) => {
  return (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-2xl">
            {tutor.category.subject}
          </h3>
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-gray-900 dark:text-white">
            {tutor.user.name}
          </p>
          <span className="flex items-center gap-1 text-sm text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-500" />
            {tutor._count.reviews}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium text-gray-900 dark:text-white">
            {tutor.hourlyRate} /hourly
          </span>
          <Button asChild className="cursor-pointer" size="sm">
            <Link href={`/tutors/${tutor.id}`}>View Profile</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TutorsCard