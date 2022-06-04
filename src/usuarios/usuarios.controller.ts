import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() usuario: Usuario) {
    return this.usuariosService.create(usuario);
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':TXT_LOGIN')
  findOne(@Param('TXT_LOGIN') TXT_LOGIN: string) {
    return this.usuariosService.findOne(TXT_LOGIN);
  }

  @Get('/login/:TXT_LOGIN/:TXT_SENHA')
  login(@Param('TXT_LOGIN') TXT_LOGIN: string,
        @Param('TXT_SENHA') TXT_SENHA: string
       ){
    const parametros = {
      param1: TXT_LOGIN,
      param2: TXT_SENHA
    }
    console.log(parametros);
    return this.usuariosService.login(TXT_LOGIN, TXT_SENHA);
  }

  @Patch(':COD_USUARIO')
  update(@Param('COD_USUARIO') COD_USUARIO: string, @Body() usuario: Usuario) {
    console.log(usuario)
    return this.usuariosService.update(usuario)
  }

  @Delete(':COD_USUARIO')
  remove(@Param('COD_USUARIO') COD_USUARIO: number) {
    return this.usuariosService.Delete(COD_USUARIO)
  } 
}
