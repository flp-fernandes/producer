import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { UserModule } from 'src/user/user.module';
import { MessagerController } from './messager.controller';
import { MessagerService } from './messager.service';
class RabbbitMQModuleMessager extends RabbitMQModule {}

@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbbitMQModuleMessager, {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.envConfig.rabbitmqUri,
        connectionInitOptions: { wait: false },
      }),
    }),
    ConfigModule,
    UserModule
  ],
  providers: [MessagerService],
  controllers: [MessagerController]
})
export class MessagerModule {}
