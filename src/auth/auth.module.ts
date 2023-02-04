import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constantes';

@Module({
  imports:[
    UsersModule,
    PassportModule,
  JwtModule.register({
    secret: jwtConstants.secret,
    //signOptions: { expiresIn: '60s'},
  }),
],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
