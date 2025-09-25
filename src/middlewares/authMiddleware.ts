// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import {env} from '../config/env';

// Extender la interfaz Request para incluir el usuario
declare global {
  namespace Express {
    interface Request {
      user?: { userId: number }; // Tipo para req.user
    }
  }
}

export const authMiddleware = (res: Response, req: Request, next: NextFunction) => {
  // Obtener el token del header Authorization
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  // El header debe tener el formato "Bearer <token>"
  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ message: 'Formato de token inválido' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, env.JWT_SECRET) as { userId: number };
    req.user = { userId: decoded.userId }; // Añadir el usuario al request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
};
