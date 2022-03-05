import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { GetUserDTO } from './dto/get-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    private readonly logger = new Logger(UserService.name);

    constructor(
        private readonly userRepository: UserRepository,
    ) { }

    async createUser(messagerUsername: string, messagerFullName: string, messagerEmail: string): Promise<any> {
        const [user] = await this.userRepository.find({
            where: [
                { userId: messagerUsername },
                { email: messagerEmail }
            ]
        });

        if (user) {
            throw new InternalServerErrorException('User already exist');
        }

        await this.userRepository.insert({
            userId: messagerUsername,
            fullname: messagerFullName,
            email: messagerEmail
        });
    }

    async getUserByUsername(messagerUsername: string): Promise<GetUserDTO> {
        const [user] = await this.userRepository.find({
            where: {
                userId: messagerUsername
            }
        });

        if (!user) {
            throw new NotFoundException('User is not found');
        }

        return user;
    }
}
