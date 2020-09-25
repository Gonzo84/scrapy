import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestModel {
  @ApiProperty({
    description: 'email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    nullable: false,
    minimum: 8,
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
