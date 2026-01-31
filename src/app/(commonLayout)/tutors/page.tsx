import TutorCard from "@/components/modules/tutors/tutorCard";
import TutorFilters from "@/components/modules/tutors/tutorFiltering";
import { tutorsService } from "@/services/tutor.service"
import { Tutor } from "@/types";

const TutorsPage = async() => {
  const tutorData = await tutorsService.getTutors();
  const tutors = tutorData.data.result;
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10 max-w-[1440px] mx-auto">
      <div className="text-center mb-5">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Find Your Perfect Tutor
        </h1>
        <p className="text-gray-500 mb-6">
          Browse through our verified tutors and choose the one that fits your schedule and learning goals.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-4 gap-4">
        <aside className="col-span-1 lg:mb-0 sm:mb-4 lg:sticky lg:top-24 self-start">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <TutorFilters />
          </div>
        </aside>

        <main className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor: Tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}

          {tutors.length === 0 && (
            <p className="text-center text-gray-500 mt-12 lg:col-span-3">
              No tutors available at the moment. Please check back later.
            </p>
          )}
        </main>
      </div>
    </div>
  )
}

export default TutorsPage