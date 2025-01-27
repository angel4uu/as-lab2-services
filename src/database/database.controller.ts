import { Controller, Post, Body } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('query')
  async query(
    @Body('query') query: string, 
    @Body('params') params?: any[]
  ): Promise<any> {
    const result = await this.databaseService.query(query, params);
    return result.rows;
  }
}
