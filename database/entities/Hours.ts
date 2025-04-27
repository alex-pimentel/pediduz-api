import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Restorants } from './Restorants';

@Entity()
export class Hours {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ fieldName: '0_from', length: 191, nullable: true })
  '0From'?: string;

  @Property({ fieldName: '0_to', length: 191, nullable: true })
  '0To'?: string;

  @Property({ fieldName: '1_from', length: 191, nullable: true })
  '1From'?: string;

  @Property({ fieldName: '1_to', length: 191, nullable: true })
  '1To'?: string;

  @Property({ fieldName: '2_from', length: 191, nullable: true })
  '2From'?: string;

  @Property({ fieldName: '2_to', length: 191, nullable: true })
  '2To'?: string;

  @Property({ fieldName: '3_from', length: 191, nullable: true })
  '3From'?: string;

  @Property({ fieldName: '3_to', length: 191, nullable: true })
  '3To'?: string;

  @Property({ fieldName: '4_from', length: 191, nullable: true })
  '4From'?: string;

  @Property({ fieldName: '4_to', length: 191, nullable: true })
  '4To'?: string;

  @Property({ fieldName: '5_from', length: 191, nullable: true })
  '5From'?: string;

  @Property({ fieldName: '5_to', length: 191, nullable: true })
  '5To'?: string;

  @Property({ fieldName: '6_from', length: 191, nullable: true })
  '6From'?: string;

  @Property({ fieldName: '6_to', length: 191, nullable: true })
  '6To'?: string;

  @ManyToOne({ entity: () => Restorants })
  restorant!: Restorants;

}
