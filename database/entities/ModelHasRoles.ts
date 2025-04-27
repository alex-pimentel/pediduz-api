import { Entity, Index, ManyToOne, PrimaryKey, PrimaryKeyProp } from '@mikro-orm/core';
import { Roles } from './Roles';

@Entity()
@Index({ name: 'model_has_roles_model_id_model_type_index', properties: ['modelId', 'modelType'] })
export class ModelHasRoles {

  [PrimaryKeyProp]?: ['role', 'modelType', 'modelId'];

  @ManyToOne({ entity: () => Roles, deleteRule: 'cascade', primary: true })
  role!: Roles;

  @PrimaryKey({ length: 191 })
  modelType!: string;

  @PrimaryKey()
  modelId!: bigint;

}
