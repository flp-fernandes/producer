import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFullnameInUserTable1646427666382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user ADD fullname VARCHAR(200) NOT NULL  AFTER userId`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user DROP COLUMN fullname`);
    }

}
