const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos desde la misma carpeta que el servidor
app.use(express.static(__dirname));

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
