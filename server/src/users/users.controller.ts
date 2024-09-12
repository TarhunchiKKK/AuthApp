import { Controller, Get, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    public async findAll() {
        return await this.usersService.findAll();
    }

    @Delete(":id")
    public async remove(@Param("id") userId: string) {
        return await this.usersService.remove(userId);
    }
}
