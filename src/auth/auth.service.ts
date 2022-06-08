import { Usuario } from './../usuarios/entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usuarioService: UsuariosService,
                private jwtService: JwtService
        ){}

    async validarUsuario(TXT_LOGIN: string, TXT_SENHA:string):Promise<any>{
        const usuario = await this.usuarioService.findByLogin(TXT_LOGIN)
        const {...user}=usuario[0]
        console.log(user)
        if(user && user.TXT_SENHA === TXT_SENHA){    
            const {...result } = user
            return result
        }
        return null
    }

    async validateuser(username:string, pass:string):Promise<Usuario[]>{
        const usuario = await this.usuarioService.findByLogin(username);
        const {...user } = usuario[0];
        if (user && user.TXT_SENHA === pass) {
            return usuario;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
