import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity('mobile-de')
export class MobileDeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column('text')
  email: string;
}
