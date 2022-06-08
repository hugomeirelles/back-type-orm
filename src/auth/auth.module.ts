import { LocalStrategy } from './local.strategy';
import { UsuariosModule } from './../usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[UsuariosModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
