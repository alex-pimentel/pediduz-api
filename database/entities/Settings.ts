import { Entity, type Opt, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Settings {

  @PrimaryKey()
  id!: bigint;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  createdAt?: Date;

  @Property({ columnType: 'timestamp(6)', nullable: true })
  updatedAt?: Date;

  @Property({ length: 191 })
  siteName!: string;

  @Property({ length: 191 })
  siteLogo!: string;

  @Property({ length: 191 })
  search!: string;

  @Property({ type: 'string', length: 191 })
  restorantDetailsImage: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  restorantDetailsCoverImage: string & Opt = '';

  @Property({ length: 191 })
  description!: string;

  @Property({ length: 191 })
  headerTitle!: string;

  @Property({ length: 191 })
  headerSubtitle!: string;

  @Property({ type: 'string', length: 191 })
  currency: string & Opt = 'USD';

  @Property({ type: 'string', length: 191 })
  facebook: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  instagram: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  playstore: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  appstore: string & Opt = '';

  @Property({ type: 'string', length: 191, nullable: true })
  mapsApiKey?: string = '';

  @Property({ type: 'decimal', precision: 8, scale: 2, defaultRaw: `0.00` })
  delivery!: string & Opt;

  @Property({ type: 'string', length: 191 })
  typeform: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  mobileInfoTitle: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  mobileInfoSubtitle: string & Opt = '';

  @Property({ type: 'string', length: 191 })
  orderOptions: string & Opt = '{}';

  @Property({ length: 191, nullable: true })
  siteLogoDark?: string;

}
