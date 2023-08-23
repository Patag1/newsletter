import { User } from "@prisma/client"

export interface IParams {
  id?: string
}

export type dbUser = Omit<
  User,
  'createdAt' | 'updatedAt'
> & {
  createdAt: string
  updatedAt: string
}