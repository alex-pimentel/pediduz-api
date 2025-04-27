import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Languages } from './Languages';

@Entity()
export class Translations {

  @PrimaryKey()
  id!: number;

  @ManyToOne({ entity: () => Languages })
  language!: Languages;

  @Property({ length: 191, nullable: true })
  group?: string;

  @Property({ type: 'text' })
  key!: string;

  @Property({ type: 'text', nullable: true })
  value?: string;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

}
