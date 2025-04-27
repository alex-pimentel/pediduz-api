import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Cities } from './Cities';
import { Users } from './Users';

@Entity()
export class Restorants {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191, unique: 'restorants_name_key' })
  name!: string;

  @Property({ length: 191, nullable: true, unique: 'restorants_subdomain_key' })
  subdomain?: string;

  @Property({ type: 'string', length: 191 })
  logo: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  cover: string & Opt = '';

  @Property({ type: 'boolean' })
  active: boolean & Opt = true;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @Property({ length: 191 })
  lat!: string;

  @Property({ length: 191 })
  lng!: string;

  @Property({ length: 191 })
  address!: string;

  @Property({ length: 191 })
  phone!: string;

  @Property({ type: 'string', length: 191 })
  minimum: string & Opt = '0';

  @Property({ type: 'string', length: 500 })
  description: string & Opt = '';

  @Property({ type: 'decimal', precision: 8, scale: 2, defaultRaw: `0.00` })
  fee!: string & Opt;

  @Property({ type: 'decimal', precision: 8, scale: 2, defaultRaw: `0.00` })
  staticFee!: string & Opt;

  @Property({ type: 'string', length: 800 })
  radius: string & Opt = '';

  @Property({ type: 'boolean' })
  isFeatured: boolean & Opt = false;

  @ManyToOne({ entity: () => Cities, nullable: true })
  city?: Cities;

  @Property({ type: 'integer' })
  views: number & Opt = 0;

  @Property({ type: 'integer' })
  canPickup: number & Opt = 1;

  @Property({ type: 'integer' })
  canDeliver: number & Opt = 1;

  @Property({ type: 'integer' })
  selfDeliver: number & Opt = 0;

  @Property({ type: 'integer' })
  freeDeliver: number & Opt = 0;

  @Property({ length: 191, nullable: true })
  whatsappPhone?: string;

  @Property({ length: 191, nullable: true })
  fbUsername?: string;

  @Property({ type: 'integer' })
  doCovertion: number & Opt = 1;

  @Property({ length: 191 })
  currency!: string;

  @Property({ length: 191 })
  paymentInfo!: string;

  @Property({ length: 191 })
  molliePaymentKey!: string;

}
