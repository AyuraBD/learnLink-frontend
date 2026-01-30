export interface Category{
  id: string
  createdAt: string
  name: string
  subject: string
  description?: string
}
export interface CategoryInput{
  name: string
  subject: string
  description?: string
}