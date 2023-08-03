import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prismadb'

import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials')
        }

        const { email, password } = credentials

        const user = await prisma.user.findUnique({
          where: {
            email: email,
          },
        })

        if (!user || !user?.hashPass) {
          throw new Error('Invalid credentials')
        }

        const passwordCheck = await bcrypt.compare(
          password,
          user.hashPass
        )

        if (!passwordCheck) {
          throw new Error('Invalid credentials')
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development', // disable when ready for production
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
