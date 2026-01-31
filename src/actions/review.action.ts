"use server"

import { reviewService } from "@/services/review.service";
import { Postreview } from "@/types";
import { revalidatePath } from "next/cache";

export const postReviewAction = async(id:string, body:Postreview)=>{
  const res = await reviewService.postReview(id, body);
  revalidatePath("/dashboard/reviews");
  return res;
}