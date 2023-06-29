"use client"

import { LoginAccount } from "./login"

export default function AuthenticationPage() {

  return (
    <>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none">
        <div className="">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <LoginAccount />
          </div>
        </div>
      </div>
    </>
  )
}
