import { z } from "zod"

const envVariables = z.object({
  DATABASE_URL: z.string(),
  NEXT_PUBLIC_REST_FACEBOOK_ID: z.string(),
  NEXT_PUBLIC_REST_FACEBOOK_SECRET: z.string(),
  UPSTASH_REDIS_REST_URL: z.string(),
  UPSTASH_REDIS_REST_TOKEN: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
