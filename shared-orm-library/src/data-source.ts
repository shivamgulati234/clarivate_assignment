import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Settings } from './entities/Settings';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', 
  password: 'Laptop@23', 
  database: 'clarivate',
  synchronize: true,
  logging: false,
  entities: [User, Settings],
});