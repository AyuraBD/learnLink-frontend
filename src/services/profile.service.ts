import { cookies } from "next/headers";
import { env } from "../../env";
import { EditUser } from "@/types";

const API_URL = env.API_URL;

const getProfile = async()=>{
  try{
    const cookieStore = await cookies();
    const url = new URL(`${API_URL}/api/users/me`);
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

const updateMyUserData = async(data:EditUser)=>{
  try{
    const cookieStore = await cookies();
    console.log(cookieStore.toString());
    const res = await fetch(`${API_URL}/api/users/me`, {
      method:"PATCH",
      credentials: "include",
      headers:{
        "Content-type":"application/json",
        Cookie: cookieStore.toString()
      },
      body: JSON.stringify(data),
      cache: "no-store"
    })
    const result = await res.json();
    if(result.error){
      return {data:null, error:{message: "Couldn't update user"}}
    }
    return {data:result, error:null}
  }catch(err){
    return {data:null, error:{message:"Something went wrong"}}
  }
}

export const profileService = {
  getProfile,
  updateMyUserData
}
