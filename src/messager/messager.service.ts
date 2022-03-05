import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { ConfigService } from 'src/config/config.service';
import { UserService } from 'src/user/user.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { PublishTransferDto } from './dto/publish-transfer-dto';

@Injectable()
export class MessagerService {
    private readonly logger = new Logger(MessagerService.name);

    constructor(
        @InjectConnection() private readonly mongoConnection: Connection,
        private readonly configService: ConfigService,
        private readonly userService: UserService,
        private readonly amqpConnection: AmqpConnection,
    ) { }

    async createMessage(messagerId: string, message: string): Promise<any> {
        // salva no mongodb
        await this.mongoConnection
            .collection(this.configService.envConfig.mongodbCollection) //adicionar no config a collection name === producer
            .insertOne({ messagerId, message, createdAt: new Date() });

        const user = await this.userService.getUserByUsername(messagerId);

        if (!user) {
            this.logger.error('User not found');
            throw new BadRequestException('User not found');
        }

        try {
            await this.publishMessageRabbit({
                messagerId,
                message
            });
        } catch (err) {
            this.logger.log(`error on publish message: ${JSON.stringify(err)}`)
        }

        this.logger.log('Message created');
    }

    async publishMessageRabbit(
        message: PublishTransferDto
    ): Promise<void> {
        await this.amqpConnection.publish('message.dx', 'message.message', message);
    }
}
