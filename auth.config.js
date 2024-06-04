import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export default {
    providers: [Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // credentials: {
        //     email: {},
        //     password: {},
        // },
        authorize: async (credentials) => {
            console.log(credentials);
            let user = null

            // logic to salt and hash password
            // const pwHash = saltAndHashPassword(credentials.password)

            // logic to verify if user exists
            // user = await getUserFromDb(credentials.email, pwHash)

            if (!user) {
                // No user found, so this is their first attempt to login
                // meaning this is also the place you could do registration
                throw new Error("User not found.")
            }

            // return user object with the their profile data
            return user
        },
    }),
    GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    Google({
        clientId: process.env.AUTH_GOOGLE_ID,
        clientSecret: process.env.AUTH_GOOGLE_SECRET
    })]
}