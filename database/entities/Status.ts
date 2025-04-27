import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Status {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191, unique: 'status_name_key' })
  name!: string;

  @Property({ length: 191, unique: 'status_alias_key' })
  alias!: string;

}
