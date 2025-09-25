import express from 'express';
import { corsOptions } from './config/cors';
import cors from 'cors';
import { env } from './config/env';
import { initializeDatasource } from './config/db';
import authRoutes from './routers/authRouter';
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use('/auth', authRoutes);


initializeDatasource()
    .then( () => {
        app.listen(env.PORT, () =>{
            console.log(`Servidor corriendo en http://${env.DB_HOST}:${env.PORT}`)
        });
    }).catch( (error) => {
        console.log('Error al iniciar la aplicación', error);
        process.exit(1);
    });
/*
// Error handling middleware
app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', error);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor',
  });
});
*/