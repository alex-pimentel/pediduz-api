import { Entity, Index, ManyToOne, PrimaryKey, PrimaryKeyProp } from '@mikro-orm/core';
import { Permissions } from './Permissions';

@Entity()
@Index({ name: 'model_has_permissions_model_id_model_type_index', properties: ['modelId', 'modelType'] })
export class ModelHasPermissions {

  [PrimaryKeyProp]?: ['permission', 'modelType', 'modelId'];

  @ManyToOne({ entity: () => Permissions, deleteRule: 'cascade', primary: true })
  permission!: Permissions;

  @PrimaryKey({ length: 191 })
  modelType!: string;

  @PrimaryKey()
  modelId!: bigint;

}
