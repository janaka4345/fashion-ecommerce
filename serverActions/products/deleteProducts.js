'use server'
import prisma from "../../utils/prismaClient"

export async function deleteProductById({ productId, session }) {
    try {
        await prisma.product.delete({
            where: {
                id: productId
            }
        })
        return { success: 'successful deleted the product' }
    } catch (error) {
        console.log(error);
        return { error: 'error occurred' }
    }

}