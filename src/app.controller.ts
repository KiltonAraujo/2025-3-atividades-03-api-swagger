import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller()
@ApiTags('root')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Obter todas as tarefas', description: 'geta as tarefas cadastradas})' })
  @ApiResponse({ status: 200, description: 'ta bala patrao.' })
  getInfo() {
    return this.appService.getInfo();
  }
}
