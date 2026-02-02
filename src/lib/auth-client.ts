import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://learnlink-iota.vercel.app"
})