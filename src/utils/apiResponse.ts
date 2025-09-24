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
    // LOGGING TEMPORAL: Verifica qué es 'res' realmente
  console.log('=== DEBUG sendError ===');
  console.log('Tipo de res:', typeof res);
  console.log('res completo:', res);  // Esto mostrará el objeto (o lo que sea)
  console.log('res.status existe?', typeof res?.status);
  console.log('Origen de la llamada:', new Error().stack?.split('\n')[2]);  // Muestra la línea que llama a sendError
  console.log('===================');
  // Validación para evitar crash: si res no es válido, no intentes enviar respuesta HTTP
  if (!res || typeof res.status !== 'function') {
    console.error('ERROR CRÍTICO: res no es un Response válido. No se puede enviar respuesta HTTP.');
    // Opcional: Si estás en un contexto de testing o CLI, retorna el objeto en lugar de crash
    return { error: 'Res inválido', message: 'No se pudo enviar respuesta' };
  }
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
    // LOGGING TEMPORAL: Verifica qué es 'res' realmente
    const e = new Error().stack?.split('\n')[2] || 'Origen desconocido';
  console.log('=== DEBUG sendError ===');
  console.log('Tipo de res:', typeof res);
  console.log('res completo:', res);  // Esto mostrará el objeto (o lo que sea)
  console.log('res.status existe?', typeof res?.status);
  console.log('Origen de la llamada:',e);  // Muestra la línea que llama a sendError
  console.log('===================');
  // Validación para evitar crash: si res no es válido, no intentes enviar respuesta HTTP
  if (!res || typeof res.status !== 'function') {
    console.error('ERROR CRÍTICO: res no es un Response válido. No se puede enviar respuesta HTTP.');
    // Opcional: Si estás en un contexto de testing o CLI, retorna el objeto en lugar de crash
    return { error: 'Res inválido', message: 'No se pudo enviar respuesta' };
  }

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