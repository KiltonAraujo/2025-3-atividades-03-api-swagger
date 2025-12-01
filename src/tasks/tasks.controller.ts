import {
  Controller, Get,
  Post, Body,
  Put, Param,
  Delete, ParseIntPipe,
  HttpCode, HttpStatus,
} from '@nestjs/common';

import {
  ApiTags, ApiBody,
  ApiOperation, ApiParam,
  ApiResponse,

} from '@nestjs/swagger'; 

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';

@Controller('tasks')
@ApiTags('root')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Obter todas as tarefas', description: 'geta as tarefas cadastradas})' })
  @ApiResponse({ status: 200, description: 'ta bala patrao.' })
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma tarefa especifica', description: 'geta uma tarefa})' })
  @ApiResponse({ status: 200, description: 'ta bala patrao.' })

  @ApiParam({ name: 'id', type: 'integer', description: 'ID da tarefa' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova tarefa', description: 'cria uma tarefa'})

  @ApiResponse({ status: 201, description: 'Tarefa criada com sucesso.', type: Task })
  @ApiResponse({ status: 200, description: 'Tarefa ta show.', type: Task })
  @ApiResponse({ status: 400, description: 'Tudo certo'})

  @ApiBody({ type: CreateTaskDto })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma tarefa', description: 'atualiza uma tarefa'})
  @ApiResponse({ status: 200, description: 'Tarefa atualizada com sucesso.', type: Task })
  @ApiResponse({ status: 404, description: '404 nao encontrado.' })
  @ApiResponse({ status: 400, description: 'nada show papi.' })

  @ApiParam({ name: 'id', type: 'integer', description: 'ID da tarefa' })
  @ApiBody({ type: UpdateTaskDto })

  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma tarefa', description: 'deleta uma tarefa'})
  @ApiResponse({ status: 204, description: 'Tarefa deletada com sucesso.' })
  @ApiResponse({ status: 404, description: '404 nao encontrado.' })
  @ApiParam({ name: 'id', type: 'integer', description: 'ID da tarefa' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.remove(id);
  }
}
