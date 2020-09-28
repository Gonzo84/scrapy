import { PartialType } from '@nestjs/mapped-types';
import { CreateMobileDeDto } from './create-mobile-de.dto';

export class UpdateMobileDeDto extends PartialType(CreateMobileDeDto) {}