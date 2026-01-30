export interface Category{
  id: string
  createdAt: string
  name: string
  subject: string
  description?: string,
  categoryId:string
}
export interface CategoryInput{
  name: string
  subject: string
  description?: string
}