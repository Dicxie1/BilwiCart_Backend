# Backend - BilwiCart 

## Tecnologia utilizadas
- **Nodejs v24.0.1**: Entorno de ejecución para JavaScript a lado del servidor
- **Express.js**: Framework para construir APIs RESTful
- **TypeORM**: ORM para gestionar la base de datos.
- **TypeScript**: Lenguaje de programación para un código más robusto
- **PostgreSQL**: Base de datos relacional
- **dotenv**: Para manejar variables de entorno.
- **Zod**: Biblioteca para validación de esquemas de datos.
- **bcrypt**: Para encriptación de contraseñas.
- **CORS**: Middleware para habilitar Cross-Origin Resource Sharing.
- **JWT**: JSON Web Tokens para autenticación y autorización.  

## Requisitos previos
- [x] Node.js (version 24 o posterior)
- [x] npm
- [x] PosgreSQL (a la base de datos de tu elección) instalada y configurada
- [x] Un cliente API como Postman o Insomnia para probar los endpoint

## Instalación

Sigue estos pasos para configurar el proyecto localmente:
1. **Clona el repositorio**: Asegúrate de tener Git instalado en tu sistema. Clona el repositorio ejecutando el siguiente comando en tu terminal:

```bash
git clone https://www.github.com/dicxie1/BilwiCart_Backend 
```
Navega al directorio del proyecto:

MacOs/linux
```bash
cd BilwiCart_Backend
```
Windows

```cmd
dir BilwiCart_Backend
```
2. Instala las dependencias: El proyecto utiliza `npm`  como gestores de paquetes. Asegúrate de tener uno de ellos instalado. Luego, ejecuta:

```zsh
npm install
```

Esto instalará todas las dependencias listadas en el archivo package.json, incluyendo Express, TypeORM, Zod, bcrypt, CORS, y JWT.

3. Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=nombre_base_datos
JWT_SECRET=tu_secreto_jwt
```
4. Sincroniza la base de datos: Asegúrate de que tu base de datos esté creada. TypeORM sincronizará las entidades automáticamente si synchronize: true está configurado en la conexión a la base de datos.

```bash
npm run dev
```

La API estará disponible en http://localhost:3000.

## Uso
La API expone endpoints para interactuar con las entidades, con soporte para autenticación y validación de datos. A continuación, un ejemplo de los endpoints disponibles:

- **POST /api/auth/register**: Registra un nuevo usuario (contraseña encriptada con bcrypt).
- **POST /api/auth/login**: Autentica un usuario y devuelve un token JWT.

## Scripts disponibles
- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon.
- `npm run build`: Compila el código TypeScript a JavaScript.
- `npm start`: Inicia el servidor en modo producción.

## Estructura de proyecto
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