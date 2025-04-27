import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Categories } from './Categories';

@Entity()
export class Items {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 455 })
  description!: string;

  @Property({ length: 191 })
  image!: string;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  price!: string;

  @ManyToOne({ entity: () => Categories })
  category!: Categories;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ type: 'integer' })
  available: number & Opt = 1;

  @Property({ type: 'integer' })
  hasVariants: number & Opt = 0;

  @Property({ type: 'decimal', precision: 8, scale: 2, nullable: true, defaultRaw: `NULL::numeric` })
  vat?: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
