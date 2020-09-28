import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailSenderModule } from './mail-sender/mail-sender.module';
import { MobileDeModule } from './mobile-de/mobile-de.module';
import { DevModule } from './dev/dev.module';

import { configService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    UserModule,
    AuthModule,
    MailSenderModule,
    MobileDeModule,
    DevModule
  ],
})
export class AppModule {
}
