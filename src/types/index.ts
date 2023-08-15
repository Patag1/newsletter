import { User } from "@prisma/client"
import { ApiReq } from "./zod"

export interface IParams {
  id?: string
}

export type dbUser = Omit<
  User,
  'liked' | 'saved' | 'createdAt' | 'updatedAt'
> & {
  liked: ApiReq[]
  saved: ApiReq[]
  createdAt: string
  updatedAt: string
}