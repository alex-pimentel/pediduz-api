import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Items } from './Items';

@Entity()
export class Options {

  @PrimaryKey()
  id!: bigint;

  @ManyToOne({ entity: () => Items })
  item!: Items;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 500 })
  options!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
