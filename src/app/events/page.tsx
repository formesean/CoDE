import { PrismaClient } from "@prisma/client";
import Navbar from "../_components/Navbar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { createEvent, deleteEvent } from "./_actions/actions";
import { currentUser } from "@clerk/nextjs/server";
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
} from "../../components/ui/alert-dialog";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";
import { format } from "date-fns";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../components/ui/context-menu";

interface Event {
  event_id: number;
  event_name: string;
  event_description: string;
  event_date_time: Date;
  event_status: string;
  event_venue: string;
  event_mode: string;
  event_registration_link: string;
}

const prisma = new PrismaClient();

export default async function Events() {
  const events: Event[] = await prisma.events.findMany();
  const user = await currentUser();
  const upcomingEvents = events.filter(
    (event) => event.event_status === "Upcoming"
  );
  const finishedEvents = events.filter(
    (event) => event.event_status === "Finished"
  );

  return (
    <main className="flex w-full min-h-screen flex-col items-center p-8">
      <Navbar
        page="events"
        showContent={false}
        className="sticky top-10 bg-background"
      />

      {user && (
        <section className="mt-8 w-full">
          <AlertDialog>
            <AlertDialogTrigger className="w-full" asChild>
              <Button variant="outline" className="text-gray-500 py-10">
                Add Event
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Add a new event for CoDE - USC
                </AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>
              <div>
                <form action={createEvent}>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="event_name">Name</Label>
                      <Input
                        id="event_name"
                        name="event_name"
                        placeholder="Name of the event"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="event_description">Description</Label>
                      <Input
                        id="event_description"
                        name="event_description"
                        placeholder="Description of the event"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="event_status">Status</Label>
                      <Select name="event_status" required>
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
                      <Input
                        id="event_date"
                        name="event_date"
                        placeholder="Date of the event (YYYY-MM-DD)"
                        required
                      />
                      <Input
                        id="event_time"
                        name="event_time"
                        placeholder="Start time of the event (HH:mm - Military time)"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="event_venue">Venue</Label>
                      <Input
                        id="event_venue"
                        name="event_venue"
                        placeholder="Venue of the event"
                        required
                      />
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="event_mode">Mode</Label>
                      <Select name="event_mode" required>
                        <SelectTrigger id="event_mode">
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="Face-to-Face">
                            Face-to-Face
                          </SelectItem>
                          <SelectItem value="Online">Online</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="event_registration_link">
                        Registration Link
                      </Label>
                      <Input
                        id="event_registration_link"
                        name="event_registration_link"
                        placeholder="Registration Link for the event"
                        required
                      />
                    </div>
                  </div>
                  <AlertDialogFooter className="mt-4">
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction type="submit">
                      Add Event
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </form>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      )}

      <section className="w-full mt-5">
        {/* Upcoming Events */}
        <div>
          {upcomingEvents.length > 0 ? (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="grid grid-cols-2 gap-5">
                {upcomingEvents.map((event) => {
                  const eventDateTime = new Date(event.event_date_time);
                  const formattedEventDate = format(
                    eventDateTime,
                    "EEE | MMMM d, yyyy"
                  );
                  const formattedEventTime = format(eventDateTime, "h:mm a");

                  return (
                    <ContextMenu key={event.event_id}>
                      <ContextMenuTrigger>
                        <Card>
                          <CardHeader>
                            <CardTitle>{event.event_name}</CardTitle>
                            <CardDescription>
                              {event.event_description}
                            </CardDescription>
                            <div>
                              <Badge variant={"secondary"}>
                                {event.event_mode}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <h1>Date: {formattedEventDate}</h1>
                            <h1>Time: {formattedEventTime}</h1>
                            <h1>Venue: {event.event_venue}</h1>
                          </CardContent>
                          <CardFooter className="flex justify-center items-center">
                            <Link
                              href={`https://${event.event_registration_link}`}
                              target="_blank"
                            >
                              <Button>Register</Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </ContextMenuTrigger>
                      {user && (
                        <ContextMenuContent>
                          <ContextMenuItem>Edit Event</ContextMenuItem>
                          <ContextMenuItem>Delete Event</ContextMenuItem>
                        </ContextMenuContent>
                      )}
                    </ContextMenu>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No upcoming events in CoDE.
            </p>
          )}
        </div>

        {/* Previous Events */}
        {finishedEvents.length > 0 && (
          <div>
            <h2 className="text-xl font-bold mb-4">Previous Events</h2>
            <div className="grid grid-cols-2 gap-5">
              {finishedEvents.map((event) => {
                const eventDateTime = new Date(event.event_date_time);
                const formattedEventDate = format(
                  eventDateTime,
                  "EEE | MMMM d, yyyy"
                );
                const formattedEventTime = format(eventDateTime, "h:mm a");

                return (
                  <ContextMenu key={event.event_id}>
                    <ContextMenuTrigger>
                      <Card>
                        <CardHeader>
                          <CardTitle>{event.event_name}</CardTitle>
                          <CardDescription>
                            {event.event_description}
                          </CardDescription>
                          <div>
                            <Badge variant={"secondary"}>
                              {event.event_mode}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <h1>Date: {formattedEventDate}</h1>
                          <h1>Time: {formattedEventTime}</h1>
                          <h1>Venue: {event.event_venue}</h1>
                        </CardContent>
                      </Card>
                    </ContextMenuTrigger>
                    {user && (
                      <ContextMenuContent>
                        <ContextMenuItem>Edit Event</ContextMenuItem>
                        <ContextMenuItem>Delete Event</ContextMenuItem>
                      </ContextMenuContent>
                    )}
                  </ContextMenu>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
