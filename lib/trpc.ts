
import { createTRPCReact, createWSClient, getFetch, httpBatchLink, loggerLink, splitLink, wsLink } from "@trpc/react-query"
import { createTRPCNext } from "@trpc/next" 
import superjson from "superjson"

import type { AppRouter } from "trpc-remit-dj"

export const trpc = createTRPCReact<AppRouter>()

// export const api = createTRPCNext<AppRouter>({
//     config() {
//       return {
//         transformer: superjson,
//         links: [
//             loggerLink({
//               enabled: () => true,
//             }),
//             splitLink({
//               condition: (op) => {
//                 return op.type === "subscription"
//               },
//               true: wsLink({
//                 client:  createWSClient({
//                     url: `ws://localhost:4000/trpc/live`,
//                   }),
//               }),
//               false: httpBatchLink({
//                 url: process.env.NEXT_PUBLIC_VERCEL_URL
//                 ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//                 : "http://localhost:4000/trpc/live",
//                 fetch: async (input, init?) => {
//                   const fetch = getFetch()
//                   return fetch(input, {
//                     ...init,
                    
//                   })
//                 },
//                 async headers(ops) {
//                   return {
//                     'Authorization':'Bearer a413a04a-9af6-4ca6-a132-c41bb3d5dbd9',
//                     'yeheyjapan-app': 'yeheyLive',
//                     'token': 'jwt'
//                   }
//                 },
//               }),
//             }),
//           ],
//       };
//     },
//     ssr: false,
//   });
