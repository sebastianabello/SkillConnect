# SkillConnect

SkillConnect es una plataforma de red social que te permite mostrar tus habilidades y servicios, conectando a usuarios que buscan ayuda con aquellos que pueden proporcionarla.

## Tecnologías Utilizadas

- Frontend: HTML, JavaScript, CSS
- Backend: Java, Spring Boot
- Base de Datos: MySQL
- Autenticación: JWT

## Estructura del Proyecto

- **backend:** [Contiene el código fuente del backend](https://github.com/sebastianabello/ApiSkillConnect.git).
  - **src/main/java/com/bugbuster/skillconnect:** Paquete principal del backend.
  - **src/main/resources:** Configuraciones y recursos.
- **frontend:** si clonas este repositorio estaras encontrar el index el el apartado princial, esta manejado con local Storage, siquieres ver con base de datos tienes que ir a login.js y descomentar las lineas y asi mismo prender la aplicacion con springboot.
  - **index.html:** Página principal.
  - **assets/img:** Carpeta para imágenes.

## Configuración Local

1. Clona el repositorio: `https://github.com/sebastianabello/SkillConnect.git`
2. Configura la base de datos MySQL.
3. Ejecuta el backend usando Spring Boot.
4. Abre el archivo `frontend/index.html` en tu navegador.

## Preguntas

Las imágenes relacionadas con el proyecto se encuentran en la carpeta `client/assets/img`.
si quieres ver la estructura de la base de datos, esta en el archivo md.
Para la ejecucion de la aplicacion, tienes que tener prendido el puerto 8080, y configurar la ruta de la base de datos en aplication.properties

## Contribuir

Si deseas contribuir al proyecto, crea un fork y envía un pull request. Agradecemos tus contribuciones.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
