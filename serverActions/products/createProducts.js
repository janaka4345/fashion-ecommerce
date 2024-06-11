'use server'

import { cloudConfig } from "../../cloudinary.config"
import { createProductFormSchema } from "../../utils/accountsFormSchema"
import { v2 as cloudinary } from "cloudinary";
import prisma from "../../utils/prismaClient"
export const createAProduct = async ({ data, session }) => {

    const validatedFields = createProductFormSchema.safeParse(Object.fromEntries(data.entries()))

    // console.log(validatedFields);
    //TODO validate image files
    const ImageUrls = [];
    for (let index = 0; index < data.get('length'); index++) {

        const file = data.get(`${index}`);
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)

        await new Promise((resolve, reject) => {
            cloudConfig
            cloudinary.uploader.upload_stream({ folder: 'fassion-ecommerse' }, (error, result) => {
                if (error) {
                    reject(error)
                    return
                }
                // console.log({ result });
                ImageUrls.push({ image: result.secure_url, alt: `product-image${index}` })

                resolve(result)
            }).end(buffer)
        })
        // console.log({ response });

    }

    // const data2 = data.get('images')
    // console.log(data2);


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
        // console.log({ shopId });
        await prisma.product.create({
            data: {
                name,
                description,
                categoryId,
                shopId,
                Images: {
                    create: ImageUrls
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