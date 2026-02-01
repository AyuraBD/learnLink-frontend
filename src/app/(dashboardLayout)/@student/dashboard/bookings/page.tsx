import StudentBookingTable from '@/components/modules/student/StudentBookingTable';
import { bookingsService } from '@/services/booking.service'
import { StudentBooking } from '@/types';

const BookingsPage = async() => {
  const {data} = await bookingsService.getBookings();
  const bookings = data?.result;
  return (
    <div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>All bookings</h1>
      </div>
      <div>
        {bookings?.length > 0 ? (
            bookings?.map((booking:StudentBooking)=> <StudentBookingTable key={booking.id} booking={booking}></StudentBookingTable>)
          ) 
          :(
            <div>
              <p className="text-center text-gray-500">
                No bookings found.
              </p>
            </div>
          )}
      </div>
    </div>
  )
}

export default BookingsPage