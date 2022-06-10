import { LocalStrategy } from './strategies/local.strategy';
import { UsuariosModule } from './../usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports:[UsuariosModule, 
           PassportModule,
            JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' }
          })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
 