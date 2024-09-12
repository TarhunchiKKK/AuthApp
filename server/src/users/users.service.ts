import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserStatus } from "./enums/user-status.enum";
import * as argon2 from "argon2";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    public async create(createUserDto: CreateUserDto) {
        const hashedPassword = await argon2.hash(createUserDto.password);
        const dataToSave: Omit<User, "id" | "regiteredAt"> = {
            ...createUserDto,
            password: hashedPassword,
            status: UserStatus.Active,
            lastLoginAt: null,
        };
        return await this.usersRepository.save(dataToSave);
    }

    public async findAll() {
        return await this.usersRepository.find();
    }

    public async findOneById(userId: string) {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with id=${userId} not found`);
        }

        return user;
    }

    public async findOneByEmail(email: string) {
        const user = await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with email=${email} not found`);
        }

        return user;
    }

    public async remove(userId: string) {
        await this.usersRepository.delete(userId);
    }
}
