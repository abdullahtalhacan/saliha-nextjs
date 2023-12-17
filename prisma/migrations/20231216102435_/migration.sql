/*
  Warnings:

  - You are about to drop the column `verify_code` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `verifyCode` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `verify_code`,
    ADD COLUMN `verifyCode` VARCHAR(191) NOT NULL;
