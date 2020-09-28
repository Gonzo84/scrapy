import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileDeService } from './mobile-de.service';
import { MobileDeController } from './mobile-de.controller';
import { PassportModule } from '@nestjs/passport';
import { MobileDeEntity } from './entities/mobile-de.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MobileDeEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [MobileDeController],
  exports: [MobileDeService],
  providers: [MobileDeService]
})
export class MobileDeModule {
}
