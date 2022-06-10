import { Usuario } from "src/usuarios/entities/usuario.entity";
export default () => ({
        database:{
            type:'oracle',
            host: process.env.HOST,
            port:parseInt(process.env.PORT, 1521)||1521,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: 'ORCL',
            entities: [Usuario],
            synchronize: false,
            serviceName:'ORCL'
        }
  });