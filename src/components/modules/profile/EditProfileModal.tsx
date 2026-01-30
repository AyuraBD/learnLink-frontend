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
import EditProfileForm from "./EditProfileForm";

export default function EditProfileModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg w-full">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <EditProfileForm
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
