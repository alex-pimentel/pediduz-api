import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'users' })
export class User {
    @PrimaryKey({ type: 'bigint', autoincrement: true })
    id!: number;

    @Property({ type: 'string', length: 191, nullable: true })
    google_id?: string;

    @Property({ type: 'string', length: 191 })
    name!: string;

    @Property({ type: 'string', length: 191 })
    email!: string;

    @Property({ type: 'Date', nullable: true })
    email_verified_at?: Date;

    @Property({ type: 'string', length: 191, nullable: true })
    password?: string;

    @Property({ type: 'string', length: 191, nullable: true })
    phone?: string;

    @Property({ type: 'string', length: 191, nullable: true })
    stripe_id?: string;

    @Property({ type: 'string', length: 191, nullable: true })
    card_brand?: string;

    @Property({ type: 'string', length: 4, nullable: true })
    card_last_four?: string;

    @Property({ type: 'Date', nullable: true })
    trial_ends_at?: Date;

    @Property({ type: 'string', length: 191, nullable: true })
    verification_code?: string;

    @Property({ type: 'Date', nullable: true })
    phone_verified_at?: Date;

    @Property({ type: 'bigint', nullable: true })
    plan_id?: number;

    @Property({ type: 'string', length: 191, default: '' })
    plan_status!: string;

    @Property({ type: 'boolean', default: true })
    active!: boolean;

    @Property({ type: 'Date', nullable: true, onCreate: () => new Date() })
    created_at?: Date;

    @Property({ type: 'Date', nullable: true, onUpdate: () => new Date() })
    updated_at?: Date;
}