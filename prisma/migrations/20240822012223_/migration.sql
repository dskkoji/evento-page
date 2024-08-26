/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `EventoEvent` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EventoEvent_slug_key" ON "EventoEvent"("slug");
