import bcrypt from 'bcrypt'
import prisma from '@/lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, password } = await req.json()

  const check = await prisma.user.findUnique({
    where: { email },
  })

  if (check) {
    return NextResponse.json('You are already registered', { status: 400 })
  }

  if (!name || !email || !password) {
    return NextResponse.json('Missing fields', { status: 400 })
  }

  const hashPass = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashPass,
    },
  })

  return NextResponse.json(user)
}