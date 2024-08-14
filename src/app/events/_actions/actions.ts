"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

interface EventFormData {
  get(name: string): FormDataEntryValue | null;
}

export const createEvent = async (formData: EventFormData) => {
  const event_name = formData.get("event_name") as string | null;
  const event_description = formData.get("event_description") as string | null;
  const event_status = formData.get("event_status") as string | null;
  const event_date = cookies().get("event_date")?.value;
  const event_time = formData.get("event_time") as string | null;
  const event_venue = formData.get("event_venue") as string | null;
  const event_mode = formData.get("event_mode") as string | null;
  const event_registration_link = formData.get("event_registration_link") as
    | string
    | null;

  if (
    !event_name ||
    !event_description ||
    !event_status ||
    !event_date ||
    !event_time ||
    !event_venue ||
    !event_mode ||
    !event_registration_link
  ) {
    throw new Error("All fields are required.");
  }

  const parsedDate = new Date(event_date).toISOString().split("T")[0];
  const event_date_time = new Date(`${parsedDate}T${event_time}`);
  if (isNaN(event_date_time.getTime())) {
    throw new Error("Invalid date or time format.");
  }

  try {
    await prisma.events.create({
      data: {
        event_name,
        event_description,
        event_status,
        event_date_time,
        event_venue,
        event_mode,
        event_registration_link,
      },
    });

    revalidatePath("/events");
  } catch (error) {
    console.error(error);
  }
};

export const editEvent = async (formData: EventFormData) => {
  const event_id = parseInt(formData.get("event_id") as string, 10);
  const event_name = formData.get("event_name") as string | null;
  const event_description = formData.get("event_description") as string | null;
  const event_status = formData.get("event_status") as string | null;
  const event_date = cookies().get("event_date")?.value;
  const event_time = formData.get("event_time") as string | null;
  const event_venue = formData.get("event_venue") as string | null;
  const event_mode = formData.get("event_mode") as string | null;
  const event_registration_link = formData.get("event_registration_link") as
    | string
    | null;

  if (
    isNaN(event_id) ||
    !event_name ||
    !event_description ||
    !event_status ||
    !event_date ||
    !event_time ||
    !event_venue ||
    !event_mode ||
    !event_registration_link
  ) {
    throw new Error("All fields are required.");
  }

  const parsedDate = new Date(event_date).toISOString().split("T")[0];
  const event_date_time = new Date(`${parsedDate}T${event_time}`);
  if (isNaN(event_date_time.getTime())) {
    throw new Error("Invalid date or time format.");
  }

  try {
    await prisma.events.update({
      where: { event_id },
      data: {
        event_name,
        event_description,
        event_status,
        event_date_time,
        event_venue,
        event_mode,
        event_registration_link,
      },
    });

    revalidatePath("/events");
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = async (event_id: number) => {
  if (!event_id) {
    throw new Error("Event ID is required.");
  }

  try {
    await prisma.events.delete({
      where: { event_id },
    });

    revalidatePath("/events");
  } catch (error) {
    console.error("Failed to delete event:", error);
    throw new Error("Failed to delete event.");
  }
};
