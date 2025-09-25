/**
 * @fileoverview Configuración y gestión de políticas CORS para el backend
 * @module config/cors
 * @description
 * 
 * Este módulo define las políticas de Cross-Origin Resource Sharing (CORS) 
 * para la aplicación Express. Controla el acceso a la API desde diferentes orígenes,
 * proporcionando seguridad y flexibilidad según el entorno de ejecución.
 * 
 * ### Funcionalidades principales:
 * - Configuración dinámica de orígenes permitidos
 * - Soporte para diferentes entornos (desarrollo, producción)
 * - Manejo de preflight requests y credenciales
 * - Whitelist de dominios autorizados
 * 
 * ### Estructura de políticas:
 * - Desarrollo: Permite localhost y herramientas de desarrollo
 * - Producción: Restringe acceso a dominios específicos
 * - Flexibilidad: Configuración adaptable mediante variables de entorno
 * 
 * @example
 * // Uso básico en la aplicación Express
 * import express from 'express';
 * import { corsOptions } from './config/cors';
 * import cors from 'cors';
 * 
 * const app = express();
 * app.use(cors(corsOptions));
 * 
 * @version 1.0.0
 * @since 2024-01-01
 * @author Dicxie Madrigal Brack
 * 
 * @see {@link https://expressjs.com/en/resources/middleware/cors.html|Documentación CORS}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS|MDN CORS}
 */
import { CorsOptions, CorsOptionsDelegate } from "cors";
import { env } from "./env";

interface CustomCorsOptions extends CorsOptions {
    origin: string | string[] | boolean;
}

// Origenes permitidos para CORS
export const allowedOrigins = (): string[] => {
    const allowedOrigins = [
        'http://localhost:5173', // default vite dev server
        'http://localhost:4173', // default vite test server
        env.FRONTEND_URL, // Variable de entorno para el frontend
    ];
    if(env.NODE_ENV === 'development'){
        allowedOrigins.push(`http://localhost:${env.PORT}`);
    }
    return allowedOrigins;
}

// Configuración base de CORS
export const corsOptions : CorsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if(!origin) return callback(null, true);
        const allowedOpetions = allowedOrigins();
        // verificar si el origen de la solicitud está en la lista de permitidos
        if(allowedOpetions.indexOf(origin) !== -1){
            return callback(null, true);
        } else {
            callback(new Error(`${origin} no esta por el servidor CORS`) );
        }
    },
    methods: ['GET', 'POST', 'PUT', 'PATH', 'DELETE', 'OPTIONS'], // Metodos HTTP permitidos 
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
        'X-Requested-With'
    ],
    exposedHeaders: ['Authorization'],
    credentials: true,
    maxAge: 86400
};

export const corsOptionsDev: CorsOptions = {
    ...corsOptions,
    origin: true,
}

export const corsMiddleware = (isDev: boolean = env.NODE_ENV === 'development') : CorsOptions => {
    return {
        origin: isDev
                ? ['http://localhost:3000', 'http://127.0.0.1:3000']
                : ['https://tudominio.com'],
                methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
                allowedHeaders:  ['Content-Type', 'Authorization', 'X-Requested-With'],
                credentials: true,
                maxAge: 86400 
    }
}
export const corsDelegate: CorsOptionsDelegate = (req, callback) => {
    const isDev = req.headers.host?.includes('localhost') ?? false;
    const options = corsMiddleware(isDev);
    callback(null, options);
}