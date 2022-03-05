import { Controller, Get, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { Connection } from 'typeorm';

@Controller()
export class AppController {

  private readonly logger = new Logger(AppController.name)
  
  constructor(
    private readonly connection: Connection,
  ) {}

  @Get('/status')
  @HttpCode(HttpStatus.NO_CONTENT)
  async status() {
    this.logger.log('App is running!!!');
    await this.connection.query('SELECT 1');
  }
}
