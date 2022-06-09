import { LocalStrategy } from './local.strategy';
import { UsuariosModule } from './../usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstantes } from './constants';

@Module({
  imports:[UsuariosModule, 
           PassportModule,
          JwtModule.register({
            secret: jwtConstantes.secret
          })],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
