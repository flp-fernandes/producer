import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';

export enum NodeEnv {
    Development = 'development',
    Production = 'production',
    Test = 'test',
}

export class ConfigEnv {
    @IsString()
    @IsEnum(NodeEnv)
    nodeEnv: string;

    @IsNumber()
    @IsPositive()
    httpPort: number;

    @IsString()
    mongodbUri: string;

    @IsString()
    mongodbCollection: string;

    @IsString()
    rabbitmqUri: string;

    @IsString()
    typeormHost: string;

    @IsNumber()
    @IsPositive()
    typeormPort: number;

    @IsString()
    typeormUsername: string;

    @IsString()
    typeormPassword: string;

    @IsString()
    typeormDatabase: string;

    @IsString()
    typeormConnection: 'mysql';

    get isProduction(): boolean {
        return this.nodeEnv === NodeEnv.Production;
    }
}
