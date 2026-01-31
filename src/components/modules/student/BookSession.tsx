"use client";

import { createBooking } from '@/actions/bookingSession.action';
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { BookTutorId } from '@/types'
import { useForm } from '@tanstack/react-form';
import { toast } from 'sonner';
import * as z from "zod";

const BookSession = ({id}:{id:string}) => {
  const SESSION_DATE_OPTIONS = [
  {
    label: "Feb 17, 2026 · 06:50 AM",
    value: "2026-02-17T06:50:21.791Z",
  },
  {
    label: "Feb 18, 2026 · 07:00 AM",
    value: "2026-02-18T07:00:00.000Z",
  },
  {
    label: "Feb 19, 2026 · 08:30 AM",
    value: "2026-02-19T08:30:00.000Z",
  },
  {
    label: "Feb 10, 2026 · 09:00 AM",
    value: "2026-02-10T09:00:00.000Z",
  },
];

  const sessionSchema = z.object({
      sessionDate:z.string().min(1, "Please select a session date")
    });
    const form = useForm({
      defaultValues:{
        sessionDate: ""
      },
      validators:{
        onSubmit: sessionSchema
      },
      onSubmit: async ({value})=>{
        const toastId = toast.loading("Booking session...");
        const reviewData = {
          sessionDate: value.sessionDate
        }
        console.log(reviewData);
        try{
          const res = await createBooking(id,reviewData);
          console.log(res);
          if(res.error){
            toast.error("Session booking failed", {id: toastId})
            return
          }        
          toast.success("Session booked successfully", {id: toastId});
        }catch(err){
          toast.error("Internal server error.", {id: toastId})
        }
      }
    });
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
      <h3 className="text-lg font-semibold mb-4">
        Book a Session
      </h3>

      <div className="mb-4">
        <form id="session-form" className="space-y-4" onSubmit={(e)=>{
              e.preventDefault();
              form.handleSubmit();
            }}>
          <FieldGroup>
            <form.Field name="sessionDate">
              {(field) => {
                const value = field.state.value ?? "";
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel htmlFor={field.name}>
                      Session date
                    </FieldLabel>

                    <select
                      id={field.name}
                      name={field.name}
                      className="w-full rounded-md border p-2"
                      value={value}
                      onChange={(e) => field.handleChange(e.target.value)}
                    >
                      <option value="">Select a session date</option>

                      {SESSION_DATE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>

                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            </form.Field>
          </FieldGroup>
        </form>

      </div>
      <Button form="session-form" type='submit' className="w-full">
        Book Session
      </Button>

      <p className="text-xs text-gray-500 mt-3 text-center">
        You won’t be charged until the tutor confirms
      </p>
    </div>
  )
}

export default BookSession