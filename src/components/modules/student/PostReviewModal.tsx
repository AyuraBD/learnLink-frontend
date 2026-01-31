"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import PostReviewForm from "./PostReviewForm";

export interface PostReviewProps {
  id: string;
}

export default function PostReviewModal({ id }:PostReviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Post a review
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Post a review</DialogTitle>
        </DialogHeader>

        <PostReviewForm id={id}
          onSuccess={() => setOpen(false)}
        />

        <DialogClose asChild>
          <Button variant="ghost" className="mt-4">
            Cancel
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
