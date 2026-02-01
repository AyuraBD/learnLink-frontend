import BookSession from '@/components/modules/student/BookSession';
import { tutorsService } from '@/services/tutor.service'
import { Star } from 'lucide-react';

const TutorDetailPage = async({params,}: {params: Promise<{id:string}>}) => {
  const {id} = await params;
  const {data} = await tutorsService.getTutorById(id as string);
  const tutor = data?.result;
  console.log(tutor)
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-6">
            <div className="mb-6">
              <div className='py-5'>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {tutor.category.subject}
                </h1>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                  {tutor.category.name}
                </span>
              </div>

              <p className="mt-4 text-gray-600 max-w-3xl">
                {tutor.category.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={tutor?.user?.image || "/avatar-placeholder.png"}
                  alt={tutor.user.name}
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {tutor?.user?.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Professional Tutor
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
              <span>{tutor.experience}+ years experience</span>
              <span>৳ {tutor.hourlyRate} / hour</span>

              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">
                  {tutor.reviews.length} Reviews
                </span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-3xl">
              {tutor.bio}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">
              Student Reviews ({tutor.reviews.length})
            </h2>

            {tutor.reviews.length === 0 ? (
              <p className="text-gray-500">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              <div className="space-y-6">
              {tutor.reviews.map((review: any, idx: number) => (
                <div
                  key={idx}
                  className="border-b last:border-none pb-6"
                >
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    {review.student.image ? (
                      <img
                        src={review.student.image}
                        alt={review.student.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
                        {review.student.name.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <p className="text-sm font-medium text-gray-900">
                      {review.student.name}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <BookSession id={tutor.id}></BookSession>
        </div>

      </div>
    </div>
  )
}

export default TutorDetailPage

