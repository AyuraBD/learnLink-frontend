"use client";

import { categoryAction } from '@/actions/category.action';
import { createTutor } from '@/actions/createTutor.action';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Category, CreateTutor } from '@/types';
import { useForm } from '@tanstack/react-form';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import * as z from "zod";

const BecomeTutorForm = () => {
  const [categories, setCategories] = useState<Category>({
    id: "",
    createdAt: "",
    name: "",
    subject: "",
    description: "",
    categoryId:""
  })

  useEffect(()=>{
    (async()=>{
      const res = await categoryAction();
      if(res?.data?.result){
        const category = res.data.result;
        setCategories({
          id: category.id || "",
          createdAt: category.createdAt || "",
          name: category.name || "",
          subject: category.subject || "",
          description: category.description || "",
          categoryId: category.categoryId || ""
        })
      }
    })()
  },[]);
  console.log(categories);

  const tutorSchema = z.object({
    bio: z
      .string()
      .min(10, "Bio must be at least 10 characters long.")
      .max(100, "Bio can not be bigger than 100 characters"),
    hourlyRate: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), { message: "Hourly rate must be a number" }),
    experience: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => !isNaN(val), { message: "Experience must be a number" }),
    availability: z.string().nonempty("Availability is required"),
    categoryId: z.string().optional()
  });

  const form = useForm({
    defaultValues:{
      bio: "",
      hourlyRate: "",
      experience: "",
      availability:"",
      categoryId:categories.categoryId
    },
    validators:{
      onSubmit: tutorSchema
    },
    onSubmit: async ({value})=>{
      const toastId = toast.loading("Creating tutor...");
      const tutorData: CreateTutor = {
        bio: value.bio,
        hourlyRate: Number(value.hourlyRate), 
        experience: Number(value.experience), 
        availability: value.availability,
        categoryId: categories.categoryId
      };
      console.log("Create tutor from client:", tutorData);
      try{
        const res = await createTutor(tutorData);
        if(res.error){
          toast.error("Tutor creation failed", {id: toastId})
        }        
        toast.success("Tutor created successfully", {id: toastId});
      }catch(err){
        toast.error("Internal server error.", {id: toastId})
      }
    }
  });

  return (
    <Card className='max-w-3xl mx-auto'>
      <CardHeader>
        <CardTitle>Create Tutor</CardTitle>
        <CardDescription>You can share your knowledge</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="tutor-form" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field 
            name="bio" 
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Bio</FieldLabel>
                  <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  placeholder='Write about yourself'
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}/>
            <form.Field 
            name="hourlyRate" 
            children={(field)=>{
            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Hourly Rate</FieldLabel>
                  <Input type="number"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  placeholder='Place your rate'
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}/>
            <form.Field 
            name="experience" 
            children={(field)=>{
              const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field>
                  <FieldLabel htmlFor={field.name}>Experience (in Year)</FieldLabel>
                  <Input type="number"
                  id={field.name}
                  name={field.name}
                  value={field.state.value ?? ""}
                  placeholder='Your experience'
                  onChange={(e)=>field.handleChange(e.target.value)}
                  />
                  {isInvalid && (
                    <FieldError errors={field.state.meta.errors}></FieldError>
                  )}
                </Field>
              )
            }}/>
            <form.Field
              name="availability"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Availability</FieldLabel>
                    <select
                      id={field.name}
                      name={field.name}
                      value={field.state.value ?? ""}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="">Select availability</option>
                      <option value="AVAILABLE">Available</option>
                      <option value="NOT_AVAILABLE">Not Available</option>
                    </select>

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />
            <form.Field
              name="categoryId"
              children={(field) => {
                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>Categories</FieldLabel>
                    <select
                      id={field.name}
                      name={field.name}
                      value={field.state.value ?? ""}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="border rounded px-2 py-1 w-full"
                    >
                      <option value="">Select Category</option>
                      <option value="AVAILABLE">Available</option>
                      <option value="NOT_AVAILABLE">Not Available</option>
                    </select>

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </Field>
                );
              }}
            />

          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form='tutor-form' className='w-full'>Create Tutor</Button>
      </CardFooter>
    </Card>
  )
}

export default BecomeTutorForm
