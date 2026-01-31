import { cookies } from "next/headers";
import { env } from "../../env";
import { BookSession } from "@/types";

const API_URL = env.API_URL;

const getBookings = async()=>{
  try{
    const cookieStore = await cookies();
    const url = new URL(`${API_URL}/api/bookings`);
    const res = await fetch(url.toString(),{
      headers:{
        Cookie: cookieStore.toString()
      },
      cache: "no-store"
    });
    const data = await res.json();
    return {data:data, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

const postBooking = async(id:string, body:BookSession)=>{
  try{
    const cookieStore = await cookies();
    const url = new URL(`${API_URL}/api/bookings/${id}`);
    const res = await fetch(url.toString(),{
      method: "POST",
      headers:{
        "Content-type": "application/json",
        Cookie: cookieStore.toString()
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });
    const data = await res.json();
    console.log(data);
    if(data.error){
      return {data:null, error:{message:"Couldn't book session"}}
    }
    return {data:data, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

export const bookingsService = {
  getBookings,
  postBooking
}
