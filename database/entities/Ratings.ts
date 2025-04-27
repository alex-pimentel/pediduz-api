import { Entity, Index, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Orders } from './Orders';
import { Users } from './Users';

@Entity()
@Index({ name: 'ratings_rateable_type_rateable_id_index', properties: ['rateableType', 'rateableId'] })
export class Ratings {

  @PrimaryKey()
  id!: number;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property()
  rating!: number;

  @Property({ length: 191 })
  rateableType!: string;

  @Property()
  rateableId!: bigint;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @ManyToOne({ entity: () => Orders })
  order!: Orders;

  @Property({ length: 500 })
  comment!: string;

}
