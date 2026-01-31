"use server";

import { tutorsService } from "@/services/tutor.service";
import { revalidatePath } from "next/cache";

export const getOwnTutorProfile = async()=>{
  const res = await tutorsService.getOwnTutorDetails();
  revalidatePath("/dashboard/tutor-profile")
  return res;
}