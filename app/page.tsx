import { redirect } from "next/navigation"

import getSession from "@/lib/getSession"

export default async function IndexPage() {
  const session = await getSession()

  if (!session?.user) redirect("/sign-in")

  return (
    <section className="container flex justify-center pb-8 pt-6 md:py-10"></section>
  )
}
