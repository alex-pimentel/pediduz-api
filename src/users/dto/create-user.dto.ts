export class CreateUserDto {
    email: string;
    name: string;
    password: string;
    active?: boolean;
    plan_status?: string;
  }
  