import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Roles {

  @PrimaryKey()
  id!: number;

  @Property({ length: 191 })
  name!: string;

  @Property({ length: 191 })
  guardName!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
