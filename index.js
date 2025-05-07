const express = require('express');
const app = express();

const PORT = process.env.PORT ?? 3005;

const heroes = require('./heroes.json');

app.get('/', (req, res) => {
    res.status(200).send({ message: "Hola mundo" })
})

app.get('/heroes', (req, res) => {
    res.status(200).json(heroes);
});

app.get('/heroes/:id', (req, res) => {
    const { id } = req.params;

    const hero = heroes.find(h => h.id == id);

    if (hero != null) { res.status(200).json(hero); }
    else { res.status(404).send({ message: "No se encuentro el heroe" }); }
});

const server = app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto http://localhost:${server.address().port}`);
});