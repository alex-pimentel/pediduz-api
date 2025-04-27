import { Entity, ManyToOne, type Opt, PrimaryKey, Property } from '@mikro-orm/core';
import { Restoareas } from './Restoareas';
import { Restorants } from './Restorants';

@Entity()
export class Tables {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @Property({ type: 'integer' })
  size: number & Opt = 4;

  @ManyToOne({ entity: () => Restoareas, nullable: true })
  restoarea?: Restoareas;

  @ManyToOne({ entity: () => Restorants })
  restaurant!: Restorants;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
