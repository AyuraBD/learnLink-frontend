"use server"

import { reviewService } from "@/services/review.service";
import { Postreview, ReviewPost } from "@/types";
import { revalidatePath } from "next/cache";

export const postReviewAction = async(id:string, body:ReviewPost)=>{
  const res = await reviewService.postReview(id, body);
  revalidatePath("/dashboard/reviews");
  return res;
}