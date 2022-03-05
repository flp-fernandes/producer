import { ApiProperty } from "@nestjs/swagger";

export class MessagerResponseDocumentationDTO {
    @ApiProperty({
        description: '',
        example: ''
    })
    messagerId: string;

    @ApiProperty({
        description: '',
        example: ''
    })
    message: string;
}