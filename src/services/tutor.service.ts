import { env } from "../../env";

const API_URL = env.API_URL;

const getTutors = async()=>{
  try{
    const url = new URL(`${API_URL}/api/tutors`);
    const res = await fetch(url.toString());
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

export const tutorsService = {
  getTutors,
  getTutorById
}