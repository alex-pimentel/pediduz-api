import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Posts {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191, nullable: true })
  postType?: string;

  @Property({ length: 191, nullable: true })
  title?: string;

  @Property({ length: 191, nullable: true })
  subtitle?: string;

  @Property({ length: 500, nullable: true })
  description?: string;

  @Property({ length: 191, nullable: true })
  image?: string;

  @Property({ length: 191, nullable: true })
  link?: string;

  @Property({ length: 191, nullable: true })
  linkName?: string;

}
