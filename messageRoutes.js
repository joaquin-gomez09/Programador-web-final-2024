const express = require('express');
const router = express.Router();
const Message = require('./Message');

router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener mensajes', error });
  }
});

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el mensaje', error });
  }
});

module.exports = router;
