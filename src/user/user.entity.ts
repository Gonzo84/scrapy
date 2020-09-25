import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { UserDto } from './user.dto';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

@Entity('users')
@Unique('unique_user_email', ['email'])
@Index('index_user_email', ['email'])
export class UserEntity implements UserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column('text')
  email: string;

  @Column('text')
  passwordHash: string;

  @IsNotEmpty()
  @MaxLength(20)
  @Column('text')
  firstName: string;

  @IsNotEmpty()
  @MaxLength(40)
  @Column('text')
  lastName: string;

  @CreateDateColumn({
    nullable: false,
    name: 'dt_create',
  })
  createdOn: Date;

  @UpdateDateColumn({
    nullable: false,
    name: 'dt_modified',
  })
  modifiedOn: Date;
}
