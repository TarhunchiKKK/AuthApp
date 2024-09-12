import { Controller, Get, Delete, Post, Body, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ChangeUsersStatusDto } from "./dto/change-users-status.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { RemoveUsersDto } from "./dto/remove-users.dto";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    @UseGuards(AuthGuard)
    public async findAllUsers() {
        return await this.usersService.findAllUsers();
    }

    @Delete("remove-multiple")
    @UseGuards(AuthGuard)
    public async removeMultipleUsers(@Body() removeUsersDto: RemoveUsersDto) {
        console.log(removeUsersDto);
        return await this.usersService.removeMultipleUsers(removeUsersDto);
    }

    @Post("change-status")
    @UseGuards(AuthGuard)
    public async changeUsersStatus(@Body() changeUsersStatusDto: ChangeUsersStatusDto) {
        return await this.usersService.changeUsersStatus(changeUsersStatusDto);
    }

    /* This method is using only in development */
    @Post("add-multiple")
    public async addMultipleUsers(@Body() users: CreateUserDto[]) {
        await Promise.all(users.map((user) => this.usersService.create(user)));
    }
}
