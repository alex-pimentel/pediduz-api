import { Migration } from '@mikro-orm/migrations';

export class Migration20250427004157 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "cities" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "name" varchar(191) not null, "alias" varchar(191) not null, "image" varchar(191) not null, "header_title" varchar(191) not null, "header_subtitle" varchar(191) not null, "deleted_at" timestamp(6) null);`);
    this.addSql(`alter table "cities" add constraint "cities_alias_key" unique ("alias");`);

    this.addSql(`create table "languages" ("id" serial primary key, "name" varchar(191) null, "language" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "migrations" ("id" serial primary key, "migration" varchar(191) not null, "batch" int not null);`);

    this.addSql(`create table "pages" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "title" varchar(191) not null, "content" text not null, "showaslink" boolean not null default false);`);

    this.addSql(`create table "password_resets" ("id" bigserial primary key, "email" varchar(191) not null, "token" varchar(191) not null, "created_at" timestamp(6) null);`);
    this.addSql(`create index "password_resets_email_index" on "password_resets" ("email");`);

    this.addSql(`create table "permissions" ("id" serial primary key, "name" varchar(191) not null, "guard_name" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "model_has_permissions" ("permission_id" int not null, "model_type" varchar(191) not null, "model_id" bigint not null, constraint "model_has_permissions_pkey" primary key ("permission_id", "model_type", "model_id"));`);
    this.addSql(`create index "model_has_permissions_model_id_model_type_index" on "model_has_permissions" ("model_id", "model_type");`);

    this.addSql(`create table "plan" ("id" bigserial primary key, "name" varchar(191) not null, "limit_items" int not null default 0, "limit_orders" int not null default 0, "price" numeric(8,2) not null, "period" int not null default 1, "paddle_id" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null, "description" varchar(555) not null default '', "features" varchar(555) not null default '', "limit_views" int not null default 0, "enable_ordering" int not null default 1, "stripe_id" varchar(191) not null, "paypal_id" varchar(191) null, "mollie_id" varchar(191) null, "paystack_id" varchar(191) null);`);

    this.addSql(`create table "posts" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "post_type" varchar(191) null, "title" varchar(191) null, "subtitle" varchar(191) null, "description" varchar(500) null, "image" varchar(191) null, "link" varchar(191) null, "link_name" varchar(191) null);`);

    this.addSql(`create table "roles" ("id" serial primary key, "name" varchar(191) not null, "guard_name" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "role_has_permissions" ("permission_id" int not null, "role_id" int not null, constraint "role_has_permissions_pkey" primary key ("permission_id", "role_id"));`);

    this.addSql(`create table "model_has_roles" ("role_id" int not null, "model_type" varchar(191) not null, "model_id" bigint not null, constraint "model_has_roles_pkey" primary key ("role_id", "model_type", "model_id"));`);
    this.addSql(`create index "model_has_roles_model_id_model_type_index" on "model_has_roles" ("model_id", "model_type");`);

    this.addSql(`create table "settings" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "site_name" varchar(191) not null, "site_logo" varchar(191) not null, "search" varchar(191) not null, "restorant_details_image" varchar(191) not null default '', "restorant_details_cover_image" varchar(191) not null default '', "description" varchar(191) not null, "header_title" varchar(191) not null, "header_subtitle" varchar(191) not null, "currency" varchar(191) not null default 'USD', "facebook" varchar(191) not null default '', "instagram" varchar(191) not null default '', "playstore" varchar(191) not null default '', "appstore" varchar(191) not null default '', "maps_api_key" varchar(191) null default '', "delivery" numeric(8,2) not null default 0.00, "typeform" varchar(191) not null default '', "mobile_info_title" varchar(191) not null default '', "mobile_info_subtitle" varchar(191) not null default '', "order_options" varchar(191) not null default '{}', "site_logo_dark" varchar(191) null);`);

    this.addSql(`create table "status" ("id" bigserial primary key, "name" varchar(191) not null, "alias" varchar(191) not null);`);
    this.addSql(`alter table "status" add constraint "status_name_key" unique ("name");`);
    this.addSql(`alter table "status" add constraint "status_alias_key" unique ("alias");`);

    this.addSql(`create table "translations" ("id" serial primary key, "language_id" int not null, "group" varchar(191) null, "key" text not null, "value" text null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "users" ("id" bigserial primary key, "google_id" char(191) null default NULL::bpchar, "fb_id" char(191) null default NULL::bpchar, "name" varchar(191) not null, "email" varchar(191) not null, "email_verified_at" timestamp(6) null, "password" varchar(191) null, "api_token" varchar(191) not null, "phone" varchar(191) null, "remember_token" varchar(100) null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "active" boolean not null default true, "stripe_id" varchar(191) null, "card_brand" varchar(191) null, "card_last_four" varchar(4) null, "trial_ends_at" timestamp(6) null, "verification_code" varchar(191) null, "phone_verified_at" timestamp(6) null, "plan_id" bigint null, "plan_status" varchar(191) not null default '', "cancel_url" varchar(555) not null default '', "update_url" varchar(555) not null default '', "checkout_id" varchar(555) not null default '', "subscription_plan_id" varchar(555) not null default '', "stripe_account" varchar(191) not null default '', "birth_date" varchar(191) not null default '', "lat" varchar(191) null, "lng" varchar(191) null, "working" int not null default 1, "onorder" int null, "numorders" int not null default 0, "rejectedorders" int not null, "paypal_subscribtion_id" varchar(191) null, "mollie_customer_id" varchar(191) null, "mollie_mandate_id" varchar(191) null, "tax_percentage" numeric(6,4) not null default 0.0000, "extra_billing_information" text null, "mollie_subscribtion_id" varchar(191) null, "paystack_subscribtion_id" varchar(191) null, "paystack_trans_id" varchar(191) null);`);
    this.addSql(`alter table "users" add constraint "users_email_key" unique ("email");`);
    this.addSql(`alter table "users" add constraint "users_api_token_key" unique ("api_token");`);
    this.addSql(`create index "users_stripe_id_index" on "users" ("stripe_id");`);
    this.addSql(`alter table "users" add constraint "users_verification_code_key" unique ("verification_code");`);

    this.addSql(`create table "subscriptions" ("id" bigserial primary key, "user_id" bigint not null, "name" varchar(191) not null, "stripe_id" varchar(191) not null, "stripe_status" varchar(191) not null, "stripe_plan" varchar(191) not null, "quantity" int not null, "trial_ends_at" timestamp(6) null, "ends_at" timestamp(6) null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);
    this.addSql(`create index "subscriptions_user_id_stripe_status_index" on "subscriptions" ("user_id", "stripe_status");`);

    this.addSql(`create table "subscription_items" ("id" bigserial primary key, "subscription_id" bigint not null, "stripe_id" varchar(191) not null, "stripe_plan" varchar(191) not null, "quantity" int not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);
    this.addSql(`create index "subscription_items_stripe_id_index" on "subscription_items" ("stripe_id");`);
    this.addSql(`alter table "subscription_items" add constraint "subscription_items_subscription_id_stripe_plan_unique" unique ("subscription_id", "stripe_plan");`);

    this.addSql(`create table "sms_verifications" ("id" bigserial primary key, "contact_number" varchar(191) not null, "code" varchar(191) not null, "user_id" bigint not null, "status" varchar(191) not null default 'pending', "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "restorants" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "name" varchar(191) not null, "subdomain" varchar(191) null, "logo" varchar(191) not null default '', "cover" varchar(191) not null default '', "active" boolean not null default true, "user_id" bigint not null, "lat" varchar(191) not null, "lng" varchar(191) not null, "address" varchar(191) not null, "phone" varchar(191) not null, "minimum" varchar(191) not null default '0', "description" varchar(500) not null default '', "fee" numeric(8,2) not null default 0.00, "static_fee" numeric(8,2) not null default 0.00, "radius" varchar(800) not null default '', "is_featured" boolean not null default false, "city_id" bigint null, "views" int not null default 0, "can_pickup" int not null default 1, "can_deliver" int not null default 1, "self_deliver" int not null default 0, "free_deliver" int not null default 0, "whatsapp_phone" varchar(191) null, "fb_username" varchar(191) null, "do_covertion" int not null default 1, "currency" varchar(191) not null, "payment_info" varchar(191) not null, "mollie_payment_key" varchar(191) not null);`);
    this.addSql(`alter table "restorants" add constraint "restorants_name_key" unique ("name");`);
    this.addSql(`alter table "restorants" add constraint "restorants_subdomain_key" unique ("subdomain");`);

    this.addSql(`create table "restoareas" ("id" bigserial primary key, "name" varchar(191) not null, "restaurant_id" bigint not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null);`);

    this.addSql(`create table "tables" ("id" bigserial primary key, "name" varchar(191) not null, "size" int not null default 4, "restoarea_id" bigint null, "restaurant_id" bigint not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null);`);

    this.addSql(`create table "localmenus" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "restaurant_id" bigint not null, "language" varchar(3) not null, "languagename" varchar(191) not null, "default" int not null default 0);`);

    this.addSql(`create table "hours" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "0_from" varchar(191) null, "0_to" varchar(191) null, "1_from" varchar(191) null, "1_to" varchar(191) null, "2_from" varchar(191) null, "2_to" varchar(191) null, "3_from" varchar(191) null, "3_to" varchar(191) null, "4_from" varchar(191) null, "4_to" varchar(191) null, "5_from" varchar(191) null, "5_to" varchar(191) null, "6_from" varchar(191) null, "6_to" varchar(191) null, "restorant_id" bigint not null);`);

    this.addSql(`create table "coupons" ("id" bigserial primary key, "name" varchar(191) not null, "code" varchar(8) not null, "restaurant_id" bigint not null, "type" int not null default 1, "price" numeric(8,2) not null, "active_from" date not null, "active_to" date not null, "limit_to_num_uses" int not null, "used_count" int not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);
    this.addSql(`alter table "coupons" add constraint "coupons_code_key" unique ("code");`);

    this.addSql(`create table "categories" ("id" bigserial primary key, "name" varchar(191) not null, "restorant_id" bigint not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "order_index" int not null default 0, "active" int not null default 1);`);

    this.addSql(`create table "items" ("id" bigserial primary key, "name" varchar(191) not null, "description" varchar(455) not null, "image" varchar(191) not null, "price" numeric(8,2) not null, "category_id" bigint not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "available" int not null default 1, "has_variants" int not null default 0, "vat" numeric(8,2) null default NULL::numeric, "deleted_at" timestamp(6) null);`);

    this.addSql(`create table "options" ("id" bigserial primary key, "item_id" bigint not null, "name" varchar(191) not null, "options" varchar(500) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null);`);

    this.addSql(`create table "extras" ("id" bigserial primary key, "item_id" bigint not null, "price" numeric(8,2) not null, "name" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null, "extra_for_all_variants" int not null default 1);`);

    this.addSql(`create table "banners" ("id" bigserial primary key, "name" varchar(191) not null, "img" varchar(191) not null default '', "type" int not null default 0, "vendor_id" bigint null, "page_id" bigint null, "active_from" date not null, "active_to" date not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "payments" ("id" bigserial primary key, "name" varchar(191) not null, "stripe_id" varchar(191) null, "user_id" bigint not null, "amount" numeric(8,2) not null, "currency" varchar(191) not null, "country" varchar(191) not null, "provider" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null);`);

    this.addSql(`create table "paths" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "lat" varchar(191) null, "lng" varchar(191) null, "user_id" bigint not null);`);

    this.addSql(`create table "address" ("id" bigserial primary key, "address" varchar(191) not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "lat" varchar(191) not null, "lng" varchar(191) not null, "active" boolean not null default true, "user_id" bigint not null, "apartment" varchar(191) null, "intercom" varchar(191) null, "floor" varchar(191) null, "entry" varchar(191) null);`);

    this.addSql(`create table "orders" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "address_id" bigint null, "client_id" bigint null, "restorant_id" bigint not null, "driver_id" bigint null, "delivery_price" numeric(8,2) not null, "order_price" numeric(8,2) not null, "payment_method" varchar(191) null, "payment_status" varchar(191) null, "comment" varchar(500) not null, "lat" varchar(191) null, "lng" varchar(191) null, "srtipe_payment_id" varchar(191) null, "fee" numeric(8,2) not null default 0.00, "fee_value" numeric(5,4) not null default 0.0000, "static_fee" numeric(8,2) not null default 0.00, "delivery_method" int not null default 1, "delivery_pickup_interval" varchar(191) not null default '', "vatvalue" numeric(8,2) null default 0.00, "payment_processor_fee" numeric(8,2) not null default 0.00, "time_to_prepare" int null, "table_id" bigint null, "phone" varchar(191) null, "whatsapp_address" varchar(191) null, "payment_link" varchar(191) not null);`);

    this.addSql(`create table "ratings" ("id" serial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "rating" int not null, "rateable_type" varchar(191) not null, "rateable_id" bigint not null, "user_id" bigint not null, "order_id" bigint not null, "comment" varchar(500) not null);`);
    this.addSql(`create index "ratings_rateable_type_rateable_id_index" on "ratings" ("rateable_type", "rateable_id");`);

    this.addSql(`create table "order_has_status" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "order_id" bigint not null, "status_id" bigint not null, "user_id" bigint not null, "comment" varchar(500) not null);`);

    this.addSql(`create table "order_has_items" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "order_id" bigint not null, "item_id" bigint not null, "qty" int not null default 1, "extras" varchar(800) null default '', "vat" numeric(8,2) null default 0.00, "vatvalue" numeric(8,2) null default 0.00, "variant_price" numeric(8,2) null default NULL::numeric, "variant_name" varchar(191) not null default '');`);

    this.addSql(`create table "variants" ("id" bigserial primary key, "price" numeric(8,2) not null, "options" varchar(500) not null, "image" varchar(191) not null, "qty" int not null default 0, "enable_qty" int not null default 0, "order" int not null default 0, "item_id" bigint not null, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null);`);

    this.addSql(`create table "variants_has_extras" ("id" bigserial primary key, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "variant_id" bigint not null, "extra_id" bigint not null);`);

    this.addSql(`create table "visits" ("id" bigserial primary key, "name" varchar(191) not null, "email" varchar(191) null, "phone_number" varchar(191) null, "note" varchar(191) null, "restaurant_id" bigint not null, "table_id" bigint null, "by" int not null default 1, "created_at" timestamp(6) null, "updated_at" timestamp(6) null, "deleted_at" timestamp(6) null);`);

    this.addSql(`alter table "model_has_permissions" add constraint "model_has_permissions_permission_id_foreign" foreign key ("permission_id") references "permissions" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table "role_has_permissions" add constraint "role_has_permissions_permission_id_foreign" foreign key ("permission_id") references "permissions" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "role_has_permissions" add constraint "role_has_permissions_role_id_foreign" foreign key ("role_id") references "roles" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table "model_has_roles" add constraint "model_has_roles_role_id_foreign" foreign key ("role_id") references "roles" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table "translations" add constraint "translations_language_id_foreign" foreign key ("language_id") references "languages" ("id") on update cascade;`);

    this.addSql(`alter table "users" add constraint "users_plan_id_foreign" foreign key ("plan_id") references "plan" ("id") on update cascade on delete set null;`);

    this.addSql(`alter table "subscriptions" add constraint "subscriptions_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "subscription_items" add constraint "subscription_items_subscription_id_foreign" foreign key ("subscription_id") references "subscriptions" ("id") on update cascade;`);

    this.addSql(`alter table "sms_verifications" add constraint "sms_verifications_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "restorants" add constraint "restorants_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);
    this.addSql(`alter table "restorants" add constraint "restorants_city_id_foreign" foreign key ("city_id") references "cities" ("id") on update cascade on delete set null;`);

    this.addSql(`alter table "restoareas" add constraint "restoareas_restaurant_id_foreign" foreign key ("restaurant_id") references "restorants" ("id") on update cascade;`);

    this.addSql(`alter table "tables" add constraint "tables_restoarea_id_foreign" foreign key ("restoarea_id") references "restoareas" ("id") on update cascade on delete set null;`);
    this.addSql(`alter table "tables" add constraint "tables_restaurant_id_foreign" foreign key ("restaurant_id") references "restorants" ("id") on update cascade;`);

    this.addSql(`alter table "localmenus" add constraint "localmenus_restaurant_id_foreign" foreign key ("restaurant_id") references "restorants" ("id") on update cascade;`);

    this.addSql(`alter table "hours" add constraint "hours_restorant_id_foreign" foreign key ("restorant_id") references "restorants" ("id") on update cascade;`);

    this.addSql(`alter table "coupons" add constraint "coupons_restaurant_id_foreign" foreign key ("restaurant_id") references "restorants" ("id") on update cascade;`);

    this.addSql(`alter table "categories" add constraint "categories_restorant_id_foreign" foreign key ("restorant_id") references "restorants" ("id") on update cascade;`);

    this.addSql(`alter table "items" add constraint "items_category_id_foreign" foreign key ("category_id") references "categories" ("id") on update cascade;`);

    this.addSql(`alter table "options" add constraint "options_item_id_foreign" foreign key ("item_id") references "items" ("id") on update cascade;`);

    this.addSql(`alter table "extras" add constraint "extras_item_id_foreign" foreign key ("item_id") references "items" ("id") on update cascade;`);

    this.addSql(`alter table "banners" add constraint "banners_vendor_id_foreign" foreign key ("vendor_id") references "restorants" ("id") on update cascade on delete set null;`);
    this.addSql(`alter table "banners" add constraint "banners_page_id_foreign" foreign key ("page_id") references "pages" ("id") on update cascade on delete set null;`);

    this.addSql(`alter table "payments" add constraint "payments_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "paths" add constraint "paths_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "address" add constraint "address_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "orders" add constraint "orders_address_id_foreign" foreign key ("address_id") references "address" ("id") on update cascade on delete set null;`);
    this.addSql(`alter table "orders" add constraint "orders_client_id_foreign" foreign key ("client_id") references "users" ("id") on update cascade on delete set null;`);
    this.addSql(`alter table "orders" add constraint "orders_restorant_id_foreign" foreign key ("restorant_id") references "restorants" ("id") on update cascade;`);
    this.addSql(`alter table "orders" add constraint "orders_driver_id_foreign" foreign key ("driver_id") references "users" ("id") on update cascade on delete set null;`);
    this.addSql(`alter table "orders" add constraint "orders_table_id_foreign" foreign key ("table_id") references "tables" ("id") on update cascade on delete set null;`);

    this.addSql(`alter table "ratings" add constraint "ratings_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);
    this.addSql(`alter table "ratings" add constraint "ratings_order_id_foreign" foreign key ("order_id") references "orders" ("id") on update cascade;`);

    this.addSql(`alter table "order_has_status" add constraint "order_has_status_order_id_foreign" foreign key ("order_id") references "orders" ("id") on update cascade;`);
    this.addSql(`alter table "order_has_status" add constraint "order_has_status_status_id_foreign" foreign key ("status_id") references "status" ("id") on update cascade;`);
    this.addSql(`alter table "order_has_status" add constraint "order_has_status_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "order_has_items" add constraint "order_has_items_order_id_foreign" foreign key ("order_id") references "orders" ("id") on update cascade;`);
    this.addSql(`alter table "order_has_items" add constraint "order_has_items_item_id_foreign" foreign key ("item_id") references "items" ("id") on update cascade;`);

    this.addSql(`alter table "variants" add constraint "variants_item_id_foreign" foreign key ("item_id") references "items" ("id") on update cascade;`);

    this.addSql(`alter table "variants_has_extras" add constraint "variants_has_extras_variant_id_foreign" foreign key ("variant_id") references "variants" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "variants_has_extras" add constraint "variants_has_extras_extra_id_foreign" foreign key ("extra_id") references "extras" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table "visits" add constraint "visits_restaurant_id_foreign" foreign key ("restaurant_id") references "restorants" ("id") on update cascade;`);
    this.addSql(`alter table "visits" add constraint "visits_table_id_foreign" foreign key ("table_id") references "tables" ("id") on update cascade on delete set null;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "restorants" drop constraint "restorants_city_id_foreign";`);

    this.addSql(`alter table "translations" drop constraint "translations_language_id_foreign";`);

    this.addSql(`alter table "banners" drop constraint "banners_page_id_foreign";`);

    this.addSql(`alter table "model_has_permissions" drop constraint "model_has_permissions_permission_id_foreign";`);

    this.addSql(`alter table "role_has_permissions" drop constraint "role_has_permissions_permission_id_foreign";`);

    this.addSql(`alter table "users" drop constraint "users_plan_id_foreign";`);

    this.addSql(`alter table "role_has_permissions" drop constraint "role_has_permissions_role_id_foreign";`);

    this.addSql(`alter table "model_has_roles" drop constraint "model_has_roles_role_id_foreign";`);

    this.addSql(`alter table "order_has_status" drop constraint "order_has_status_status_id_foreign";`);

    this.addSql(`alter table "subscriptions" drop constraint "subscriptions_user_id_foreign";`);

    this.addSql(`alter table "sms_verifications" drop constraint "sms_verifications_user_id_foreign";`);

    this.addSql(`alter table "restorants" drop constraint "restorants_user_id_foreign";`);

    this.addSql(`alter table "payments" drop constraint "payments_user_id_foreign";`);

    this.addSql(`alter table "paths" drop constraint "paths_user_id_foreign";`);

    this.addSql(`alter table "address" drop constraint "address_user_id_foreign";`);

    this.addSql(`alter table "orders" drop constraint "orders_client_id_foreign";`);

    this.addSql(`alter table "orders" drop constraint "orders_driver_id_foreign";`);

    this.addSql(`alter table "ratings" drop constraint "ratings_user_id_foreign";`);

    this.addSql(`alter table "order_has_status" drop constraint "order_has_status_user_id_foreign";`);

    this.addSql(`alter table "subscription_items" drop constraint "subscription_items_subscription_id_foreign";`);

    this.addSql(`alter table "restoareas" drop constraint "restoareas_restaurant_id_foreign";`);

    this.addSql(`alter table "tables" drop constraint "tables_restaurant_id_foreign";`);

    this.addSql(`alter table "localmenus" drop constraint "localmenus_restaurant_id_foreign";`);

    this.addSql(`alter table "hours" drop constraint "hours_restorant_id_foreign";`);

    this.addSql(`alter table "coupons" drop constraint "coupons_restaurant_id_foreign";`);

    this.addSql(`alter table "categories" drop constraint "categories_restorant_id_foreign";`);

    this.addSql(`alter table "banners" drop constraint "banners_vendor_id_foreign";`);

    this.addSql(`alter table "orders" drop constraint "orders_restorant_id_foreign";`);

    this.addSql(`alter table "visits" drop constraint "visits_restaurant_id_foreign";`);

    this.addSql(`alter table "tables" drop constraint "tables_restoarea_id_foreign";`);

    this.addSql(`alter table "orders" drop constraint "orders_table_id_foreign";`);

    this.addSql(`alter table "visits" drop constraint "visits_table_id_foreign";`);

    this.addSql(`alter table "items" drop constraint "items_category_id_foreign";`);

    this.addSql(`alter table "options" drop constraint "options_item_id_foreign";`);

    this.addSql(`alter table "extras" drop constraint "extras_item_id_foreign";`);

    this.addSql(`alter table "order_has_items" drop constraint "order_has_items_item_id_foreign";`);

    this.addSql(`alter table "variants" drop constraint "variants_item_id_foreign";`);

    this.addSql(`alter table "variants_has_extras" drop constraint "variants_has_extras_extra_id_foreign";`);

    this.addSql(`alter table "orders" drop constraint "orders_address_id_foreign";`);

    this.addSql(`alter table "ratings" drop constraint "ratings_order_id_foreign";`);

    this.addSql(`alter table "order_has_status" drop constraint "order_has_status_order_id_foreign";`);

    this.addSql(`alter table "order_has_items" drop constraint "order_has_items_order_id_foreign";`);

    this.addSql(`alter table "variants_has_extras" drop constraint "variants_has_extras_variant_id_foreign";`);

    this.addSql(`drop table if exists "cities" cascade;`);

    this.addSql(`drop table if exists "languages" cascade;`);

    this.addSql(`drop table if exists "migrations" cascade;`);

    this.addSql(`drop table if exists "pages" cascade;`);

    this.addSql(`drop table if exists "password_resets" cascade;`);

    this.addSql(`drop table if exists "permissions" cascade;`);

    this.addSql(`drop table if exists "model_has_permissions" cascade;`);

    this.addSql(`drop table if exists "plan" cascade;`);

    this.addSql(`drop table if exists "posts" cascade;`);

    this.addSql(`drop table if exists "roles" cascade;`);

    this.addSql(`drop table if exists "role_has_permissions" cascade;`);

    this.addSql(`drop table if exists "model_has_roles" cascade;`);

    this.addSql(`drop table if exists "settings" cascade;`);

    this.addSql(`drop table if exists "status" cascade;`);

    this.addSql(`drop table if exists "translations" cascade;`);

    this.addSql(`drop table if exists "users" cascade;`);

    this.addSql(`drop table if exists "subscriptions" cascade;`);

    this.addSql(`drop table if exists "subscription_items" cascade;`);

    this.addSql(`drop table if exists "sms_verifications" cascade;`);

    this.addSql(`drop table if exists "restorants" cascade;`);

    this.addSql(`drop table if exists "restoareas" cascade;`);

    this.addSql(`drop table if exists "tables" cascade;`);

    this.addSql(`drop table if exists "localmenus" cascade;`);

    this.addSql(`drop table if exists "hours" cascade;`);

    this.addSql(`drop table if exists "coupons" cascade;`);

    this.addSql(`drop table if exists "categories" cascade;`);

    this.addSql(`drop table if exists "items" cascade;`);

    this.addSql(`drop table if exists "options" cascade;`);

    this.addSql(`drop table if exists "extras" cascade;`);

    this.addSql(`drop table if exists "banners" cascade;`);

    this.addSql(`drop table if exists "payments" cascade;`);

    this.addSql(`drop table if exists "paths" cascade;`);

    this.addSql(`drop table if exists "address" cascade;`);

    this.addSql(`drop table if exists "orders" cascade;`);

    this.addSql(`drop table if exists "ratings" cascade;`);

    this.addSql(`drop table if exists "order_has_status" cascade;`);

    this.addSql(`drop table if exists "order_has_items" cascade;`);

    this.addSql(`drop table if exists "variants" cascade;`);

    this.addSql(`drop table if exists "variants_has_extras" cascade;`);

    this.addSql(`drop table if exists "visits" cascade;`);
  }

}
