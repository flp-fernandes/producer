import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UserParamsDto {
    @ApiProperty({
        description: 'apelido do usuário',
        example: '@melao',
        type: 'string'
    })
    @IsString()
    @IsNotEmpty()
    username: string;
}