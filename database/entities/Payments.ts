import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Users } from './Users';

@Entity()
export class Payments {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 191, nullable: true })
  stripeId?: string;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  amount!: string;

  @Property({ length: 191 })
  currency!: string;

  @Property({ length: 191 })
  country!: string;

  @Property({ length: 191 })
  provider!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
