import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Plan } from './Plan';

@Entity()
export class Users {

  @PrimaryKey()
  id!: bigint;

  @Property({ type: 'character', length: 191, nullable: true, defaultRaw: `NULL::bpchar` })
  googleId?: string;

  @Property({ type: 'character', length: 191, nullable: true, defaultRaw: `NULL::bpchar` })
  fbId?: string;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 191, unique: 'users_email_key' })
  email!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  emailVerifiedAt?: Date;

  @Property({ length: 191, nullable: true })
  password?: string;

  @Property({ length: 191, unique: 'users_api_token_key' })
  apiToken!: string;

  @Property({ length: 191, nullable: true })
  phone?: string;

  @Property({ length: 100, nullable: true })
  rememberToken?: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ type: 'boolean' })
  active: boolean & Opt = true;

  @Property({ length: 191, nullable: true, index: true })
  stripeId?: string;

  @Property({ length: 191, nullable: true })
  cardBrand?: string;

  @Property({ length: 4, nullable: true })
  cardLastFour?: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  trialEndsAt?: Date;

  @Property({ length: 191, nullable: true, unique: 'users_verification_code_key' })
  verificationCode?: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  phoneVerifiedAt?: Date;

  @ManyToOne({ entity: () => Plan, nullable: true })
  plan?: Plan;

  @Property({ type: 'string', length: 191 })
  planStatus: string & Opt = '';

  @Property({ type: 'string', length: 555 })
  cancelUrl: string & Opt = '';

  @Property({ type: 'string', length: 555 })
  updateUrl: string & Opt = '';

  @Property({ type: 'string', length: 555 })
  checkoutId: string & Opt = '';

  @Property({ type: 'string', length: 555 })
  subscriptionPlanId: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  stripeAccount: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  birthDate: string & Opt = '';

  @Property({ length: 191, nullable: true })
  lat?: string;

  @Property({ length: 191, nullable: true })
  lng?: string;

  @Property({ type: 'integer' })
  working: number & Opt = 1;

  @Property({ nullable: true })
  onorder?: number;

  @Property({ type: 'integer' })
  numorders: number & Opt = 0;

  @Property()
  rejectedorders!: number;

  @Property({ length: 191, nullable: true })
  paypalSubscribtionId?: string;

  @Property({ length: 191, nullable: true })
  mollieCustomerId?: string;

  @Property({ length: 191, nullable: true })
  mollieMandateId?: string;

  @Property({ type: 'decimal', precision: 6, scale: 4, defaultRaw: `0.0000` })
  taxPercentage!: string & Opt;

  @Property({ type: 'text', nullable: true })
  extraBillingInformation?: string;

  @Property({ length: 191, nullable: true })
  mollieSubscribtionId?: string;

  @Property({ length: 191, nullable: true })
  paystackSubscribtionId?: string;

  @Property({ length: 191, nullable: true })
  paystackTransId?: string;

}
