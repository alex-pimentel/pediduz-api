import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { EntityGenerator } from '@mikro-orm/entity-generator';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`, 
});

const config: Options<PostgreSqlDriver> = {
  // Removed 'type' as it is not a valid property for Mikro-ORM configuration
  dbName: process.env.DB_DATABASE,
  entities: ['./dist/database/entities/*.js'],
  entitiesTs: ['./database/entities/*.ts'],
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432, // Default PostgreSQL port
  debug: process.env.NODE_ENV === 'development',
  driver: PostgreSqlDriver,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'database/migrations',
    glob: '!(*.d).{js,ts}',
  },
  extensions: [EntityGenerator],
};

export default config;