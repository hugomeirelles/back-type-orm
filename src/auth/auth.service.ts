import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';


@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuariosService){}

    async validarUsuario(TXT_LOGIN: string, TXT_SENHA:string):Promise<any>{
        const usuario = await this.usuarioService.findOne(TXT_LOGIN)
        if(usuario && usuario.TXT_SENHA === TXT_SENHA){    
            const { TXT_SENHA, ...result } = usuario
            return result
        }
    }
}
