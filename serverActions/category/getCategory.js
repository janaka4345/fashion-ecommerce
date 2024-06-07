'use server'
import prisma from "../../utils/prismaClient"
export const getCategory = async () => {
    const response = await prisma.category.findMany({})
    return { response }
}