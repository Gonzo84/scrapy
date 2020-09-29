import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { MobileDeService } from './mobile-de.service';
import { MobileDeController } from './mobile-de.controller';
import { MobileDeEntity } from './entities/mobile-de.entity';
import { PuppeteerService } from '../services/puppeteer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MobileDeEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [MobileDeController],
  exports: [MobileDeService],
  providers: [MobileDeService, PuppeteerService],
})
export class MobileDeModule {
}
