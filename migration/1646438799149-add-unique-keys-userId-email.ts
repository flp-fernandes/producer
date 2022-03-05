import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUniqueKeysUserIdEmail1646438799149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE user ADD CONSTRAINT uc_userId_email UNIQUE (userId, email)');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE user DROP INDEX ux_userId_email');
    }

}
