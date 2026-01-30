"use server";

import { profileService } from "@/services/profile.service"
import { EditUser } from "@/types";
import { revalidatePath } from "next/cache";

export const getProfileData = async()=>{
  const res = await profileService.getProfile();
  return res;
}

export const updateProfileData = async(data:EditUser)=>{
  const res = await profileService.updateMyUserData(data);
  revalidatePath("/dashboard/profile");
  return res;
}