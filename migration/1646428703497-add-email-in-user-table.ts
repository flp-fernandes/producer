import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailInUserTable1646428703497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user ADD email VARCHAR(300) NOT NULL AFTER fullname`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user DROP COLUMN email`);
    }

}
