import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Items } from './Items';
import { Orders } from './Orders';

@Entity()
export class OrderHasItems {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @ManyToOne({ entity: () => Orders })
  order!: Orders;

  @ManyToOne({ entity: () => Items })
  item!: Items;

  @Property({ type: 'integer' })
  qty: number & Opt = 1;

  @Property({ type: 'string', length: 800, nullable: true })
  extras?: string = '';

  @Property({ type: 'decimal', precision: 8, scale: 2, nullable: true, defaultRaw: `0.00` })
  vat?: string;

  @Property({ type: 'decimal', precision: 8, scale: 2, nullable: true, defaultRaw: `0.00` })
  vatvalue?: string;

  @Property({ type: 'decimal', precision: 8, scale: 2, nullable: true, defaultRaw: `NULL::numeric` })
  variantPrice?: string;

  @Property({ type: 'string', length: 191 })
  variantName: string & Opt = '';

}
