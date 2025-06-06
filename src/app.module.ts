import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MikroOrmModule} from '@mikro-orm/nestjs';
import config from '../database/mikro-orm.config'; // Import MikroORM configuration

@Module({
  imports: [
    MikroOrmModule.forRoot(config), // Register MikroORM with the configuration
    UsersModule, // Import UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
