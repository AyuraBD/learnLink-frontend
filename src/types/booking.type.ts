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