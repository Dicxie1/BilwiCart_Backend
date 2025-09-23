import express from 'express';
import dotenv from 'dotenv';
import healthRouter from './routers/health.router';
import userRoutes from './routers/userRoutes'

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', healthRouter);
app.use('/', userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT} ${process.env.NODE_ENV}`);
});