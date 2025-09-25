import { Response, Request } from 'express';

// Interfaz para una respuesta de API consistente
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: {
    code: string;
    details?: string;
  };
}

// Función para enviar respuestas exitosas
export const sendSuccess = <T>(
  res: Response,
  data: T,
  message = 'Operación exitosa',
  statusCode = 200
) => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  res.status(statusCode).json(response);
};

// Función para enviar respuestas de error
export const sendError = (
  res: Response,
  message = 'Ocurrió un error',
  statusCode = 500,
  errorCode = 'INTERNAL_SERVER_ERROR',
  details?: string
) => {

  const response: ApiResponse<null> = {
    success: false,
    message,
    error: {
      code: errorCode,
      details,
    },
  };
  res.status(statusCode).json(response);
};