"use client"

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

import * as z from "zod";
import { useForm } from "@tanstack/react-form"
import { createCategoryAction } from "@/actions/category.action"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"

const AddCategoryInput =()=> {
  const formSchema = z.object({
    name: z.string().min(1, "This field is required"),
    subject: z.string().min(1,"This field is required"),
    description:z.string().min(10, "Minimum 10 character length.")
  });
  const form = useForm({
    defaultValues:{
      name: "",
      subject: "",
      description: "",
    },
    validators:{
      onSubmit: formSchema
    },
    onSubmit: async ({value})=>{
      const toastId = toast.loading("Creating category...");
      const categoryData = {
        name: value.name,
        subject:value.subject,
        description: value.description
      }
      try{
        const res = await createCategoryAction(categoryData);
        if(res.error){
          toast.error("Category creation failed", {id: toastId});
          return
        }
        toast.success("Category created successfully", {id: toastId});
      }catch(err){
        toast.error("Internal server error.", {id: toastId})
      }
    }
  });

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-xl">Add New Category</CardTitle>
      </CardHeader>

      <CardContent>
        <form id="category-form" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }} className="space-y-4">
          <FieldGroup className="gap-4">
            <form.Field 
            name="name" 
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                  <Input type="text"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}/>
            <form.Field 
            name="subject" 
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Subject</FieldLabel>
                  <Input type="text"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}/>
            <form.Field 
            name="description" 
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                  <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}/>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="category-form" className="w-full" type="submit">Create Category</Button>
      </CardFooter>
    </Card>
  )
}

export default AddCategoryInput;
