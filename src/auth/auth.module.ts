import { UsuariosModule } from './../usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports:[UsuariosModule],
  providers: [AuthService]
})
export class AuthModule {}
