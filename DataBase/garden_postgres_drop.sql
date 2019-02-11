ALTER TABLE "users" DROP CONSTRAINT IF EXISTS "users_fk0";

ALTER TABLE "message" DROP CONSTRAINT IF EXISTS "message_fk0";

ALTER TABLE "viewed_message" DROP CONSTRAINT IF EXISTS "viewed_message_fk0";

ALTER TABLE "viewed_message" DROP CONSTRAINT IF EXISTS "viewed_message_fk1";

ALTER TABLE "comments" DROP CONSTRAINT IF EXISTS "comments_fk0";

ALTER TABLE "comments" DROP CONSTRAINT IF EXISTS "comments_fk1";

DROP TABLE IF EXISTS "users";

DROP TABLE IF EXISTS "message";

DROP TABLE IF EXISTS "viewed_message";

DROP TABLE IF EXISTS "comments";

