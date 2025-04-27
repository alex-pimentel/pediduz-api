import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Roles } from './Roles';

@Entity()
export class Permissions {

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

  @ManyToMany({ entity: () => Roles, pivotTable: 'role_has_permissions', joinColumn: 'permission_id', inverseJoinColumn: 'role_id' })
  roleHasPermissions = new Collection<Roles>(this);

}
