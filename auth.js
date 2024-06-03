import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
// import prisma from './utils/prismaClient'
import prisma from '@/'
import authConfig from "./auth.config"

const prisma = new PrismaClient()

export const {
    auth,
    handlers: { GET, POST },
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
})