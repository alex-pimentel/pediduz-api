import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Users } from './Users';

@Entity()
export class Address {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  address!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191 })
  lat!: string;

  @Property({ length: 191 })
  lng!: string;

  @Property({ type: 'boolean' })
  active: boolean & Opt = true;

  @ManyToOne({ entity: () => Users })
  user!: Users;

  @Property({ length: 191, nullable: true })
  apartment?: string;

  @Property({ length: 191, nullable: true })
  intercom?: string;

  @Property({ length: 191, nullable: true })
  floor?: string;

  @Property({ length: 191, nullable: true })
  entry?: string;

}
