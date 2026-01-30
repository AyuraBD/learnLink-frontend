export interface User {
  id: string
  name: string
  email: string
  emailVerified: boolean
  image?: string
  createdAt: string
  updatedAt: string
  role:string
  status: string
  phone?: string
};

export interface UserStatus{
  status:string
}