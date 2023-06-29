import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { Redis } from "@upstash/redis"
import { prisma } from "db-remit-dj"
import NextAuth from "next-auth/next"
import FacebookProvider from "next-auth/providers/facebook"
import type { AuthOptions } from "next-auth/src"

const redis = Redis.fromEnv()

export const authOptions: AuthOptions = {
  // adapter: UpstashRedisAdapter(redis, {
  //   baseKeyPrefix: "yehey_live:",
  // }),
  adapter: PrismaAdapter(prisma),
  providers: [
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_REST_FACEBOOK_ID,
      clientSecret: process.env.NEXT_PUBLIC_REST_FACEBOOK_SECRET,
    }),
  ],
  secret: `imboca4Cld0tB+UkSC2ExOc4XjaP/BE9ZpKY5v1prrSGV/WSJuSVFT86GlE9Obvg
  bAj3X6yv5i8Zkl8khkjjPY4BEXUMMwXkgE8g1mwxmL8ykNFY9IEykrQ/bkHFOEgj
  1c7jWbQWlxdRpujMnLES47tA0DzeRa+FLgX5s3ezz75QHmKBrqT6VIJUgBt81HLr
  RUSpFUg1e0WbVF/uqqfnWczD3q0XvEtdqdsebbL786S5+cquoFJQyrIRvdZuiDYa
  UYsRxvT8wPWhdAjyG87GzLUPeBwLQaRY3yl2RJHVVKcKI/g/kjQPSfKslfp9Zzc9
  KYOPiabzYtzvJOCRtFG/wQ==`,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    session: async (props: { session: any; user: any; token: any }) => {
      const { session, user, token } = props
      if (!user?.isVerified) {
        session.user = token

        return session
      } else {
        session.user = token
        session.token = token
        return session
      }
    },
    async redirect() {
      return `/`
    },
    async jwt({ token, user, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
