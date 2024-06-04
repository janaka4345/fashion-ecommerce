'use server'
import prisma from "../../utils/prismaClient";
import { registerSchema } from "../../lib/formSchema";

export const registerAction = async (payload) => {
    const validation = registerSchema.safeParse(payload)
    if (!validation.success) {
        return { error: 'Invalid data received' }
    }
    // const {email}=validation
    console.log(validation);
    // TODO encrypt password
    // TODO check conforma password 
    const { email, firstName, lastName, password } = validation.data
    const response = await prisma.user.create({
        data: { email, firstName, lastName, password }
    })
    //TODO send verification enamil
    //TODO existing emaul check
    // console.log({ response });
    return { success: 'Data submitted successfully' }
}