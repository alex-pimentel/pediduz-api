import { MikroORM } from '@mikro-orm/core';
import config from '../database/mikro-orm.config'; // Import MikroORM configuration

let orm: MikroORM;

beforeAll(async () => {
  orm = await MikroORM.init(config); // Initialize MikroORM with test config
  const migrator = orm.getMigrator();
  await migrator.up(); // Run all pending migrations
});

afterAll(async () => {
  await orm.close(); // Close MikroORM connection after tests
});

export { orm };