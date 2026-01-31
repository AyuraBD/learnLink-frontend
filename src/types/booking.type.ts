export interface Booking{
    tutor: {
        hourlyRate: number
        experience: number
        category: {
            subject: string
        };
    };
    status: string
    student: {
        name: string
        phone: string | null
    };
    sessionDate: string
    id: string
}

export interface StudentBooking {
  id: string;
  sessionDate: string; 
  status: string;
  createdAt: string;
  tutor: {
    id:string;
    user: {
      name: string;
      image: string | null;
    };
  };
}

export interface BookSession{
  sessionDate:string
}
export interface BookTutorId{
  id:string
}