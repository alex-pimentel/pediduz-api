import { Entity, Index, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Users } from './Users';

@Entity()
@Index({ name: 'subscriptions_user_id_stripe_status_index', properties: ['user', 'stripeStatus'] })
export class Subscriptions {

  @PrimaryKey()
  id!: bigint;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 191 })
  stripeId!: string;

  @Property({ length: 191 })
  stripeStatus!: string;

  @Property({ length: 191 })
  stripePlan!: string;

  @Property()
  quantity!: number;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  trialEndsAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  endsAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
