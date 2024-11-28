const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();  // Asegúrate de tener tu archivo .env configurado

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));

// Modelo de mensaje
const Message = mongoose.model('Message', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
}));

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,  // Tu correo de Gmail (asegurate de tenerlo en .env)
    pass: process.env.GMAIL_PASS,  // Tu contraseña de Gmail o app password
  },
});

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});

// Ruta para el formulario de contacto
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Guardamos el mensaje en la base de datos
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Configuración del correo
    const mailOptions = {
      from: process.env.GMAIL_USER,  // El correo que va a enviar el mensaje
      to: email,  // El correo del usuario que envió el mensaje
      subject: 'Recibimos tu mensaje',  // Asunto del correo
      text: `Hola ${name},\n\nRecibimos tu mensaje con el siguiente contenido:\n\n"${message}"\n\nTe responderemos a la brevedad. ¡Gracias por ponerte en contacto con nosotros!\n\nSaludos,\nEl equipo`,  // Cuerpo del correo
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({ message: 'Error al enviar el correo de confirmación', error });
      }
      console.log('Correo enviado: ' + info.response);
    });

    // Responder al cliente con un mensaje de éxito
    res.status(201).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el mensaje', error });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
