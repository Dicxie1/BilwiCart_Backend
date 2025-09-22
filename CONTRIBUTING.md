# Guía de Contribución

¡Gracias por contribuir a este proyecto! Para mantener un código limpio, colaborativo y de alta calidad, seguimos estas convenciones y estrategias. **Lee esta guía antes de realizar cambios.**

---

## 📌 Convenciones de Commits

Usamos **[Conventional Commits](https://www.conventionalcommits.org/)** para estandarizar los mensajes. Esto facilita la generación de changelogs y la revisión de código.

### Formato básico:

```
<tipo>[ámbitopcional]: <descripción>
[cuerpo opcional]
[notas opcionales]
```

### Tipos de commits permitidos:
| Tipo       | Descripción                                                                 | Ejemplo                                  |
|------------|-----------------------------------------------------------------------------|------------------------------------------|
| `feat`     | Nueva funcionalidad.                                                       | `feat(auth): agregar login con OAuth`    |
| `fix`      | Corrección de un bug.                                                      | `fix(api): validar entrada en /users`    |
| `docs`     | Cambios en documentación.                                                  | `docs: actualizar README con instrucciones` |
| `refactor` | Cambio que no corrige un bug ni añade funcionalidad.                      | `refactor(db): optimizar consulta SQL`   |
| `test`     | Añadir o modificar tests.                                                   | `test(api): cubrir caso de error 404`     |
| `chore`    | Tareas de mantenimiento (configuración, dependencias, etc.).             | `chore: actualizar dependencias`         |
| `style`    | Cambios de formato (sin afectar lógica).                                   | `style: aplicar Prettier a componente`   |

### Reglas:
- **Línea de asunto:** Máximo **72 caracteres**. Usa imperativo ("Agregar", no "Agregué").
- **Cuerpo opcional:** Explica **qué** y **por qué** (no *cómo*). Ejemplo:

```
fix(login): corregir redirección tras error
El usuario era redirigido a /home en lugar de /login tras un error 401.
Esto afectaba la experiencia en móviles.
Relacionado: #123
```
- **Notas:** Usa `BREAKING CHANGE:` si el cambio rompe compatibilidad.

---
## 🌿 Estrategia de Ramas (Branching)

Usamos un modelo basado en **GitHub Flow** (para despliegues continuos) o **Git Flow** (para proyectos con versiones). **Nunca trabajes directamente en `main` o `develop`.**

### Ramas principales:
- `main`: Código en producción. **Solo merges desde `develop` o `release`.**
- `develop`: Integración de features (en Git Flow). **Siempre estable.**

### Ramas temporales:
| Prefijo      | Uso                          | Ejemplo               |
|--------------|------------------------------|-----------------------|
| `feature/`   | Nuevas funcionalidades.       | `feature/pagos-paypal`|
| `bugfix/`    | Correcciones críticas.        | `bugfix/login-404`    |
| `release/`   | Preparación de versiones.    | `release/v1.2.0`     |
| `hotfix/`    | Arreglos urgentes en producción. | `hotfix/seguridad-cve`|

### Flujo de trabajo:
1. **Crea una rama** desde `develop` (o `main` si usas GitHub Flow):
 ```bash
 git checkout -b feature/nueva-funcionalidad
```

2. Commitea frecuentemente con mensajes claros.
3. Abre un Pull Request (PR) a develop (o main) cuando termines.
4. Revisión obligatoria: Al menos 1-2 aprobaciones antes de mergear.

## 📄 Formato de Pull Requests (PR)

Todos los Pull Requests deben seguir esta estructura para facilitar la revisión y asegurar la calidad del código. **Un PR mal formado será rechazado hasta que se ajuste al formato.**

Un PR deberá de tener la siguiente Elementos:
- Titulo
- Descripción
- Motivo
- Cambios realizados
- Pruebas
- Tipos de cambios
- Lista de verificación 
---
### Titulo
El título de un PR debe ser conciso y descriptivo. Su propósito es resumir la esencia del cambio en una sola línea, lo que permite a los revisores entender de inmediato de qué trata el PR.

#### Buenas prácticas:

- Utiliza prefijos para categorizar el cambio, como feat (nueva característica), fix (corrección de error), docs (documentación), o refactor (refactorización).
- Mantén el título corto, idealmente menos de 50 caracteres.
- Usa un lenguaje claro, sin jerga interna innecesaria.

Ejemplo: `feat: Agregar validación de correo electrónico en formulario de registro`
### Descripción
La descripción es el espacio para dar contexto detallado del PR. Aquí es donde explicas el qué y el cómo de los cambios. Aunque el título da un vistazo rápido, la descripción proporciona los detalles que el equipo necesita para una revisión profunda. 
#### Qué incluir:

- Un resumen de alto nivel de la característica o corrección.
- Detalles sobre los archivos o componentes afectados.
- Si el PR cierra un issue, es fundamental referenciarlo aquí (ej. Closes #123).

### Motivo

El motivo del PR es tan importante como los cambios mismos. Responde a la pregunta ¿Por qué se hicieron estos cambios? Aquí es donde justificas la necesidad del PR, explicando el valor que aporta al proyecto.

#### Qué incluir:

- El problema que el PR resuelve (ej. un bug reportado por un usuario).
- La oportunidad que aprovecha (ej. mejorar el rendimiento, añadir una nueva funcionalidad).
- Por qué el enfoque elegido es la mejor solución para el problema.

### Cambios Realizados

Esta sección es para un listado técnico y granular de los cambios que se han implementado. Es un desglose del código y la lógica que se modificó.

#### Qué incluir:
- Puntos clave sobre las líneas de código modificadas.
- Nombres de los archivos o módulos que se han editado.
- Si se usaron librerías o dependencias nuevas, es vital mencionarlo aquí.
- Cualquier consideración especial sobre la arquitectura o el flujo de datos.

### Pruebas

Esta es la prueba de que el cambio funciona como se espera. La sección de Pruebas asegura a los revisores que los cambios no introducen nuevos errores y que la funcionalidad añadida es estable.

#### Qué incluir:

- Descripción de las pruebas unitarias o de integración que se crearon o se pasaron.
- Pasos para que los revisores puedan replicar las pruebas de manera manual (ej. "Para probar, ve a la página de registro y haz clic en 'Enviar' sin llenar el campo de correo electrónico").
- Resultados esperados y resultados obtenidos.
- Capturas de pantalla o GIFs que demuestren el funcionamiento.

### Tipos de Cambios

Esta sección es un sistema de clasificación que ayuda a los desarrolladores a entender rápidamente la naturaleza del PR. Es ideal presentarlo como una lista de verificación (- [ ]), donde solo se selecciona una opción.

#### Tipos comunes:

- Bug fix: Una corrección para un error existente.
- Feature: La adición de una nueva funcionalidad.
-  Documentación: Cambios exclusivos en los archivos de documentación (README, CONTRIBUTING, etc.).
- Refactor: Reestructuración del código sin cambiar su funcionalidad.
- Estilo: Cambios de formato o estilo que no alteran la lógica del código (ej. corrección de linter).
- Mantenimiento: Actualización de dependencias, cambios en el flujo de CI/CD, etc

### Lista de Verificación

Esta es una lista de control final que asegura que todos los requisitos básicos de calidad y proceso han sido cumplidos antes de solicitar la revisión.

#### Ejemplo de puntos a incluir:

- `He leído las pautas de contribución.`: Asegura que el desarrollador está familiarizado con las reglas del proyecto.
- `Mis cambios siguen las pautas de estilo de este proyecto.`: Confirma que el código está formateado correctamente.
- `He documentado los cambios relevantes.`: Revisa que la documentación interna (comentarios, docstrings) se ha actualizado.
- `Los cambios se han probado adecuadamente.`: Un último recordatorio para no olvidar la fase de pruebas.

### 📝 Plantilla Obligatoria
Usa el siguiente formato en la **descripción del PR** (puedes copiar este bloque y completarlo):

```markdown
### Descripción
Este Pull Request introduce un enlace en el archivo `README.md` que apunta al archivo `CONTRIBUTING.md`.

### Motivo
El objetivo es mejorar la visibilidad de las pautas de contribución del proyecto, haciendo que sean más fáciles de encontrar para cualquier persona interesada en colaborar. Al asociar ambos archivos, se guía a los nuevos colaboradores de manera más eficiente, lo cual es una práctica recomendada para proyectos de código abierto.

### Cambios realizados
- Se añadió la siguiente línea al `README.md`:
  `[Ver nuestras guías de contribución](CONTRIBUTING.md)`
- Se ha verificado que el enlace relativo funciona correctamente en el entorno local.

### Pruebas
- Se ha hecho `git status` para asegurar que solo el `README.md` ha sido modificado.
- Se ha abierto el `README.md` localmente para confirmar que el enlace se visualiza correctamente y dirige al archivo esperado.

### Tipo de cambio
- [ ] Bug fix (corrección de un error)
- [ ] Feature (nueva característica)
- [x] Documentación (cambios en la documentación)
- [ ] Estilo (formato, linting)
- [ ] Refactorización
- [ ] Mantenimiento

### Lista de verificación
- [x] He leído las pautas de contribución.
- [x] Mis cambios siguen las pautas de estilo de este proyecto.
- [x] He documentado los cambios relevantes.
- [x] Los cambios se han probado adecuadamente.
````

