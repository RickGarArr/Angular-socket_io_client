// importaciones
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// inicializaciones
const app = express();
const port = process.env.PORT;
// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// cors
app.use(cors({origin: true, credentials: true}));
// rutas
app.use(require('./routes/router'));

app.listen( port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Servidor escuchando en el puerto ${port}`);
    }
});