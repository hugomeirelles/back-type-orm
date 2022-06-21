import { DataSource } from "typeorm";
import { TblSegUsuario } from "../entities/TblSegUsuario";

export const tblSegUsuarioProviders = [
    {
        provide: 'TBLSEGUSUARIO_REPOSITORY',
        useFactory: (DataSource: DataSource)=>DataSource.getRepository(TblSegUsuario),
        inject: ['DATA_SOURCE']
    }
]