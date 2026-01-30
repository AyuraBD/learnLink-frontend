"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // optional toast library
import { EditUser } from "@/types";
import { getProfileData, updateProfileData } from "@/actions/profile.action";
import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface EditProfileFormProps {
  onSuccess?: () => void;
}

export default function EditProfileForm({ onSuccess }: EditProfileFormProps) {
  const [formData, setFormData] = useState<EditUser>({
    name: "",
    image: "",
    phone: "",
  });

  useEffect(() => {
    (async ()=> {
      const res = await getProfileData();
      if (res?.data?.result) {
        const profile = res.data.result;
        setFormData({
          name: profile.name || "",
          image: profile.image || "",
          phone: profile.phone || "",
        });
      }
    })()
  }, []);

  const userSchema = z.object({
    name: z.string().optional(),
    image:z.string().optional(),
    phone:z.string().optional()
  });
  const form = useForm({
    defaultValues:formData,
    validators:{
      onSubmit: userSchema
    },
    onSubmit: async ({value})=>{
      const toastId = toast.loading("Creating post...");
      const userData = {
        name: value.name,
        image: value.image,
        phone: value.phone
      }
      try{
        const res = await updateProfileData(userData);
        console.log('Res', res);
        if(res.error){
          toast.error("Profile updating failed", {id: toastId})
        }        
        toast.success("Profile updated successfully", {id: toastId});
        onSuccess?.();
      }catch(err){
        toast.error("Internal server error.", {id: toastId})
      }
    }
  });

  return (
    <Card>
      <CardContent>
        <form id="profile-form" className="space-y-4" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  value.trim().length > 0 &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Your full name
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={value}
                      placeholder="Your full name"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />
            <form.Field
              name="image"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  value.trim().length > 0 &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Your full name
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={value}
                      placeholder="Paste your photo link"
                      onChange={(e) => field.handleChange(e.target.value)}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />
            <form.Field
              name="phone"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  value.trim().length > 0 &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Your full name
                    </FieldLabel>

                    <Input
                      id={field.name}
                      name={field.name}
                      value={value}
                      placeholder="Your phone number"
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
