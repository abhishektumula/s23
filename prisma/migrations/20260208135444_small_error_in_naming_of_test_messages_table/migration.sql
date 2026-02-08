/*
  Warnings:

  - You are about to drop the column `messgae` on the `Testmessages` table. All the data in the column will be lost.
  - Added the required column `message` to the `Testmessages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testmessages" DROP COLUMN "messgae",
ADD COLUMN     "message" TEXT NOT NULL;
