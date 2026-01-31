export interface TutorReview {
  id: string;
  rating: number;
  comment: string;
  student: {
    name: string;
  };
  tutor: {
    category: {
      name: string;
      subject: string;
    };
  };
}