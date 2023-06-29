"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { DropdownMenuItem, DropdownMenuShortcut } from "shadcn-ui"

export const LogOutMenu = () => {
  const logout = () => {
    signOut({
        redirect: true,
        callbackUrl: '/'
    })
  }

  return (
    <>
      <DropdownMenuItem onClick={() => logout()}>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </>
  )
}
