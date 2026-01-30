"use server";

import { tutorsService } from "@/services/tutor.service";
import { CreateTutor } from "@/types";

export const createTutor = async(data:CreateTutor)=>{
  const res = await tutorsService.createTutor(data);
  return res;
}