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

  async login(TXT_LOGIN: string):Promise<Usuario[]>{
    return await Usuario.findByLogin(TXT_LOGIN)
  }

 async update(usuario: Usuario){
   return Usuario.updateUsuario(usuario)
 }

 async remove(COD_USUARIO:number) {
  return Usuario.deleteUsuario(COD_USUARIO);
 }

  async findByLogin(TXT_LOGIN: string):Promise<Usuario[]>{
    return Usuario.findByLogin(TXT_LOGIN)
  }

  async create(usuario: Usuario):Promise<Usuario> {
    return this.usuariosRepository.create(usuario);
  }


}
