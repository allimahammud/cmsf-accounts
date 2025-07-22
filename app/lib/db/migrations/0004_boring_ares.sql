ALTER TABLE "tblUserMenus" DROP COLUMN "userID";
ALTER TABLE "tblUserMenus" ADD COLUMN "userID" uuid DEFAULT gen_random_uuid();
