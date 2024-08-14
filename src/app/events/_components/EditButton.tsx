import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import { Button } from "../../../components/ui/button";
import { Event } from "../../../types";
import EventForm from "./EventForm";

interface EditButtonProps {
  event?: Event;
}

export default function EditButton({ event }: EditButtonProps) {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="w-full" asChild>
          <Button variant="ghost" className="flex justify-start">
            Edit Event
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="h-[525px] overflow-y-scroll w-11/12">
          <AlertDialogHeader>
            <AlertDialogTitle>Edit {event?.event_name} event</AlertDialogTitle>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
          <EventForm event={event} />
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
