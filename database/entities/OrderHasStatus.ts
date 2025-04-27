import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Orders } from './Orders';
import { Status } from './Status';
import { Users } from './Users';

@Entity()
export class OrderHasStatus {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @ManyToOne({ entity: () => Orders })
  order!: Orders;

  @ManyToOne({ entity: () => Status })
  status!: Status;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @Property({ length: 500 })
  comment!: string;

}
