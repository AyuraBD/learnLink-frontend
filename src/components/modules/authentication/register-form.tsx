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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.email(),
  password:z.string().min(6, "Password must be 6 characters long"),
  role:z.string().min(1, "This field is required")
})

export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues:{
      name: "",
      email: "",
      password: "",
      role:""
    },
    validators:{
      onSubmit: formSchema
    },
    onSubmit: async ({value})=>{
      console.log(value)
      const toastId = toast.loading("Creating user...");
      try{
        const {data, error} = await authClient.signUp.email(value);
        if(error){
          toast.error(error.message,{id:toastId})
          return
        }
        toast.success("User created successfully",{id:toastId})
      }catch(err){
        toast.error("Internal server error.", {id:toastId})
      }
    }
  })
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Register here</CardTitle>
        <CardDescription>
          Enter your information below to register
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="register-form" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field
            name="name"
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Full name</FieldLabel>
                  <Input type="text"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  placeholder="Your full name"
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
                  <FieldLabel htmlFor={field.name}>Full name</FieldLabel>
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
            <form.Field
            name="role"
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Role</FieldLabel>
                  <Select value={field.state.value} onValueChange={(value)=>field.handleChange(value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="STUDENT">Student</SelectItem>
                      <SelectItem value="TUTOR">Tutor</SelectItem>
                    </SelectContent>
                  </Select>
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
        <Button form="register-form" type="submit" className="w-full">Register</Button>
      </CardFooter>
      <FieldGroup>
        <Field>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/login">Login</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </Card>
  )
}
