import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configurations from './config/configurations';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    ConfigModule.forRoot({
      //envFilePath:'.env',
      isGlobal: true,
      load:[configurations]
    }),
    DatabaseModule,
    AuthModule,
    UsuariosModule
  ],
  controllers: [AppController],
  providers: [...databaseProviders, AppService],
  exports:[...databaseProviders]
})
export class AppModule {
  getMensagem(){
    console.log("Porta",process.env.PORT)
    return process.env.PORT
  }
}
