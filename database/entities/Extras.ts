import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Items } from './Items';

@Entity()
export class Extras {

  @PrimaryKey()
  id!: bigint;

  @ManyToOne({ entity: () => Items })
  item!: Items;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  price!: string;

  @Property({ length: 191 })
  name!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

  @Property({ type: 'integer' })
  extraForAllVariants: number & Opt = 1;

}
