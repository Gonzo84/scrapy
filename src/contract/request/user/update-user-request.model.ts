import { IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../../../user/user.dto';

export class UpdateUserRequestModel {
  @ApiProperty({
    nullable: false,
  })
  @IsDefined()
  @ValidateNested()
  @Type(() => UserDto)
  user: UserDto;
}
