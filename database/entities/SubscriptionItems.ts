import { Entity, ManyToOne, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import { Subscriptions } from './Subscriptions';

@Entity()
@Unique({ name: 'subscription_items_subscription_id_stripe_plan_unique', properties: ['subscription', 'stripePlan'] })
export class SubscriptionItems {

  @PrimaryKey()
  id!: bigint;

  @ManyToOne({ entity: () => Subscriptions })
  subscription!: Subscriptions;

  @Property({ length: 191, index: true })
  stripeId!: string;

  @Property({ length: 191 })
  stripePlan!: string;

  @Property()
  quantity!: number;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
