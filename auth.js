import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from './utils/prismaClient'
import authConfig from "./auth.config"
import { getUserById } from "./serverActions/users/getUsers"

export const {
    auth,
    handlers,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (!token.sub) {
                return token
            }

            const existingUser = await getUserById(token.sub)
            if (!existingUser) {
                return token
            }

            token.role = existingUser.role

            return token
        },
        async session({ session, token }) {

            if (token.sub && session.user) {
                session.user.id = token.sub
                session.user.role = token.role
            }
            return session
        },
    },
    ...authConfig,
})