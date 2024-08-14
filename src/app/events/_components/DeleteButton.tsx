"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import { Event } from "../../../types";
import { useState } from "react";
import { deleteEvent } from "../_actions/actions";

interface DeleteButtonProps {
  event?: Event;
}

export default function DeleteButton({ event }: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    if (!event?.event_id) return;

    setLoading(true);
    setError(null);

    try {
      await deleteEvent(event.event_id);
      // Optionally handle success, like redirecting or showing a message
      setIsOpen(false); // Close dialog on successful deletion
    } catch (err) {
      setError("Failed to delete event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex justify-start"
            onClick={() => setIsOpen(true)}
          >
            Delete Event
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              event and remove it from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete Event"}
            </AlertDialogAction>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
