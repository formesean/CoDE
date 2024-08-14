"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export const createEvent = async (formData) => {
  const event_name = formData.get("event_name");
  const event_description = formData.get("event_description");
  const event_status = formData.get("event_status");
  const event_date = formData.get("event_date");
  const event_time = formData.get("event_time");
  const event_venue = formData.get("event_venue");
  const event_mode = formData.get("event_mode");
  const event_registration_link = formData.get("event_registration_link");

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

  const event_date_time = new Date(`${event_date}T${event_time}`);
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

export const deleteEvent = async (formData) => {
  const event_id = parseInt(formData.get("event_id"));
  try {
    await prisma.events.delete({
      where: { event_id },
    });
  } catch (error) {
    console.error(error);
  }
};
