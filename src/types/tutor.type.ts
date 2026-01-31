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

export interface CreateTutor{
  bio:string
  hourlyRate:number
  experience: number
  availability: string
  categoryId:string
}

export interface TutorProfile {
  id: string;
  bio: string;
  hourlyRate: number;
  experience: string;
  availability: string;
  category: {
    name: string;
    subject: string;
    description: string;
  };
}
export interface EditTutorProfile {
  bio: string;
  hourlyRate: number;
  experience: number;
  availability: string;
  category: {
    id: string;
    name: string;
    subject: string;
    description: string;
  };
}
