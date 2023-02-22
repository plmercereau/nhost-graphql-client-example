CREATE TABLE "public"."books" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "author_id" uuid NOT NULL, "title" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("author_id") REFERENCES "public"."authors"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
