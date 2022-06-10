import { AuthService } from './auth/auth.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import configurations from './config/configurations';
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true,
      load:[configurations]
    }),
    TypeOrmModule.forRoot({
      type:'oracle',
      host: '192.168.33.16',//process.env.HOST,
      port:1521,//parseInt(process.env.PORT, 1521)||1521,
      username: 'iusr_uerr',//process.env.USERNAME,
      password: 'abcd1234',//process.env.PASSWORD,
      database: 'ORCL',
      entities: [Usuario],
      synchronize: false,
      serviceName:'ORCL'
    }),
    AuthModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  getMensagem(){
    console.log("POrta",process.env.PORT)
    return process.env.PORT
  }
}
