import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string().min(3),
    email: z.email(),
    password: z.string().min(8, {message: 'La contraseña debe tener al menos 8 caracter'})
});

// Esquema para el login
export const loginSchema = z.object({
  email: z.email({ message: 'Email inválido' }),
  password: z.string().min(1, { message: 'La contraseña es requerida' }),
});

// Tipos inferidos para TypeScript
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;