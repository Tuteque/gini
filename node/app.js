const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

app.get('/', (req, res) => {
    res.send('lamamadelamamadelamamadelamama');
});

app.listen(3000, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});