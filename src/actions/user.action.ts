"use server"

import { userService } from "@/services/user.service"
import { UserStatus } from "@/types"
import { revalidatePath } from "next/cache";

export const updateUserStatus = async(id:string,data:UserStatus)=>{
  const res = await userService.updateUserStatus(id,data);
  revalidatePath("/admin/users")
  return res;
}