import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';
import { ApiProperty,ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ minLength: 3, maxLength: 100, description: 'Título da tarefa', example: 'Comprar mantimentos' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ minLength: 3, maxLength: 500, description: 'Descrição detalhada da tarefa', example: 'Comprar frutas, vegetais e pão na padaria.' })
  description: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  @ApiPropertyOptional({ enum: TaskStatus, description: 'Status da tarefa', example: TaskStatus.ABERTO })
  status?: TaskStatus;
}