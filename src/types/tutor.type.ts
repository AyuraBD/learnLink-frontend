export interface Tutor {
  id: string
  bio: string
  hourlyRate: number
  experience: number
  availability: string
  category: {
    name: string
    subject: string
    description: string
  };
  user:{
    name: string
    image?:string
  }
  _count: {
    reviews: number
  };
  reviews: {
    rating: number
    comment: string
  }[];
};