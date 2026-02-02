export interface Postreview{
  id:string
  rating: number
  comment?: string
  student:{
    name: string
  }
}

export interface ReviewPost{
  rating: number
  comment?: string
}