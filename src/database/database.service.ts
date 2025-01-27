import { Injectable} from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService{
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: 'user',
      host: 'data_access',
      database: 'university',
      password: 'password',
      port: 5432,
    });
  }

  async query(text: string, params?: any[]) {
    try {
      return await this.pool.query(text, params);
    } catch (error) {
      console.error('Database query error:', error);
      throw new Error('Failed to execute query');
    }
  }
}
