import { cookies } from "next/headers";
import { env } from "../../env";
import { Postreview } from "@/types";
const API_URL = env.API_URL;

const getOwnReviews = async()=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/reviews/me`, {
      headers:{
        Cookie: cookieStore.toString()
      },
      cache: "no-store"
    })
    const result = await res.json();
    if(result.error){
      return {data:null, error:{message:"Failed to fetch reviews"}}
    }
    return {data:result, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

const postReview = async(id:string, body:Postreview)=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/reviews/create/${id}`, {
      method:"POST",
      headers:{
        "Content-type": "application/json",
        Cookie: cookieStore.toString()
      },
      body: JSON.stringify(body),
      credentials: "include",
      cache: "no-store"
    })
    const result = await res.json();
    if(result.error){
      return {data:null, error:{message:"Failed to post review"}}
    }
    return {data:result, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

export const reviewService = {
  getOwnReviews,
  postReview
}