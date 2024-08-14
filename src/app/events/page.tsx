import { PrismaClient } from "@prisma/client";
import Navbar from "../_components/Navbar";
import { Button } from "../../components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";
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
import { format } from "date-fns-tz";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../components/ui/context-menu";
import EventForm from "./_components/EventForm";
import EditButton from "./_components/EditButton";
import { Event } from "../../types";
import DeleteButton from "./_components/DeleteButton";

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
    <main className="flex min-w-full h-screen flex-col items-center">
      <div className="w-full pt-8 px-8 sticky top-0 bg-background">
        <Navbar page="events" showContent={false} />
      </div>

      {user && (
        <section className="mt-8 w-full px-8">
          <AlertDialog>
            <AlertDialogTrigger className="w-full" asChild>
              <Button variant="outline" className="text-gray-500 py-10">
                Add Event
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="h-[525px] overflow-y-scroll w-11/12">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Add a new event for CoDE - USC
                </AlertDialogTitle>
                <AlertDialogDescription></AlertDialogDescription>
              </AlertDialogHeader>
              <EventForm />
            </AlertDialogContent>
          </AlertDialog>
        </section>
      )}

      <section className="w-full mt-5 px-8">
        {/* Upcoming Events */}
        <div>
          {upcomingEvents.length > 0 ? (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
                {upcomingEvents.map((event) => {
                  const eventDateTime = new Date(
                    new Date(event.event_date_time).setDate(
                      new Date(event.event_date_time).getDate() + 1
                    )
                  );
                  const formattedEventDate = format(
                    eventDateTime,
                    "EEE | MMMM d, yyyy",
                    { timeZone: "Asia/Manila" }
                  );
                  const formattedEventTime = format(eventDateTime, "h:mm a", {
                    timeZone: "Asia/Manila",
                  });

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
                          <CardFooter className="flex justify-center items-center w-full">
                            <Link
                              href={`https://${event.event_registration_link}`}
                              target="_blank"
                            >
                              <Button size={"lg"}>Register</Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </ContextMenuTrigger>
                      {user && (
                        <ContextMenuContent>
                          <ContextMenuItem asChild>
                            <EditButton event={event} />
                          </ContextMenuItem>
                          <ContextMenuItem asChild>
                            <DeleteButton event={event} />
                          </ContextMenuItem>
                        </ContextMenuContent>
                      )}
                    </ContextMenu>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 mb-8">
              No upcoming events in CoDE.
            </p>
          )}
        </div>

        {/* Previous Events */}
        {finishedEvents.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Previous Events</h2>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
              {finishedEvents.map((event) => {
                const eventDateTime = new Date(
                  new Date(event.event_date_time).setDate(
                    new Date(event.event_date_time).getDate() + 1
                  )
                );
                const formattedEventDate = format(
                  eventDateTime,
                  "EEE | MMMM d, yyyy",
                  {
                    timeZone: "Asia/Manila",
                  }
                );
                const formattedEventTime = format(eventDateTime, "h:mm a", {
                  timeZone: "Asia/Manila",
                });

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
                        <ContextMenuItem asChild>
                          <EditButton event={event} />
                        </ContextMenuItem>
                        <ContextMenuItem asChild>
                          <DeleteButton event={event} />
                        </ContextMenuItem>
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
