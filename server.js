const express = require('express');
const { use } = require('../server_api/routes/testimonials.routes');
const app = express();

app.listen(8000, () => {
  console.log('Server is running on Port:', 8000)
});

app.use((req, res) => {
  res.status(404).send({ message: 'Error 404. Not found .....' })
});