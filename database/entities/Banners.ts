import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Pages } from './Pages';
import { Restorants } from './Restorants';

@Entity()
export class Banners {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ type: 'string', length: 191 })
  img: string & Opt = '';

  @Property({ type: 'integer' })
  type: number & Opt = 0;

  @ManyToOne({ entity: () => Restorants, nullable: true })
  vendor?: Restorants;

  @ManyToOne({ entity: () => Pages, nullable: true })
  page?: Pages;

  @Property({ type: 'date' })
  activeFrom!: string;

  @Property({ type: 'date' })
  activeTo!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
