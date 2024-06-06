'use server'
import { revalidatePath } from "next/cache"
import { startSellingFormSchema } from "../../utils/accountsFormSchema"

export const createShop = async ({ payload, userId }) => {

    const validatedData = startSellingFormSchema.safeParse(payload)

    if (!validatedData.success) {
        return { error: 'Invalid Data' }
    }
    const { shopName, description, logo } = validatedData.data
    try {
        await prisma.shop.create({
            data: {
                name: shopName,
                description,
                logo,
                seller: {
                    connect: {
                        id: userId
                    }
                }
            }

        })
        await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                role: 'SELLER'
            }

        })
        revalidatePath('/')
        return { success: 'Your shop has been created successful' }
    } catch (error) {
        console.log(error);
        return { error: 'something went Wrong' }
    }

}