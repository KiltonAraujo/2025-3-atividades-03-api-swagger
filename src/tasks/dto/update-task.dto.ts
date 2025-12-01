import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';
import {ApiPropertyOptional} from '@nestjs/swagger';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ minLength: 3, maxLength: 100, description: 'Título da tarefa', example: 'Comprar mantimentos' })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ minLength: 3, maxLength: 500, description: 'Descrição detalhada da tarefa', example: 'Comprar frutas, vegetais e pão na padaria.' })
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiPropertyOptional({ enum: TaskStatus, description: 'Status da tarefa', example: TaskStatus.ABERTO })
  status?: TaskStatus;
}
