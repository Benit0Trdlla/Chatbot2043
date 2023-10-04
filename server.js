// console.clear();

const express = require('express');
const path = require('path');


const app = express();
const port = 3000;

//Para cargar/usar los archivos estaticos (JS y CSS)
app.use(express.static(path.join(__dirname, '')));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})


app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});