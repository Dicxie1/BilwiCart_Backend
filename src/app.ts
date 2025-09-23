import express from 'express';
import { env } from './config/env';
import { initializeDatasource } from './config/db';

const app = express();

app.use(express.json());
initializeDatasource()
    .then( () => {
        app.listen(env.PORT, () =>{
            console.log(`Servidor corriendo en http://${env.DB_HOST}: ${env.PORT}`)
        });
    }).catch( (error) => {
        console.log('Error al iniciar la aplicación', error);
        process.exit(1);
    });
