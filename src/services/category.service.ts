import { CategoryInput } from "@/types";
import { env } from "../../env";
import { cookies } from "next/headers";

const API_URL = env.API_URL;

const createCategories = async(data: CategoryInput)=>{
  try{
    const cookieStore = await cookies();
    const url = new URL(`${API_URL}/api/categories/create`);
    const res = await fetch(url.toString(),{
      method: "POST",
      credentials: "include",
      headers:{
        "Content-type":"application/json",
        Cookie: cookieStore.toString()
      },
      body: JSON.stringify(data),
      cache: "no-store"

    });
    const resData = await res.json();
    if(resData.error){
      return {data:null, error:{message: "Couldn't created"}}
    }
    return {data:resData, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

const getCategories = async()=>{
  try{
    const cookieStore = await cookies();
    const url = new URL(`${API_URL}/api/categories`);
    const res = await fetch(url.toString(),{
      headers:{
        Cookie: cookieStore.toString()
      }
    });
    const resData = await res.json();
    if(resData.error){
      return {data:null, error:{message: "Couldn't created"}}
    }
    return {data:resData, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

const deleteCategory = async(id:string)=>{
  try{
    const cookieStore = await cookies();
    const url = new URL(`${API_URL}/api/categories/delete/${id}`);
    const res = await fetch(url.toString(),{
      method: "DELETE",
      headers:{
        Cookie: cookieStore.toString()
      }
    });
    const resData = await res.json();
    if(resData.error){
      return {data:null, error:{message: "Couldn't delete category"}}
    }
    return {data:resData, error:null}
  }catch(err){
    return {data:null, error:{message:err}}
  }
}

export const categoryService = {
  getCategories,
  createCategories,
  deleteCategory
}