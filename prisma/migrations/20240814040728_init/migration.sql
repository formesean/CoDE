/*
  Warnings:

  - Added the required column `event_description` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" ADD COLUMN     "event_description" TEXT NOT NULL;
