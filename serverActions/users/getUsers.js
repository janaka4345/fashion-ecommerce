'use server'
import prisma from "../../utils/prismaClient"
export const getUserById = async (id) => {
    const user = await prisma.user.findFirst({
        where: {
            id: id
        },

    })
    return user
}
export const getUserByEmail = async (email) => {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    return user
}