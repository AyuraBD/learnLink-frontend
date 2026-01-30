export interface Profile{
  id: string
  name: string
  email: string
  phone?: string
  role: "ADMIN" | "TUTOR" | "STUDENT"
  status: "ACTIVE" | "BAN"
  emailVerified: boolean
  image?: string
  createdAt: string
  updatedAt: string
}