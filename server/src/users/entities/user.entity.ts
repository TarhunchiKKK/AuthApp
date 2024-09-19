import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Index } from "typeorm";
import { UserStatus } from "../enums/user-status.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    @Index({ unique: true })
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    regiteredAt: Date;

    @Column({ nullable: true })
    lastLoginAt: Date;

    @Column()
    status: UserStatus;
}
