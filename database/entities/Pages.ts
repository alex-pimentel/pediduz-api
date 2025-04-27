import { Entity, type Opt, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Pages {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191 })
  title!: string;

  @Property({ type: 'text' })
  content!: string;

  @Property({ type: 'boolean' })
  showaslink: boolean & Opt = false;

}
