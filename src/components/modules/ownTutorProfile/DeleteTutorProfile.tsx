"use client";

import { useState } from "react";
import { TrashIcon } from "lucide-react";
import { deleteTutorProfile } from "@/actions/deleteTutor.action";
import { toast } from "sonner";

const DeleteTutorProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await deleteTutorProfile();
      setLoading(false);
      setShowModal(false);

      if (res.error) {
        toast.error("Tutor profile couldn't delete.");
      } else {
        toast.success("Tutor profile deleted successfully");
      }
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        <TrashIcon className="w-4 h-4" /> Delete
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Are you sure?
            </h3>
            <p className="text-sm text-gray-700">
              Deleting your tutor profile is permanent and cannot be retrieve.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={loading}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition flex items-center gap-2"
              >
                {loading ? "Deleting..." : <><TrashIcon className="w-4 h-4" /> Delete</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteTutorProfile;
