import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UserParamsDto } from './dto/user-params.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    
    private readonly logger = new Logger(UserController.name);

    constructor(
        private readonly userService: UserService,
    ) {}

    @Get('/:username')
    @HttpCode(HttpStatus.OK)
    async getUsername(
        @Param() params: UserParamsDto,
        @Res() res: Response
    ): Promise<void> {
        const data = await this.userService.getUserByUsername(params.username);

        res.send(data);
    }
    
    @Get()
    @HttpCode(HttpStatus.NO_CONTENT)
    async status() {
        this.logger.log('Reaching user controller');
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    async createUser(
        @Res() res: Response,
        @Body() data: CreateUserDto,
    ): Promise<void> {
        await this.userService.createUser(data.userId, data.fullname, data.email);

        res.send();
    }
}
