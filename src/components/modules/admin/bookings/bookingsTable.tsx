import { Badge } from '@/components/ui/badge'
import { TableCell, TableRow } from '@/components/ui/table'
import { Booking } from '@/types'

const BookingsTable = ({booking}:{booking:Booking}) => {
  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-col">
          <span className="font-semibold">{booking?.student?.name}</span>
          {booking?.student?.phone && (
            <span className="text-xs text-muted-foreground">
              {booking?.student?.phone}
            </span>
          )}
        </div>
      </TableCell>

      <TableCell>
        <div className="flex flex-col">
          <span className="font-semibold">
            {booking?.tutor?.category?.subject}
          </span>
          <span className="text-xs text-muted-foreground">
            ৳{booking?.tutor?.hourlyRate}/hr · {booking?.tutor?.experience} yrs
          </span>
        </div>
      </TableCell>

      <TableCell>
        {new Date(booking?.sessionDate).toLocaleDateString()}
      </TableCell>

      <TableCell>
        <Badge
          variant={
            booking?.status === "CONFIRMED"
              ? "default"
              : booking?.status === "PENDING"
              ? "destructive"
              : "secondary"
          }
        >
          {booking?.status}
        </Badge>
      </TableCell>

      <TableCell className="text-muted-foreground text-sm">
        {new Date(booking?.sessionDate).toLocaleDateString()}
      </TableCell>
    </TableRow>
  )
}

export default BookingsTable