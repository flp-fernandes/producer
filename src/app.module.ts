import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { MessagerModule } from './messager/messager.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { CreateTableUser1646416685817 } from '../migration/1646416685817-create-table-user';
import { AddFullnameInUserTable1646427666382 } from '../migration/1646427666382-add-fulname-in-user-table';
import { AddEmailInUserTable1646428703497 } from '../migration/1646428703497-add-email-in-user-table';
import { AddUniqueKeysUserIdEmail1646438799149 } from '../migration/1646438799149-add-unique-keys-userId-email';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.envConfig.mongodbUri,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.envConfig.typeormConnection,
        host: configService.envConfig.typeormHost,
        port: configService.envConfig.typeormPort,
        database: configService.envConfig.typeormDatabase,
        username: configService.envConfig.typeormUsername,
        password: configService.envConfig.typeormPassword,
        entities: [User],
        subscribers: [],
        synchronize: false,
        migrationsRun: true,
        migrations: [
          CreateTableUser1646416685817,
          AddFullnameInUserTable1646427666382,
          AddEmailInUserTable1646428703497,
          AddUniqueKeysUserIdEmail1646438799149
        ],
      }),
    }),
    MessagerModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
