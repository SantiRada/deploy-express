const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 3005;

app.get('/', (req, res) => {
    res.status(200).send({ message: "Hola mundo" })
})

const server = app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${server.address().port}`);
});