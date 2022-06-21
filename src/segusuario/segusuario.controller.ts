import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SegusuarioService } from './segusuario.service';
import { TblSegUsuario } from '../entities/TblSegUsuario';

@Controller('segusuario')
export class SegusuarioController {
  constructor(private readonly segusuarioService: SegusuarioService) {}

  @Post()
  create(@Body() createTblSegUsuario: TblSegUsuario) {
    return this.segusuarioService.create(createTblSegUsuario);
  }

  //@UseGuards(AuthGuard('local'))
  @Post()
  findAll() {
    console.log('passou aqui')
    return this.segusuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segusuarioService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSegusuarioDto: UpdateSegusuarioDto) {
  //   return this.segusuarioService.update(+id, updateSegusuarioDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.segusuarioService.remove(+id);
  }
}
