"use server";

import { categoryService } from "@/services/category.service";
import { CategoryInput } from "@/types"
import { revalidatePath } from "next/cache";

export const categoryAction = async()=>{
  const {data} = await categoryService.getCategories();
  revalidatePath("/admin/categories");
  return data.result;
}

export const createCategoryAction = async(data:CategoryInput)=>{
  const res = await categoryService.createCategories(data);
  revalidatePath("/admin/categories");
  return res;
}