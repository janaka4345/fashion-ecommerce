import z from 'zod'
export const startSellingFormSchema = z.object({
    shopName: z.string().trim().min(2, "Shop name must be at least 2 characters long").max(15, "Name must be less than 15 characters"),
    description: z.string().trim().min(2, "Shop description must be at least 2 characters long").max(30, "Name must be less than 30 characters long"),
    logo: z.string().optional(),
})

export const createProductFormSchema = z.object({
    name: z.string().trim().min(2, "Shop name must be at least 2 characters long").max(15, "Name must be less than 15 characters"),
    description: z.string().trim().min(2, "Shop description must be at least 2 characters long").max(30, "Name must be less than 30 characters long"),
    // images: z.array(z.string()),
    images: z.string(),
    categoryId: z.string()
}) 