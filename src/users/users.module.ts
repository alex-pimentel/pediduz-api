import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from '../../database/entities/Users';

@Module({
  imports: [MikroOrmModule.forFeature([Users])], // Register the User entity
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService if needed in other modules
})
export class UsersModule {}
