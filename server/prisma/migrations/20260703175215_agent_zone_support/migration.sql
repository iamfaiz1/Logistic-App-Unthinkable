/*
  Warnings:

  - Added the required column `zoneId` to the `AgentLocation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AgentLocation" ADD COLUMN     "zoneId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "AgentLocation" ADD CONSTRAINT "AgentLocation_zoneId_fkey" FOREIGN KEY ("zoneId") REFERENCES "Zone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
