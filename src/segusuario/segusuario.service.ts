import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TblSegUsuario } from '../entities/TblSegUsuario';

@Injectable()
export class SegusuarioService {
  constructor(
    @Inject('TBLSEGUSUARIO_REPOSITORY')
    private tblSegUsuarioRepository: Repository<TblSegUsuario>
  ){}

  async create(usuario: TblSegUsuario):Promise<TblSegUsuario> {
    return this.tblSegUsuarioRepository.create(usuario);
  }

  async findAll(): Promise<TblSegUsuario[]>{
    console.log('findAll:');
    return this.tblSegUsuarioRepository.find();
  }

  findOne(codusuario: number) {
    this.tblSegUsuarioRepository.findOne({
      where:{
        codUsuario: codusuario
      }
    })
  }

   update(codUsuario: number, usuario: TblSegUsuario) {
     return this.tblSegUsuarioRepository.update(codUsuario, usuario)
   }

  remove(id: number) {
    return `This action removes a #${id} segusuario`;
  }
}
