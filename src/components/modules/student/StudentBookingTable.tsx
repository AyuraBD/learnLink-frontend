import { TableCell, TableRow } from '@/components/ui/table'
import { StudentBooking } from '@/types'
import PostReviewModal from './PostReviewModal';
import { Card, CardContent } from '@/components/ui/card';

const StudentBookingTable = ({booking}:{booking:StudentBooking}) => {
  const session = booking;
  const isDisabled = session.status == "PENDING";
  return (
    <Card className="mb-4 shadow-sm hover:shadow-md transition">
      <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          {session.tutor?.user?.image ? (
            <img
              src={session.tutor?.user.image}
              alt={session.tutor?.user.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
              {session.tutor?.user.name[0]}
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{session.tutor.user.name}</p>
            <p className="text-sm text-gray-500">
              Session: {new Date(session.sessionDate).toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              session.status === "CONFIRMED"
                ? "bg-green-100 text-green-800"
                : session.status === "PENDING"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {session.status}
          </span>
        </div>

        <div className="text-sm text-gray-500">
          Created: {new Date(session.createdAt).toLocaleString()}
        </div>

        {
        session.status === "COMPLETED" ? <p>Reviewed</p> : 
        <div>
          {isDisabled ? <p>Need to be confirmed by tutor</p> : <PostReviewModal id={session.id} /> }
        </div>
        }
      </CardContent>
    </Card>
  )
}

export default StudentBookingTable