import { Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Options<PostgreSqlDriver> = {
  // Removed 'type' as it is not a valid property for Mikro-ORM configuration
  dbName: process.env.DB_DATABASE,
  entities: ['./dist/**/*.entity.js'],
  entitiesTs: ['./src/**/*.entity.ts'],
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432, // Default PostgreSQL port
  debug: process.env.NODE_ENV === 'development',
  driver: PostgreSqlDriver,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
    glob: '!(*.d).{js,ts}',
  },
};

export default config;