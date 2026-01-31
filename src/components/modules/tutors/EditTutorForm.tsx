"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // optional toast library
import { Category, EditTutorProfile} from "@/types";
import { updateProfileData } from "@/actions/profile.action";
import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { categoryAction } from "@/actions/category.action";
import { getOwnTutorProfile } from "@/actions/getTutor.action";

interface EditTutorFormProps {
  onSuccess?: () => void;
}
export default function EditTutorForm({ onSuccess }: EditTutorFormProps) {
  const [categories, setCategories] = useState<Category[]>([])
  const [tutorProfile, setTutorProfile] = useState<EditTutorProfile>({
      bio: "",
      hourlyRate: 0,
      experience: 0,
      availability:"",
      category:{
        id: "",
        name:"",
        subject:"",
        description: ""
      }
    });
  
  useEffect(()=>{
    (async()=>{
      const res = await categoryAction();
      console.log("category:", res);
      if (res) {
        const list = res as Category[];
        setCategories(list);

        // if (list.length > 0) {
        //   form.setFieldValue("categoryId", list[0].id);
        // }
      }
    })()
  },[]);

  useEffect(() => {
    (async ()=> {
      const res = await getOwnTutorProfile();
      console.log("Tutor:", res?.data?.result);
      if (res?.data?.result) {
        const tutor = res.data.result;
        setTutorProfile({
          bio: tutor.bio,
          hourlyRate: tutor.hourlyRate,
          experience: tutor.experience,
          availability: tutor.availability,
          category: tutor.category.id
        });
      }
    })()
  }, []);

  const AVAILABILITY_OPTIONS = [
    { label: "Available", value: "AVAILABLE" },
    { label: "Not Available", value: "NOT_AVAILABLE" },
  ];

  
  const tutorSchema = z.object({
      bio: z
        .string()
        .min(10, "Bio must be at least 10 characters long.")
        .max(500, "Bio can not be bigger than 500 characters"),
      hourlyRate: z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), { message: "Hourly rate must be a number" }),
      experience: z
        .string()
        .transform((val) => Number(val))
        .refine((val) => !isNaN(val), { message: "Experience must be a number" }),
      availability: z.string().nonempty("Availability is required"),
      categoryId: z.string().min(1, "Category is required")
    });
    
    
  const form = useForm({
    defaultValues:tutorProfile,
    validators:{
      onSubmit: tutorSchema
    },
    onSubmit: async ({value})=>{
      const toastId = toast.loading("Creating post...");
      const tutorData = {
        bio: value.bio,
        hourlyRate: value.hourlyRate,
        experience: value.experience,
        availability: value.availability,
        categoryId: value.category.id
      }
      console.log(tutorProfile);
      // try{
      //   const res = await updateProfileData(tutorData);
      //   if(res.error){
      //     toast.error("Tutor profile updating failed", {id: toastId})
      //   }        
      //   toast.success("Tutor profile updated successfully", {id: toastId});
      //   onSuccess?.();
      // }catch(err){
      //   toast.error("Internal server error.", {id: toastId})
      // }
    }
  });

  return (
    <Card>
      <CardContent>
        <form id="tutor-form" className="space-y-4" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field
              name="bio"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  value.trim().length > 0 &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Bio
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />
            <form.Field
              name="hourlyRate"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Hourly Rate
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      min={0}
                      value={value}
                      onChange={(e) => field.handleChange(Number(e.target.value))}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />
            <form.Field
              name="experience"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Experience in (years)
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={value}
                      onChange={(e) => field.handleChange(Number(e.target.value))}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />

            <form.Field name="availability">
              {(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Availability
                    </FieldLabel>

                    <select
                      id={field.name}
                      name={field.name}
                      className="w-full rounded-md border p-2"
                      value={value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    >
                      <option value="">Select availability</option>
                      {AVAILABILITY_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </>
                );
              }}
            </form.Field>

            <form.Field
              name="category.id"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  value.trim().length > 0 &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Category
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />


          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form='profile-form' className='w-full'>Update profile</Button>
      </CardFooter>
    </Card>
  );
}
