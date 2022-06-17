import { DataSource } from "typeorm";
import { Usuario } from "./entities/usuario.entity";

export const usuarioProviders = [
    {
        provide: 'USUARIO_REPOSITORY',
        useFactory: (DataSource: DataSource)=>DataSource.getRepository(Usuario),
        inject: ['DATA_SOURCE']
    }
]