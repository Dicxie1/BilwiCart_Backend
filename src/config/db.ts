import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "./env";

export const dataSourceOptions : DataSourceOptions = {
    type : env.DB_TYPE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    database: env.DB_NAME,
    password : env.DB_PASSWORD,
    synchronize: env.DB_SYNCHRONIZE,
    logging: true,
    entities: [__dirname + '/../models/*{.ts,.js}'],
    migrations: [],
    subscribers: [],
}

export const AppDataSource : DataSource = new DataSource(dataSourceOptions);

export const initializeDatasource = async () =>{
    try{
        AppDataSource.initialize()
        console.log('✅ Conexión a la base de datos')
    }catch(error){
        console.error('❌ Error al conectar a PostgreSQL con TypeORM:', error);
        throw error;
    }
}