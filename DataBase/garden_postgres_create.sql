CREATE TABLE "users" (
	"id" serial NOT NULL UNIQUE,
	"name" char(24) NOT NULL,
	"email" varchar(48) NOT NULL,
	"comment_id" int(4) NOT NULL,
	"password" varchar(24) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "message" (
	"mess_id" serial NOT NULL UNIQUE,
	"message" serial(240) NOT NULL,
	"user_id" int(4) NOT NULL,
	"date" DATE NOT NULL,
	CONSTRAINT message_pk PRIMARY KEY ("mess_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "viewed_message" (
	"id" serial NOT NULL,
	"message-id" int(4) NOT NULL,
	"user_id" bigint NOT NULL,
	"viewed_message" BOOLEAN NOT NULL,
	CONSTRAINT viewed_message_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "comments" (
	"id" serial NOT NULL,
	"comment" varchar(240) NOT NULL,
	"message_id" int(4) NOT NULL,
	"user_id" int(4) NOT NULL,
	CONSTRAINT comments_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "users" ADD CONSTRAINT "users_fk0" FOREIGN KEY ("comment_id") REFERENCES "comments"("id");

ALTER TABLE "message" ADD CONSTRAINT "message_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "viewed_message" ADD CONSTRAINT "viewed_message_fk0" FOREIGN KEY ("message-id") REFERENCES "message"("mess_id");
ALTER TABLE "viewed_message" ADD CONSTRAINT "viewed_message_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "comments" ADD CONSTRAINT "comments_fk0" FOREIGN KEY ("message_id") REFERENCES "message"("mess_id");
ALTER TABLE "comments" ADD CONSTRAINT "comments_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("id");

