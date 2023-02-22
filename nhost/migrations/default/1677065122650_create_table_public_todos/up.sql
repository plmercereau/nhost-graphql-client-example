CREATE TABLE "public"."todos" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "contents" text NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
