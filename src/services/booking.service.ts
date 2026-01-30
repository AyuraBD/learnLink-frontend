import { cookies } from "next/headers";
import { env } from "../../env";

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

export const bookingsService = {
  getBookings
}
