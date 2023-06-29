"use client"

import { signIn, useSession } from "next-auth/react"
import { Button, Card, CardContent, CardHeader, CardTitle } from "shadcn-ui"

import { Icons } from "@/components/icons"
import { useRouter } from "next/navigation"

export function LoginAccount() {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'authenticated') push('/')

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-center text-2xl">
          Sign your account
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid">
          <Button
            variant="outline"
            onClick={() =>
              signIn("facebook", {
                redirect: true,
              })
            }
          >
            <Icons.facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
