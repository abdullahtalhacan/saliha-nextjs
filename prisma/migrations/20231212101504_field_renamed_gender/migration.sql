/*
  Warnings:

  - You are about to drop the column `sex` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `gender` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `sex`,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL;
