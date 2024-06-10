import z from 'zod'

const MAX_FILE_SIZE = 2000000
const FILE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
]
export const startSellingFormSchema = z.object({
    shopName: z.string().trim().min(2, "Shop name must be at least 2 characters long").max(15, "Name must be less than 15 characters"),
    description: z.string().trim().min(2, "Shop description must be at least 2 characters long").max(30, "Name must be less than 30 characters long"),
    logo: z.string().optional(),
})

export const createProductFormSchema = z.object({
    name: z.string().trim().min(2, "Shop name must be at least 2 characters long").max(15, "Name must be less than 15 characters"),
    description: z.string().trim().min(2, "Shop description must be at least 2 characters long").max(30, "Name must be less than 30 characters long"),
    // images: z.array(z.string()),
    images:
        typeof window === 'undefined' ?
            z.any()
                .refine((file) => file?.length >= 1, 'File is required.')
                // .refine((files) => files.length >= 1 ? FILE_TYPES.includes(files?.values?.[0]?.type) ? true : false : true, 'Invalid file. choose either JPEG or PNG image')
                // .refine((files) => files.length >= 1 ? files[0]?.size <= MAX_FILE_SIZE ? true : false : true, 'Max file size allowed is 8MB.')
                .optional()
            :
            z.instanceof(FileList)
                .refine((file) => file?.length >= 1, 'File is required.')
                .refine((files) => files.length >= 1 ? FILE_TYPES.includes(files?.[0]?.type) ? true : false : true, 'Invalid file. choose either JPEG or PNG image')
                .refine((files) => files.length >= 1 ? files[0]?.size <= MAX_FILE_SIZE ? true : false : true, 'Max file size allowed is 8MB.')
                .optional()

    ,
    categoryId: z.string()
}) 