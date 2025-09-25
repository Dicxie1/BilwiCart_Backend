// src/middlewares/validate.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.issues.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        })),
      });
    }
    req.body = result.data; // Sobrescribe req.body con los datos validados
    next();
  };
};
