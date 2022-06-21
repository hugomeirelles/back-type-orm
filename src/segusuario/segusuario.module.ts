import { Module } from '@nestjs/common';
import { SegusuarioService } from './segusuario.service';
import { SegusuarioController } from './segusuario.controller';
import { tblSegUsuarioProviders } from './segUsuario.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SegusuarioController],
  providers: [...tblSegUsuarioProviders, SegusuarioService],
  exports: [SegusuarioService]
})
export class SegusuarioModule {}
