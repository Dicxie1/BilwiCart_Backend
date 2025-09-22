# Backend - BilwiCart 

# Estructura de proyecto
```
bilwicart_backend/
├── src/
│   ├── config/           # Configuraciones con tipado
│   │   ├── cors.ts       # Configuración de CORS
│   │   ├── db.ts         # Conexión a BD con tipado
│   │   └── env.ts        # Variables de entorno (usando `dotenv` + `zod` para validación)
│   │
│   ├── controllers/      # Controladores con tipado estricto
│   │   ├── auth.controller.ts
│   │   └── user.controller.ts
│   │
│   ├── services/         # Servicios con interfaces claras
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   │
│   ├── models/           # Modelos con interfaces/types
│   │   ├── user.model.ts
│   │   └── index.ts
│   │
│   ├── routes/           # Rutass con tipado de requests/responses
│   │   ├── v1/
│   │   │   ├── auth.routes.ts
│   │   │   ├── user.routes.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── middlewares/      # Middlewares con tipado
│   │   ├── auth.middleware.ts
│   │   └── validate.middleware.ts
│   │
│   ├── types/            # Tipos globales (ej: para Express, JWT)
│   │   ├── express.d.ts   # Extiende tipos de Express (ej: `Request`)
│   │   └── index.ts
│   │
│   ├── utils/            # Utilidades con genéricos
│   │   ├── apiResponse.ts
│   │   ├── errors.ts
│   │   └── logger.ts
│   │
│   ├── validations/      # Esquemas de validación con Zod
│   │   ├── user.validation.ts
│   │   └── auth.validation.ts
│   │
│   ├── app.ts            # Configuración de Express/Fastify
│   └── server.ts         # Inicio del servidor
│
├── tests/                # Pruebas con Jest + TypeScript
│   ├── unit/
│   └── integration/
│
├── .env                  # Variables de entorno
├── tsconfig.json         # Configuración de TypeScript
├── package.json
└── README.md
```
## 📝 Contribuir
Antes de enviar código, revisa nuestras [convenciones de commits](CONTRIBUTING.md#convenciones-de-commits).