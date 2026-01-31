import DeleteTutorProfile from "@/components/modules/ownTutorProfile/DeleteTutorProfile";
import EditTutorProfileModal from "@/components/modules/ownTutorProfile/EditTutorProfileModal";
import { tutorsService } from "@/services/tutor.service"
import Link from "next/link";

const TutorProfilePage = async() => {
  const {data} = await tutorsService.getOwnTutorDetails();
  const tutor = data?.result;
  if (!tutor) {
    return (
      <div className="max-w-md mx-auto mt-20 text-center bg-white shadow-md rounded-xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">You are not a Tutor yet!</h2>
        <p className="text-gray-600">
          Share your skills with students and start earning by teaching online.
        </p>
        <Link
          href="/become-tutor"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Become a Tutor
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{tutor.category.subject} Tutor</h2>

        <div className="flex gap-2">
          <EditTutorProfileModal></EditTutorProfileModal>
          <DeleteTutorProfile></DeleteTutorProfile>
        </div>
      </div>

      {/* Category Info */}
      <div className="space-y-1">
        <p className="text-sm text-gray-500">Category:</p>
        <h3 className="text-lg font-semibold text-gray-800">{tutor.category.name}</h3>
        <p className="text-gray-700">{tutor.category.description}</p>
      </div>

      {/* Tutor Details */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Hourly Rate</p>
          <p className="font-medium text-gray-900">${tutor.hourlyRate}/hr</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Experience</p>
          <p className="font-medium text-gray-900">{tutor.experience}</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-500">Availability</p>
          <p className="font-medium text-gray-900">{tutor.availability}</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-500">Bio</p>
          <p className="text-gray-700">{tutor.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default TutorProfilePage