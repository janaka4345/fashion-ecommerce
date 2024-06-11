'use server'
import prisma from "../../utils/prismaClient"

export async function updateAProduct({ data, session }) {
    try {
        await prisma.product.update({
            where: {
                id: productId
            },
            data: {

            }
        })
        return { success: 'successful updated the product' }
    } catch (error) {
        console.log(error);
        return { error: 'error occurred' }
    }

}