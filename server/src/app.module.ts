import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { User } from "./users/entities/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { Connection } from "typeorm";

@Module({
    imports: [
        UsersModule,
        AuthModule,
        ConfigModule.forRoot({ isGlobal: true }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get("PGHOST"),
                port: +configService.get("PGPORT"),
                username: configService.get("PGUSER"),
                password: configService.get("PGPASSWORD"),
                database: configService.get("PGDATABASE"),
                synchronize: true,
                entities: [User],
            }),
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                global: true,
                secret: configService.get("JWT_SECRET"),
                signOptions: {
                    expiresIn: configService.get("JWT_EXPIRATION_IN"),
                },
            }),
        }),
    ],
})
export class AppModule {
    constructor(private connection: Connection) {}
}
