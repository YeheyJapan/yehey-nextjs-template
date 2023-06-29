import { DefaultJWT } from "next-auth"
import NextAuth, { DefaultSession } from "next-auth"
import { User } from "database-yehey_live"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: User & DefaultSession['user']
  }

  interface JWT extends DefaultJWT {
    uid?: string
  }  
}

// {
//   /** The user's postal address. */
//   id?: string
//   isVerified: boolean
//   isPhoneVerified: boolean

//   gender?: "Male" | "Female"
//   birthDate?: string
//   customerId?: string

//   createdAt: string
//   updatedAt: string
// } & DefaultSession["user"]