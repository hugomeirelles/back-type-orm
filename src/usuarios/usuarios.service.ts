import { Injectable, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  Delete(COD_USUARIO: number) {
    return Usuario.deleteUsuario(COD_USUARIO)
  }
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>
  ){}

  findAll():Promise<Usuario[]>{
    return this.usuariosRepository.find();
  }    

  async login(TXT_LOGIN: string, TXT_SENHA: string):Promise<Usuario[]>{
    return await Usuario.findByName(TXT_LOGIN, TXT_SENHA)
  }

 async update(usuario: Usuario){
   return Usuario.updateUsuario(usuario)
 }

 async remove(COD_USUARIO:number) {
  return Usuario.deleteUsuario(COD_USUARIO);
 }

  findOne(TXT_LOGIN: string):Promise<Usuario>{
    return this.usuariosRepository.findOne(TXT_LOGIN);
  }

  async create(usuario: Usuario):Promise<Usuario> {
    return this.usuariosRepository.create(usuario);
  }


}
