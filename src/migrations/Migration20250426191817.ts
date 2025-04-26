import { Migration } from '@mikro-orm/migrations';

export class Migration20250426191817 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "users" ("id" bigserial primary key, "google_id" varchar(191) null, "name" varchar(191) not null, "email" varchar(191) not null, "email_verified_at" timestamptz null, "password" varchar(191) null, "phone" varchar(191) null, "stripe_id" varchar(191) null, "card_brand" varchar(191) null, "card_last_four" varchar(4) null, "trial_ends_at" timestamptz null, "verification_code" varchar(191) null, "phone_verified_at" timestamptz null, "plan_id" bigint null, "plan_status" varchar(191) not null default '', "active" boolean not null default true, "created_at" timestamptz null, "updated_at" timestamptz null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "users" cascade;`);
  }

}
