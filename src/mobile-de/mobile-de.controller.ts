import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { MobileDeService } from './mobile-de.service';
import { CreateMobileDeDto } from './dto/create-mobile-de.dto';
import { UpdateMobileDeDto } from './dto/update-mobile-de.dto';

@ApiTags('mobile-de')
@Controller('mobile-de')
export class MobileDeController {
  constructor(private readonly mobileDeService: MobileDeService) {
  }

  @Post()
  create(@Body() createMobileDeDto: CreateMobileDeDto) {
    return this.mobileDeService.create(createMobileDeDto);
  }

  @ApiBearerAuth()
  @Get('scrap')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard())
  startScraping(): Promise<string> {
    return this.mobileDeService.scrap();
  }

  @Get()
  findAll() {
    return this.mobileDeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mobileDeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMobileDeDto: UpdateMobileDeDto) {
    return this.mobileDeService.update(+id, updateMobileDeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mobileDeService.remove(+id);
  }
}
