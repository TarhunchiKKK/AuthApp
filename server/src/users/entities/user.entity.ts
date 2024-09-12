import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, Index } from "typeorm";
import { UserStatus } from "../enums/user-status.enum";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    @Index()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    regiteredAt: Date;

    @Column({ nullable: true })
    lastLogin: Date;

    @Column({ type: "enum", enum: UserStatus })
    status: UserStatus;
}
