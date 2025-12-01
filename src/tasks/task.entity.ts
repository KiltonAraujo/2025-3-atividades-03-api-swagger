import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  ABERTO = 'aberto',
  FAZENDO = 'fazendo',
  FINALIZADO = 'finalizado',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty({ minLength: 3, maxLength: 100, description: 'Titulo da tarefa', example: 'Titulo muito legal' })
  title: string;

  @Column()
  @ApiProperty({ minLength: 3, maxLength: 500, description: 'Descrição detalhada da tarefa', example: 'Comprar frutas, vegetais e pão na padaria.' })
  description: string;

  @ApiProperty({ enum: TaskStatus, description: 'Status da tarefa', example: TaskStatus.ABERTO })
  @Column({
    type: 'text',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  status: TaskStatus;

  @CreateDateColumn()
  @ApiProperty( {description: 'Data de criação da tarefa', example: '2024-06-15T13:45:30.000Z' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty( {description: 'Data de atualização da tarefa', example: '2024-06-15T14:00:00.000Z' })
  updatedAt: Date;
}
