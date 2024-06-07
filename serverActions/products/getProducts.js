'use server'

import { createProductFormSchema } from "../../utils/accountsFormSchema"
import prisma from "../../utils/prismaClient"
export const createAProduct = async ({ values, session }) => {
    const validatedFields = createProductFormSchema.safeParse(values)

    console.log(validatedFields);

    if (!validatedFields.success) {
        return { error: 'Invalid Fields' }
    }

    const { name, description, categoryId, } = validatedFields.data

    try {
        const { id: shopId } = await prisma.shop.findFirst({
            where: {
                sellerId: session.id
            },
            select: {
                id: true
            }
        })
        console.log({ shopId });
        await prisma.product.create({
            data: {
                name,
                description,
                categoryId,
                shopId,
                Images: {
                    create: {
                        image: 'a',
                        alt: 'b'
                    }
                }

            }
        })
        console.log('added');
        return { success: 'Your  new product has been added' }
    } catch (error) {
        console.log(error);
        return { error: 'Something went wrong!' }
    }
}