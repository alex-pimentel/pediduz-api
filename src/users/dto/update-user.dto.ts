import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Add relevant properties from the User entity
  id?: number;
  email?: string;
  name?: string;
  active?: boolean;
}
