import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Restorants } from './Restorants';

@Entity()
export class Localmenus {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @ManyToOne({ entity: () => Restorants })
  restaurant!: Restorants;

  @Property({ length: 3 })
  language!: string;

  @Property({ length: 191 })
  languagename!: string;

  @Property({ type: 'integer' })
  default: number & Opt = 0;

}
