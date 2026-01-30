import { cookies } from "next/headers"
import { env } from "../../env";
import { UserStatus } from "@/types";

const auth_url = env.AUTH_URL;
const API_URL = env.API_URL;

const getSession = async()=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${auth_url}/get-session`,{
      headers:{
        Cookie: cookieStore.toString()
      },
      cache: "no-store"
    });
    const session = await res.json();
    if(session === null){
      return {data:null, error:{message:"Session is missing"}}
    }
    return {data: session, error: null};
  }catch(err){
    console.log(err)
  }
}

const getUsers = async()=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/users`, {
      headers:{
        Cookie: cookieStore.toString()
      },
      cache: "no-store"
    })
    const data = await res.json();
    return {data:data, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

const updateUserStatus = async(id:string, data:UserStatus)=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/users/${id}`, {
      method:"PATCH",
      credentials: "include",
      headers:{
        "Content-type":"application/json",
        Cookie: cookieStore.toString()
      },
      body: JSON.stringify(data),
      cache: "no-store"
    })
    if(!res.ok){
      throw new Error("Failed to update user status")
    }
    const result = await res.json();
    return {data:result, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

export const userService = {
  getSession,
  getUsers,
  updateUserStatus
}