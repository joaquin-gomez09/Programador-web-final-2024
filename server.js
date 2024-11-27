const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();  // Para cargar las variables de entorno

const app = express();
const port = process.env.PORT || 3000;

<<<<<<< HEAD
// Configuración de middleware para el manejo de archivos estáticos
app.use(express.static(__dirname));

// Ruta para servir el archivo index.html
=======
app.use(express.static(__dirname));

>>>>>>> ddf2265741c494d2000b13c2bd18f196ed789143
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Envía el archivo HTML cuando se accede a la raíz
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
