import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { transform } from '../../scripts/transform-csv-to-json';

@ApiTags('dev')
@Controller('dev')
export class DevController {
  @Get('transform')
  @HttpCode(HttpStatus.OK)
  async transform(): Promise<void> {
    await transform.run();
    console.log('transformation complete');
  }
}
