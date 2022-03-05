import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateMessageDTO {
    @ApiProperty({
        description: 'Id do mensageiro',
        example: '@matusalem',
        minLength: 5,
        maxLength: 20,
        type: 'string'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(20)
    messagerId: string;

    @ApiProperty({
        description: 'Mensagem',
        example: 'blablablabla bla blabla blablabla',
        maxLength: 200
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    message: string;
}