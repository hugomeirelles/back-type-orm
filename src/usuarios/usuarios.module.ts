import { DatabaseModule } from '../database/database.module';
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { usuarioProviders } from './usuario.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [UsuariosController],
  providers: [...usuarioProviders, UsuariosService],
  exports:[UsuariosService]
})
export class UsuariosModule {}
