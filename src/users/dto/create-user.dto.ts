export class CreateUserDto {
  email: string;
  name: string;
  password: string;
  active?: boolean; // Optional field
  planStatus?: string; // Match the casing of the User entity
  apiToken?: string; // Optional field
  rejectedorders?: number; // Optional field
}
