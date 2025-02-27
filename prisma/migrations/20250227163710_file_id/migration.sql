/*
  Warnings:

  - A unique constraint covering the columns `[fileId]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fileId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "fileId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Asset_fileId_key" ON "Asset"("fileId");

-- CreateIndex
CREATE INDEX "Asset_fileId_idx" ON "Asset"("fileId");
