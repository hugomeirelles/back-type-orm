import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'oracle',
      host:'192.168.33.16',
      port: 1521,
      username: 'iusr_uerr',
      password: 'abcd1234',
      database: 'ORCL',
      entities: [Usuario],
      synchronize: false,
      serviceName:'ORCL'
    }),
    UsuariosModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
