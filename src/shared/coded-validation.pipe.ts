import { BadRequestException, Injectable, ValidationError, ValidationPipe } from "@nestjs/common";

@Injectable()
export class CodedValidatorPipe extends ValidationPipe {
    constructor() {
        super({
            exceptionFactory: errors => this.transformException(errors),
            validationError: { target: false, value: false }
        });
    }

    transformException(errors: ValidationError[]): BadRequestException {
        return new BadRequestException({
            code: 'VALIDATION_FAILED',
            message: 'Validation failed',
            details: errors,
        });
    }
}
