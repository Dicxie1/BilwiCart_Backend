import { DataSource } from "typeorm";
import { env } from "./env";

export const AppDataSource : DataSource = new DataSource({
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
});