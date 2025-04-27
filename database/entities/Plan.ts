import { Entity, type Opt, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Plan {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ type: 'integer' })
  limitItems: number & Opt = 0;

  @Property({ type: 'integer' })
  limitOrders: number & Opt = 0;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  price!: string;

  @Property({ type: 'integer' })
  period: number & Opt = 1;

  @Property({ length: 191 })
  paddleId!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

  @Property({ type: 'string', length: 555 })
  description: string & Opt = '';

  @Property({ type: 'string', length: 555 })
  features: string & Opt = '';

  @Property({ type: 'integer' })
  limitViews: number & Opt = 0;

  @Property({ type: 'integer' })
  enableOrdering: number & Opt = 1;

  @Property({ length: 191 })
  stripeId!: string;

  @Property({ length: 191, nullable: true })
  paypalId?: string;

  @Property({ length: 191, nullable: true })
  mollieId?: string;

  @Property({ length: 191, nullable: true })
  paystackId?: string;

}
