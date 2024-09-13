import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserStatus } from "./enums/user-status.enum";
import { ChangeUsersStatusDto } from "./dto/change-users-status.dto";
import { RemoveUsersDto } from "./dto/remove-users.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import * as argon2 from "argon2";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}

    public async create(createUserDto: CreateUserDto) {
        const existUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email,
            },
        });

        if (existUser) {
            throw new BadRequestException("User with such email already exists.");
        }

        const hashedPassword = await argon2.hash(createUserDto.password);
        const dataToSave: Omit<User, "id" | "regiteredAt"> = {
            ...createUserDto,
            password: hashedPassword,
            status: UserStatus.Active,
            lastLoginAt: null,
        };
        return await this.usersRepository.save(dataToSave);
    }

    public async findAllUsers() {
        return await this.usersRepository.find({
            order: {
                email: "ASC",
            },
        });
    }

    public async findUserById(userId: string) {
        const user = await this.usersRepository.findOne({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with id=${userId} not found.`);
        }

        return user;
    }

    public async findUserByEmail(email: string) {
        const user = await this.usersRepository.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            throw new NotFoundException(`User with email=${email} not found.`);
        }

        return user;
    }

    public async updateUser(userId: string, updateUserDto: UpdateUserDto) {
        await this.usersRepository.update(userId, updateUserDto);
    }

    public async changeUsersStatus(changeUsersStatusDto: ChangeUsersStatusDto) {
        const { users, status } = changeUsersStatusDto;

        await Promise.all(users.map((user) => this.usersRepository.update(user.id, { status })));
    }

    public async removeMultipleUsers(removeUsersDto: RemoveUsersDto) {
        await Promise.all(removeUsersDto.users.map((user) => this.usersRepository.delete(user.id)));
    }
}
