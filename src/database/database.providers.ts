import { DataSource } from 'typeorm';
import { Usuario } from '../usuarios/entities/usuario.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'oracle',
        host: '192.168.33.16',
        port: 1521,
        username: 'iusr_ped_portal',
        password: 'abcd1234',
        database: 'ORCL',
        entities: [Usuario],
        synchronize: true,
        serviceName:'ORCL'
      });

      return dataSource.initialize();
    },
  },
];