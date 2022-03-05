import { Body, Controller, HttpCode, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { MessagerService } from './messager.service';
import { MessagerResponseDocumentationDTO } from './dto/messager-response-documentation.dto'
import { Response } from 'express';
import { CreateMessageDTO } from './dto/create-message.dto';
import { UserService } from 'src/user/user.service';

@Controller('messager')
export class MessagerController {    
    constructor(
        private readonly messagerService: MessagerService,
    ) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: MessagerResponseDocumentationDTO,
    })
    async createMessage(
        @Res() res: Response,
        @Body() data: CreateMessageDTO
    ): Promise<void> {
        await this.messagerService.createMessage(data.messagerId, data.message);

        res.send();
    }
}
