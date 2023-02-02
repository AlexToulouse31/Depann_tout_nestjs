import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ReservationModule } from './reservations/reservation.module';
import { ServicesModule } from './services/services.module';
import * as dotenv from 'dotenv';
import { DataSource } from "typeorm"
import { User } from './users/entities/user.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Service } from './services/entities/service.entity';

dotenv.config({ path: ".env" });// Permet d'éviter l'erreur "Client Password must be a string"

@Module({
  imports: [UsersModule, AuthModule, ReservationModule, ServicesModule],
  type: "postgres",
    username: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: +process.env.DB_PORT,
    synchronize: true,
    logging: false,
    entities: [User,Service, Reservation],
    migrations: [],
    subscribers: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
