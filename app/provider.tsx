"use client"

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  createWSClient,
  getFetch,
  httpBatchLink,
  loggerLink,
  splitLink,
  wsLink,
} from "@trpc/client"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import { SessionProvider } from "next-auth/react"
import superjson from "superjson"


import { trpc } from "../lib/trpc"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault("Asia/Tokyo")

const Provider = ({
  children,
  jwt,
}: {
  children: React.ReactNode
  jwt?: string
}) => {
  
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 5000 } },
      })
  )

  const url = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:5310/v1/trpc"

  const [wsTrpcClient] = useState(() =>
    createWSClient({
      url: `ws://localhost:5310/v1/trpc`,
      retryDelayMs: () => 2500,

    })
  )
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        splitLink({
          condition: (op) => {
            return op.type === "subscription"
          },
          true: wsLink({
            client: wsTrpcClient,
          }),
          false: httpBatchLink({
            url,
            fetch: async (input, init?) => {
              const fetch = getFetch()
              return fetch(input, {
                ...init,
              })
            },
            async headers(ops) {
              return {
                Authorization: "Bearer a413a04a-9af6-4ca6-a132-c41bb3d5dbd9",
                "yeheyjapan-app": "yeheyLive",
                token: jwt,
              }
            },
          }),
        }),
      ],
      transformer: superjson,
    })
  )

  return (
    <SessionProvider>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          {children}
          {!process.env.NEXT_PUBLIC_VERCEL_URL && (
            <ReactQueryDevtools position="bottom-right" />
          )}
        </QueryClientProvider>
      </trpc.Provider>
    </SessionProvider>
  )
}

export default Provider
