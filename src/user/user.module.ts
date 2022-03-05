import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]), 
    ConfigModule
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule { }
