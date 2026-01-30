"use client";
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import * as z from "zod";
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.email(),
  password:z.string().min(6, "Password must be 6 characters long"),
})

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const router = useRouter();
  const form = useForm({
    defaultValues:{
      email: "",
      password: "",
    },
    validators:{
      onSubmit: formSchema
    },
    onSubmit: async ({value})=>{
      const toastId = toast.loading("Logging in...");
      try{
        const {data, error} = await authClient.signIn.email(value);
        if(error){
          toast.error(error.message,{id:toastId})
          return
        }
        toast.success("Logged in successfully",{id:toastId})
        router.push("/");
      }catch(err){
        toast.error("Internal server error.", {id:toastId})
      }
    }
  })
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-2xl">Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="login-form" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field
            name="email"
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input type="email"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  placeholder="Your email"
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}
            />
            <form.Field
            name="password"
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <Input type="password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  placeholder="Password(Must be 6 characters)"
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="login-form" type="submit" className="w-full">Login</Button>
      </CardFooter>
      <FieldGroup>
        <Field>
          <FieldDescription className="px-6 text-center">
            Don't have an account? <Link href="/register">Register</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </Card>
  )
}
