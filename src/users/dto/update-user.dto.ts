import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Add relevant properties from the User entity
  id?: bigint;
  email?: string;
  name?: string;
  active?: boolean;
  planStatus?: string; // Match the casing of the User entity
  apiToken?: string; // Optional field
  rejectedorders?: number; // Optional field
}
