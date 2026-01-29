import { cookies } from "next/headers"
import { env } from "../../env";

const auth_url = env.AUTH_URL;
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

export const userService = {
  getSession
}