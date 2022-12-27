import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import {UserService}from '../user/user.service';
import{JwtModule, JwtService}from'@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports:[JwtModule.register({
      signOptions:{ 
        expiresIn: '1d'
       },
       secret: jwtConstants.secret

    }),
    UserModule,PassportModule,CommonModule],
  controllers: [AuthController],
  providers: [AuthService,UserService,LocalStrategy],
  exports:[AuthService]
})
export class AuthModule {}
