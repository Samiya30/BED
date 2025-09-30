-- DropForeignKey
ALTER TABLE "public"."Tweet" DROP CONSTRAINT "Tweet_userid_fkey";

-- AddForeignKey
ALTER TABLE "public"."Tweet" ADD CONSTRAINT "Tweet_userid_fkey" FOREIGN KEY ("userid") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
