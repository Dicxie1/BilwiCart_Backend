/**
 * @fileoverview Validacion de las variables de entornos utilizando `dotenv`y `zod`
 * @use 
 * // cargar las  variables de entorno en la aplicación
 * import {env} './config/env';
 * console.log(env.PORT);
*/
import z from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
    // ====== Server ==========
    PORT : z.coerce.number({error: "No valido"}).int().default(300),
    NODE_ENV : z.enum(['development', 'test', 'production'], {error: "valor no valido"}).default('development'), 
    // ======= Origen ==========
    FRONTEND_URL: z.url({message: 'FRONTEND_URL debe ser una URL valida'}),
     // ===== Base de Datos =====
     DB_TYPE: z.enum(["postgres", "mysql", "mariadb"]),
     DB_HOST: z.string().min(1, 'DB_HOST es obligatorio'),
     DB_PORT: z.coerce.number().int().min(1024).max(65535),
     DB_USER: z.string().min(1),
     DB_PASSWORD: z.string(),
     DB_NAME: z.string().min(1),
     DB_SYNCHRONIZE: z.coerce.boolean(),
     // ===== Autenticación =====
     JWT_SECRET: z.string().min(12, 'JWT_SECRET debe tener al menos 32 caracteres'),
     JWT_EXPIRES_IN: z.string().min(1, 'JWT_EXPIRES_IN es obligatorio'),
    PASSWORD_SALT_ROUNDS : z.coerce.number().int().min(10).default(12),
});
export type Env = z.infer<typeof envSchema>;
export  const env: Env = envSchema.parse(process.env);

