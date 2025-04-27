import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Migrations {

  @PrimaryKey()
  id!: number;

  @Property({ length: 191 })
  migration!: string;

  @Property()
  batch!: number;

}
