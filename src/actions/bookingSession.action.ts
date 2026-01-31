"use server";

import { bookingsService } from "@/services/booking.service";
import { BookSession } from "@/types";

export const createBooking = async(id:string, data:BookSession)=>{
  const res = await bookingsService.postBooking(id,data);
  return res;
}