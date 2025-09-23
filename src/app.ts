import express from 'express';
import healthRouter from './routers/health.router';
import userRoutes from './routers/userRoutes';
import { env } from './config/env';
const app = express();

app.use(express.json());

app.use('/api', healthRouter);
app.use('/', userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${env.PORT} ${env.NODE_ENV}`);
});