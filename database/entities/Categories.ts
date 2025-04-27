import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Restorants } from './Restorants';

@Entity()
export class Categories {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @ManyToOne({ entity: () => Restorants })
  restorant!: Restorants;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ type: 'integer' })
  orderIndex: number & Opt = 0;

  @Property({ type: 'integer' })
  active: number & Opt = 1;

}
