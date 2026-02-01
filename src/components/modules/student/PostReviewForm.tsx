"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { postReviewAction } from "@/actions/review.action";
import { PostReviewProps } from "./PostReviewModal";

interface PostReviewFormProps {
  id: string;
  onSuccess?: () => void;
}

export default function PostReviewForm({ id, onSuccess }: PostReviewFormProps) {

  const userSchema = z.object({
    rating: z.number().min(1, { message: "Rating is required" }).max(5, "Rating can be 5 or lower"),
    comment:z.string().min(3,"Comment must be 3 characters long.")
  });
  const form = useForm({
    defaultValues:{
      rating: 0,
      comment: ""
    },
    validators:{
      onSubmit: userSchema
    },
    onSubmit: async ({value})=>{
      const toastId = toast.loading("Creating review post...");
      const reviewData = {
        rating: value.rating,
        comment: value.comment
      }
      try{
        const res = await postReviewAction(id,reviewData);
        if(res.error){
          toast.error("Review posting failed", {id: toastId})
          return
        }        
        toast.success("Review posted successfully", {id: toastId});
        onSuccess?.();
      }catch(err){
        toast.error("Internal server error.", {id: toastId})
      }
    }
  });

  return (
    <Card>
      <CardContent>
        <form id="review-form" className="space-y-4" onSubmit={(e)=>{
          e.preventDefault();
          form.handleSubmit();
        }}>
          <FieldGroup>
            <form.Field
              name="rating"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Rating (1 to 5)
                    </FieldLabel>

                    <Input
                      id={field.name}
                      type="number"
                      name={field.name}
                      value={value}
                      onChange={(e) => field.handleChange(Number(e.target.value))}
                    />

                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                  </>
                );
              }}
            />
            <form.Field
              name="comment"
              children={(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched &&
                  !field.state.meta.isValid;
                return (
                  <>
                    <FieldLabel htmlFor={field.name}>
                      Your comment
                    </FieldLabel>

                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={value}
                      placeholder="Write your valuable words..."
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
        <Button form='review-form' className='w-full'>Post Review</Button>
      </CardFooter>
    </Card>
  );
}
