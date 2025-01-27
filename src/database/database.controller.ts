import { Controller, Post, Body } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post('query')
  async executeQuery(@Body('query') query: string): Promise<any> {
    const result = await this.databaseService.query(query);
    return result.rows;
  }
}
