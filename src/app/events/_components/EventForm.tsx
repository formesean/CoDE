import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
} from "../../../components/ui/alert-dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Event } from "../../../types";
import { createEvent, editEvent } from "../_actions/actions";
import { DatePicker } from "./DatePicker";

interface EventFormProps {
  event?: Event;
}

export default function EventForm({ event }: EventFormProps) {
  const formAction = event ? editEvent : createEvent;

  return (
    <>
      <div>
        <form action={formAction}>
          {event && (
            <input type="hidden" name="event_id" value={event.event_id} />
          )}
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="event_name">Name</Label>
              <Input
                id="event_name"
                name="event_name"
                placeholder="Name of the event"
                defaultValue={event?.event_name || ""}
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="event_description">Description</Label>
              <Input
                id="event_description"
                name="event_description"
                placeholder="Description of the event"
                defaultValue={event?.event_description || ""}
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="event_status">Status</Label>
              <Select
                name="event_status"
                required
                defaultValue={event?.event_status || ""}
              >
                <SelectTrigger id="event_status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Upcoming">Upcoming</SelectItem>
                  <SelectItem value="Finished">Finished</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Date & Time</Label>
              <DatePicker event={event} />
              <Input
                id="event_time"
                name="event_time"
                placeholder="Start time of the event (HH:mm - Military time)"
                defaultValue={
                  event
                    ? event.event_date_time.toLocaleTimeString([], {
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : ""
                }
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="event_venue">Venue</Label>
              <Input
                id="event_venue"
                name="event_venue"
                placeholder="Venue of the event"
                defaultValue={event?.event_venue || ""}
                required
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="event_mode">Mode</Label>
              <Select
                name="event_mode"
                required
                defaultValue={event?.event_mode || ""}
              >
                <SelectTrigger id="event_mode">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Face-to-Face">Face-to-Face</SelectItem>
                  <SelectItem value="Online">Online</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="event_registration_link">Registration Link</Label>
              <Input
                id="event_registration_link"
                name="event_registration_link"
                placeholder="Registration Link for the event"
                defaultValue={event?.event_registration_link || ""}
                required
              />
            </div>
          </div>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">
              {event ? "Update Event" : "Add Event"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </div>
    </>
  );
}
