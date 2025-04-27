import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Items } from './Items';

@Entity()
export class Variants {

  @PrimaryKey()
  id!: bigint;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  price!: string;

  @Property({ length: 500 })
  options!: string;

  @Property({ length: 191 })
  image!: string;

  @Property({ type: 'integer' })
  qty: number & Opt = 0;

  @Property({ type: 'integer' })
  enableQty: number & Opt = 0;

  @Property({ type: 'integer' })
  order: number & Opt = 0;

  @ManyToOne({ entity: () => Items })
  item!: Items;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
