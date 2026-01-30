import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { Booking } from '@/types'
import React from 'react'

const BookingsTable = ({booking}:{booking:Booking}) => {
  return (
    <TableRow>
      {/* Student */}
      <TableCell>
        <div className="flex flex-col">
          <span className="font-semibold">{booking.student.name}</span>
          {booking.student.phone && (
            <span className="text-xs text-muted-foreground">
              {booking.student.phone}
            </span>
          )}
        </div>
      </TableCell>

      {/* Tutor */}
      <TableCell>
        <div className="flex flex-col">
          <span className="font-semibold">
            {booking.tutor.category.subject}
          </span>
          <span className="text-xs text-muted-foreground">
            ৳{booking.tutor.hourlyRate}/hr · {booking.tutor.experience} yrs
          </span>
        </div>
      </TableCell>

      {/* Session Date */}
      <TableCell>
        {new Date(booking.sessionDate).toLocaleDateString()}
      </TableCell>

      {/* Status */}
      <TableCell>
        <Badge
          variant={
            booking.status === "CONFIRMED"
              ? "default"
              : booking.status === "PENDING"
              ? "secondary"
              : "destructive"
          }
        >
          {booking.status}
        </Badge>
      </TableCell>

      {/* Booked On (same as sessionDate if you don't have createdAt) */}
      <TableCell className="text-muted-foreground text-sm">
        {new Date(booking.sessionDate).toLocaleDateString()}
      </TableCell>
    </TableRow>
  )
}

export default BookingsTable