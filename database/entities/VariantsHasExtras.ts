import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Extras } from './Extras';
import { Variants } from './Variants';

@Entity()
export class VariantsHasExtras {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @ManyToOne({ entity: () => Variants, deleteRule: 'cascade' })
  variant!: Variants;

  @ManyToOne({ entity: () => Extras, deleteRule: 'cascade' })
  extra!: Extras;

}
