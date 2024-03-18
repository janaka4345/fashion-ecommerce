import z from 'zod'
const phoneRegex = /^\(?([0-9]{3})\)?[-. ]([0-9]{3})[-. ]([0-9]{4})$/;
export const contactFormSchema = z.object({
    name: z.string().trim().min(2, "Name must be at least 2 characters long"),
    email: z.string().email(),
    phoneNumber: z.string().trim()
        .regex(phoneRegex, "Invalid US phone number format (e.g., 123-456-7890)")
        .optional(), // Adjust if phone number is mandatory

    subject: z.string().optional(),
    message: z.string().max(500, "Message exceeds maximum length of 500 characters"),

}) 