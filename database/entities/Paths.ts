import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Users } from './Users';

@Entity()
export class Paths {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191, nullable: true })
  lat?: string;

  @Property({ length: 191, nullable: true })
  lng?: string;

  @ManyToOne({ entity: () => Users })
  user!: Users;

}
