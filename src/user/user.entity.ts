import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    id: string;

    @Column()
    userId: string;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    deletedAt: Date;
}