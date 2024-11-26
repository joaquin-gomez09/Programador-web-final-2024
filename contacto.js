const mongoose = require('mongoose');

// Definimos el esquema para los datos del formulario
const contactoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  mensaje: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

// Creamos el modelo con el esquema
const Contacto = mongoose.model('Contacto', contactoSchema);

module.exports = Contacto;
