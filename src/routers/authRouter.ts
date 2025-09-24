// src/routes/auth.routes.ts
import { Router } from 'express';
import {register, login} from '../controllers/authController' ;
import { validate } from '../middlewares/validateMiddleware';
import { registerSchema, loginSchema } from '../validations/authValidation';

const router = Router();

// Ruta para registrar un nuevo usuario
router.post('/register', validate(registerSchema),  register);
router.get('/register', (req, res) => { 
    res.send('GET request to the register page');
});

// Ruta para iniciar sesión
router.post('/login', validate(loginSchema), login);

export default router;
