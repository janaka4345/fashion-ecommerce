'use server'

import { signIn } from "../../auth";
import { loginFormSchema } from "../../lib/formSchema";

export const loginAction = async (payload) => {
    const validation = loginFormSchema.safeParse(payload)
    if (!validation.success) {
        return { error: 'Invalid data received' }
    }
    const { email, password } = validation.data
    // console.log(validation);
    // try {
    await signIn('credentials', {
        email,
        password,
        redirectTo: '/'
    })
    // } catch (error) {
    // console.log({ error });
    // }
    return { success: 'Data submitted successfully' }
}