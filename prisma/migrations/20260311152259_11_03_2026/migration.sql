/*
  Warnings:

  - A unique constraint covering the columns `[user_name]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_name,id_community]` on the table `Community_member` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Community] ADD [created] NVARCHAR(1000),
[details] NVARCHAR(1000),
[name] NVARCHAR(1000);

-- CreateIndex
ALTER TABLE [dbo].[Admin] ADD CONSTRAINT [Admin_user_name_key] UNIQUE NONCLUSTERED ([user_name]);

-- CreateIndex
ALTER TABLE [dbo].[Community_member] ADD CONSTRAINT [Community_member_user_name_id_community_key] UNIQUE NONCLUSTERED ([user_name], [id_community]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
