import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Restorants } from './Restorants';

@Entity()
export class Coupons {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 8, unique: 'coupons_code_key' })
  code!: string;

  @ManyToOne({ entity: () => Restorants })
  restaurant!: Restorants;

  @Property({ type: 'integer' })
  type: number & Opt = 1;

  @Property({ type: 'decimal', precision: 8, scale: 2 })
  price!: string;

  @Property({ type: 'date' })
  activeFrom!: string;

  @Property({ type: 'date' })
  activeTo!: string;

  @Property()
  limitToNumUses!: number;

  @Property()
  usedCount!: number;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
