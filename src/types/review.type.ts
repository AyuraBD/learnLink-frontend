export interface Postreview{
  id:string
  rating: number
  comment?: string
  student:{
    name: string
  }
}