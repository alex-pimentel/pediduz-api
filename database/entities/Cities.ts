import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Cities {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 191, unique: 'cities_alias_key' })
  alias!: string;

  @Property({ length: 191 })
  image!: string;

  @Property({ length: 191 })
  headerTitle!: string;

  @Property({ length: 191 })
  headerSubtitle!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  deletedAt?: Date;

}
