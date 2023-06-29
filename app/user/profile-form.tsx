"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn, useSession } from "next-auth/react"
import { useFieldArray, useForm } from "react-hook-form"
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  toast,
} from "shadcn-ui"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "shadcn-ui/components/form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Form } from "@/components/form/form"

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

export function ProfileForm() {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      signIn("facebook")
    },
  })

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="w-[30vw]">
      <Form<ProfileFormValues>
        className="space-y-8"
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: {
            name: data?.user?.name ?? "",
            email: data?.user?.email ?? "",
          },
        }}
      >
        {({ control, formState: { isSubmitting } }) => (
          <>
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" {...field} disabled />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Update profile</Button>
          </>
        )}
      </Form>
    </div>
  )
}
