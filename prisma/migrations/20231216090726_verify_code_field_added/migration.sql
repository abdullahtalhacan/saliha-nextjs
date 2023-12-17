/*
  Warnings:

  - Added the required column `verify_code` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` ADD COLUMN `verify_code` VARCHAR(191) NOT NULL;
