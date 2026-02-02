import { cookies } from "next/headers";
import { env } from "../../env";
import { CreateTutor } from "@/types";

const API_URL = env.API_URL;
interface GetSearchParams{
  search?: string
}
const getTutors = async(search?:string)=>{
  try{
    const url = new URL(`${API_URL}/api/tutors`);
    if(search){
      url.searchParams.set("search", search);
    }
    const res = await fetch(url.toString(),{
      cache:"no-store"
    });
    const data = await res.json();
    return {data:data, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

const getOwnTutorDetails = async()=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/tutors/me`, {
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

const getTutorById = async(id:string)=>{
  try{
    const res = await fetch(`${API_URL}/api/tutors/${id}`);
    const data = await res.json();
    return {data:data, error:null}
  }catch(err){
    return {data:null, error:{message: "Data couldn't found"}}
  }
}

const createTutor = async(tutorData: CreateTutor)=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/tutors/create`,{
      method: "POST",
      headers:{
        "Content-type": "application/json",
        Cookie: cookieStore.toString()
      },
      body: JSON.stringify(tutorData)
    })
    const {result} = await res.json();

    if(result.error){
      return {data:null, error: {message: result.error.message || "Tutor couldn't create"}}
    }
    return {data:result.data, error:null}
  }catch(err){
    return {data:null, error:{message:"Couldn't create tutor profile"}}
  }
}

const deleteOwnTutorProfile = async()=>{
  try{
    const cookieStore = await cookies();
    const res = await fetch(`${API_URL}/api/tutors/delete`, {
      method:"DELETE",
      headers:{
        Cookie: cookieStore.toString()
      },
      cache: "no-store"
    })
    const data = await res.json();
    if(data.error){
      return {data:null, error:{message:"Tutor profile can not be delete"}}
    }
    return {data:data, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}



export const tutorsService = {
  getTutors,
  getOwnTutorDetails,
  getTutorById,
  createTutor,
  deleteOwnTutorProfile
}