import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1646416685817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        type: 'bigint',
                        name: 'id',
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        type: 'varchar',
                        name: 'userId',
                        length: '200',
                        comment: 'username do usuario'
                    },
                    {
                        type: 'datetime',
                        name: 'createdAt',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        type: 'datetime',
                        name: 'updatedAt',
                        default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'
                    },
                    {
                        type: 'datetime',
                        name: 'deletedAt',
                        default: null,
                        isNullable: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
