"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { deleteCategory } from "@/actions/category.action";

interface Props {
  categoryId: string;
}

export default function DeleteCategoryButton({ categoryId }: Props) {
  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this category?"
    );
    if (!confirmDelete) return;

    const toastId = toast.loading("Deleting category...");

    try {
      const res = await deleteCategory(categoryId);
      
      if (res?.error) {
        toast.error("Delete failed", {
          id: toastId,
        });
        return;
      }

      toast.success("Category deleted successfully", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-red-500 hover:text-red-600"
      onClick={handleDelete}
    >
      <Trash2 className="w-4 h-4" />
    </Button>
  );
}
