'use server'
import { signIn } from "../../auth";
export const authLoginAction = async (provider) => {
    await signIn(provider, {
        redirectTo: '/'
    })
}