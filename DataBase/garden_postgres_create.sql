CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY NOT NULL UNIQUE,
    "username" VARCHAR(24) NOT NULL,
    "email" VARCHAR(48) NOT NULL,
    "password" VARCHAR(24) NOT NULL
);

CREATE TABLE "message" (
    "mess_id" SERIAL PRIMARY KEY NOT NULL UNIQUE,
    "message" VARCHAR(240) NOT NULL,
    "user_id" INT NOT NULL REFERENCES "users",
    "date" DATE NOT NULL
);

CREATE TABLE "viewed_message" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "message-id" INT NOT NULL REFERENCES "message",
    "user_id" bigint NOT NULL REFERENCES "users",
    "viewed_message" BOOLEAN NOT NULL
);

CREATE TABLE "comments" (
    "id" SERIAL PRIMARY KEY NOT NULL UNIQUE,
    "comment" VARCHAR(240) NOT NULL,
    "message_id" INT NOT NULL REFERENCES "message",
    "user_id" INT NOT NULL REFERENCES "users"
);