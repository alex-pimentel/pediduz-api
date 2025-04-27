import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Languages {

  @PrimaryKey()
  id!: number;

  @Property({ length: 191, nullable: true })
  name?: string;

  @Property({ length: 191 })
  language!: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
