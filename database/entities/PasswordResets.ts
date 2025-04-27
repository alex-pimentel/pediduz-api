import { Entity, Property, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class PasswordResets {

  @PrimaryKey()
  id!: bigint;

  @Property({ length: 191, index: true })
  email!: string;

  @Property({ length: 191 })
  token!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

}
