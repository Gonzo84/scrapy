import {
  IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, Matches, MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @IsNumber()
  @ApiProperty()
  id?: number;

  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsNotEmpty()
  @Matches(RegExp('^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ]+$'))
  @MaxLength(20)
  @ApiProperty()
  firstName?: string;

  @IsNotEmpty()
  @Matches(RegExp('^[A-Za-zıöüçğşİÖÜÇĞŞñÑáéíóúÁÉÍÓÚ ]+$'))
  @MaxLength(40)
  @ApiProperty()
  lastName?: string;
}
