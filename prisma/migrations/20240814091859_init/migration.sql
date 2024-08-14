/*
  Warnings:

  - A unique constraint covering the columns `[event_id]` on the table `Events` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Events_event_id_key" ON "Events"("event_id");
