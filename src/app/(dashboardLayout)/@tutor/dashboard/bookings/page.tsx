import BookingsTable from '@/components/modules/admin/bookings/bookingsTable'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { bookingsService } from '@/services/booking.service'
import { Booking } from '@/types';

const BookingsPage = async() => {
  const {data} = await bookingsService.getBookings();
  const bookings = data?.result;
  console.log(bookings);
  return (
    <div>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold'>All bookings</h1>
      </div>
      <div className="rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Tutor</TableHead>
              <TableHead>Session Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Booked On</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {bookings && bookings.length > 0 ? (
              bookings.map((booking: Booking) => (
                <BookingsTable key={booking.id} booking={booking} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-500 py-4">
                  No booking data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

      </div>
    </div>
  )
}

export default BookingsPage