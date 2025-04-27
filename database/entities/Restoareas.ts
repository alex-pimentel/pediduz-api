import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Restorants } from './Restorants';

@Entity()
export class Restoareas {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191 })
  name!: string;

  @ManyToOne({ entity: () => Restorants })
  restaurant!: Restorants;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
