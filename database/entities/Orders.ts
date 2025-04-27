import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Address } from './Address';
import { Restorants } from './Restorants';
import { Tables } from './Tables';
import { Users } from './Users';

@Entity()
export class Orders {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @ManyToOne({ entity: () => Address, nullable: true })
  address?: Address;

  @ManyToOne({ entity: () => Users, nullable: true })
  client?: Users;

  @ManyToOne({ entity: () => Restorants })
  restorant!: Restorants;

  @ManyToOne({ entity: () => Users, nullable: true })
  driver?: Users;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  deliveryPrice!: string;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  orderPrice!: string;

  @Property({ length: 191, nullable: true })
  paymentMethod?: string;

  @Property({ length: 191, nullable: true })
  paymentStatus?: string;

  @Property({ length: 500 })
  comment!: string;

  @Property({ length: 191, nullable: true })
  lat?: string;

  @Property({ length: 191, nullable: true })
  lng?: string;

  @Property({ length: 191, nullable: true })
  srtipePaymentId?: string;

  @Property({ type: 'decimal', precision: 8, scale: 2, defaultRaw: `0.00` })
  fee!: string & Opt;

  @Property({ type: 'decimal', precision: 5, scale: 4, defaultRaw: `0.0000` })
  feeValue!: string & Opt;

  @Property({ type: 'decimal', precision: 8, scale: 2, defaultRaw: `0.00` })
  staticFee!: string & Opt;

  @Property({ type: 'integer' })
  deliveryMethod: number & Opt = 1;

  @Property({ type: 'string', length: 191 })
  deliveryPickupInterval: string & Opt = '';

  @Property({ type: 'decimal', precision: 8, scale: 2, nullable: true, defaultRaw: `0.00` })
  vatvalue?: string;

  @Property({ type: 'decimal', precision: 8, scale: 2, defaultRaw: `0.00` })
  paymentProcessorFee!: string & Opt;

  @Property({ nullable: true })
  timeToPrepare?: number;

  @ManyToOne({ entity: () => Tables, nullable: true })
  table?: Tables;

  @Property({ length: 191, nullable: true })
  phone?: string;

  @Property({ length: 191, nullable: true })
  whatsappAddress?: string;

  @Property({ length: 191 })
  paymentLink!: string;

}
