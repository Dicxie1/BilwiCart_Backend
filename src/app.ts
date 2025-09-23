import express from 'express';
import { env } from './config/env';
import { AppDataSource } from './config/db';
import { error } from 'console';
const app = express();

app.use(express.json());
AppDataSource.initialize().then( () =>{
    console.log("Conexion establecido con la base de datos!")
    app.listen(env.PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${env.PORT} ${env.NODE_ENV}`);
});
}).catch( (error =>{
    console.log("Error: al conectar la base de datos " , error);
}))

