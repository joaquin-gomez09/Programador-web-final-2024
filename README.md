# Proyecto Web - Programador Web Final 2024

Este es un proyecto web desarrollado con Node.js, Express, y MongoDB como base de datos. Su objetivo es crear una página web funcional que permita mostrar servicios, portafolio y contacto, con un formulario de contacto que se conecta a una base de datos para almacenar los mensajes enviados y tambien enviar un mail a la cuenta del usuario informando que su mensaje fue recibido.

## Descripción

Este proyecto tiene como finalidad la creación de un sitio web profesional con las siguientes funcionalidades:

- **Inicio**: Página de bienvenida con información introductoria.
- **Servicios**: Detalles sobre los servicios ofrecidos.
- **Portafolio**: Muestra de trabajos anteriores.
- **Sobre Nosotros**: Información sobre el equipo detrás del proyecto.
- **Contacto**: Un formulario para que los usuarios puedan ponerse en contacto, enviar consultas o comentarios.

### Tecnologías utilizadas

- **Frontend**:
  - HTML
  - CSS
  - JavaScript (para validaciones y funcionalidades)
  - FontAwesome (para iconos)
  
- **Backend**:
  - Node.js (Ejecuta el servidor)
  - Body-parserbody-parser (Para analizar el cuerpo de las solicitudes HTTP)
  - Cors (Maneja las solicitudes entre diferentes dominios)
  - Dotenv: (Carga variables de entorno)
  - Express (Framework para crear aplicaciones web y APIs)
  - Mongoose (Facilita la interacción con MongoDB.)
  - Nodemon (Reinicia automáticamente la aplicación durante el desarrollo.)
  - Base de datos (MongoDB community server)

## Requisitos previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- **Node.js**: Para ejecutar el servidor backend.
- **npm** (Node Package Manager): Para gestionar las dependencias del proyecto.
- **Base de datos**: MongoDB.

## Instalación y Activación del Servidor

Sigue estos pasos para instalar el proyecto y poner en funcionamiento el servidor en tu máquina local.

### 1. Clonar el Repositorio

Primero, clona este repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/joaquin-gomez09/Programador-web-final-2024.git
```
### 2.Navegar al proyecto

```bash
cd Programador-web-final-2024
```

### 3. Instalar las Dependencias
```
npm install
```

### 4. Configuración de la Base de Datos
Asegúrate de tener configurada tu base de datos correctamente. Si estás usando MongoDB, necesitarás tener una instancia de MongoDB en funcionamiento. Si usas MySQL, asegúrate de que la base de datos esté configurada en tu archivo server.js o en otro archivo de configuración.

### 5. Iniciar el Servidor
Para iniciar el servidor, ejecuta el siguiente comando:
```
npm run dev
```

Este comando ejecutará el servidor de Node.js. Si todo está configurado correctamente, deberías ver un mensaje en la terminal que indica que el servidor está funcionando y escuchando en un puerto, por ejemplo:
````
Servidor corriendo en http://localhost:3000

````

### 6. Acceder a la Página Web
Abre tu navegador y ve a la dirección que aparece en la terminal, usualmente http://localhost:3000. Allí podrás ver la página web en funcionamiento.

Para probar el formulario se encuentra en <a> contacto.html </a> 

### Autores

• Patricia Sosa: Diseño con HTML y CSS

• Juan Koubas: Autenticacion y seguridad,  despliegue y omptimizacion

• Carlos Aguilar: Intercatividad con java, promoción y análisis.

• Joaquin Gomez: Servidor y base de datos.
