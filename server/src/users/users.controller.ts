import { Controller, Get, Param, Delete, Post, Body, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ChangeUsersStatusDto } from "./dto/change-users-status.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthGuard } from "src/auth/guards/auth.guard";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    public async findAll() {
        return await this.usersService.findAll();
    }

    @Delete(":id")
    @UseGuards(AuthGuard)
    public async remove(@Param("id") userId: string) {
        return await this.usersService.remove(userId);
    }

    @Post("change-status")
    @UseGuards(AuthGuard)
    public async changeUsersStatus(@Body() changeUsersStatusDto: ChangeUsersStatusDto) {
        return await this.usersService.changeUsersStatus(changeUsersStatusDto);
    }

    @Post("add-multiple")
    public async addMultiple(@Body() users: CreateUserDto[]) {
        await Promise.all(users.map((user) => this.usersService.create(user)));
    }
}
