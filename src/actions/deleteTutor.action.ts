"use server";

import { tutorsService } from "@/services/tutor.service";
import { revalidatePath } from "next/cache";

export const deleteTutorProfile = async()=>{
  const res = await tutorsService.deleteOwnTutorProfile();
  revalidatePath("/dashboard/tutor-profile")
  return res;
}