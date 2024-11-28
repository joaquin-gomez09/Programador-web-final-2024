const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();  

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));

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
    user: process.env.GMAIL_USER, 
    pass: process.env.GMAIL_PASS,
  },
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); 
});


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    
    const mailOptions = {
      from: process.env.GMAIL_USER,  
      to: email,  
      subject: 'Recibimos tu mensaje',  
      text: `Hola ${name},\n\nRecibimos tu mensaje con el siguiente contenido:\n\n"${message}"\n\nTe responderemos a la brevedad. ¡Gracias por ponerte en contacto con nosotros!\n\nSaludos,\nEl equipo`,  // Cuerpo del correo
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({ message: 'Error al enviar el correo de confirmación', error });
      }
      console.log('Correo enviado: ' + info.response);
    });

    
    res.status(201).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el mensaje', error });
  }
});


app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
