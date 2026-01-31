import { reviewService } from "@/services/review.service"
import { TutorReview } from "@/types";
import { Star } from "lucide-react";

const ReviewsPage = async() => {
  const {data} = await reviewService.getOwnReviews();
  const reviews = data?.result;
  console.log(reviews)
  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Reviews that you got from students
      </h3>

      {!reviews?.length && 
      <p className="text-sm text-gray-500 mt-4">
        You have not received any reviews yet
      </p>
      }

      {reviews.map((review:TutorReview) => (
        <div
          key={review.id}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="font-medium text-gray-900">
                Student: {review.student.name}
              </p>
              <p className="text-xs text-gray-500">
                Category: {review.tutor.category.name} • Subject:{review.tutor.category.subject}
              </p>
            </div>

            <span className="flex items-center gap-1 text-sm font-semibold">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-gray-800">{review.rating}/5</span>
            </span>

          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  )
}

export default ReviewsPage