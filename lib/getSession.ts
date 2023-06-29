/* eslint-disable import/no-anonymous-default-export */

import { headers } from "next/dist/client/components/headers"
import { Session } from "next-auth"

export default async (cookie?: string): Promise<Session> => {
  const response = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? process.env.NEXTAUTH_URL_INTERNAL
        : process.env.NEXTAUTH_URL
    }/api/auth/session`,
    {
      headers: {
        cookie: cookie ?? headers().get("cookie") ?? "",
      },
    }
  )

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export const getJWT = async (cookie?: string): Promise<string> => {
  const response = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? process.env.NEXTAUTH_URL_INTERNAL
        : process.env.NEXTAUTH_URL
    }/api/auth`,
    {
      headers: {
        cookie: cookie ?? headers().get("cookie") ?? "",
      },
    }
  )

  const jwt = await response.json()

  return jwt
}
