import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Users } from './Users';

@Entity()
export class SmsVerifications {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  contactNumber!: string;

  @Property({ length: 191 })
  code!: string;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @Property({ type: 'string', length: 191 })
  status: string & Opt = 'pending';

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
