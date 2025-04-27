import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Restorants } from './Restorants';
import { Tables } from './Tables';

@Entity()
export class Visits {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 191, nullable: true })
  email?: string;

  @Property({ length: 191, nullable: true })
  phoneNumber?: string;

  @Property({ length: 191, nullable: true })
  note?: string;

  @ManyToOne({ entity: () => Restorants })
  restaurant!: Restorants;

  @ManyToOne({ entity: () => Tables, nullable: true })
  table?: Tables;

  @Property({ type: 'integer' })
  by: number & Opt = 1;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
