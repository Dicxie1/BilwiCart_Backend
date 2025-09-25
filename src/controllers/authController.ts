import { Request, Response} from "express";
import { AuthService } from "../services/authService";
import { sendSuccess, sendError } from "../utils/apiResponse";

export const register = async(req: Request, res: Response) =>{
    try{
        const user = await AuthService.register(req.body);
        sendSuccess(res, user, "Se ha registrodo");
    }catch(err){
        if(err instanceof Error){
                return sendError(res, err.message, 400);
        }
        sendError(res, "Error al registrar el usuario", 500);
      }
    }

export const login = async (req: Request, res: Response) => {
    try{
        const {email, passwd} = req.body;
        const {user, token} = await AuthService.login(email, passwd);
        sendSuccess(res, {user, token}, 'Inicion de session exitosa');
    }catch(err){
        if(err instanceof Error) return sendError(res, err.message, 401);
        sendError(res, 'Error al iniciar sesión', 500);
    }
}