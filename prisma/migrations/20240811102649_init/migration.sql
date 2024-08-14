-- CreateTable
CREATE TABLE "Events" (
    "event_id" SERIAL NOT NULL,
    "event_status" TEXT NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_date_time" TIMESTAMP(3) NOT NULL,
    "event_venue" TEXT NOT NULL,
    "event_mode" TEXT NOT NULL,
    "event_registration_link" TEXT NOT NULL,

    CONSTRAINT "Events_pkey" PRIMARY KEY ("event_id")
);
