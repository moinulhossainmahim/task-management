import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Task title' })
  title: string;

  @IsNotEmpty()
  @ApiProperty({ type: String, description: 'Task description' })
  description: string;
}
