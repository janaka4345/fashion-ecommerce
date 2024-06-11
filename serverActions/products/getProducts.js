'use server'

import prisma from "../../utils/prismaClient"
export const getAllProductsByShopId = async ({ shopId }) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                shopId: shopId
            },
            select: {
                id: true,
                name: true,
                categoryId: true,
                description: true,
                Images: {
                    select: {
                        image: true,
                        alt: true
                    }
                },
                tags: true,

            }
        })
        // console.log(products);
        return products
    } catch (error) {
        console.log(error);
        return { error: 'Something went wrong!' }
    }
}

export const getAllProducts = async () => {
    try {
        const products = await prisma.product.findMany({
            select: {
                id: true,
                categoryId: true,
                description: true,
                Images: {
                    select: {
                        image: true,
                        alt: true
                    }
                },
                tags: true,
                name: true,
                category: {
                    select: {
                        name: true
                    }
                },
                shop: {
                    select: {
                        id: true,
                        logo: true,
                        name: true,
                        rating
                    }
                }

            }
        })
        // console.log(products);
        return products
    } catch (error) {
        console.log(error);
        return { error: 'Something went wrong!' }
    }
}