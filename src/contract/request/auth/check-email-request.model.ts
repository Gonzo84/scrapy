import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckEmailRequestModel {
  @ApiProperty({
    nullable: false,
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
