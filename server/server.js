require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const { desconectar, escucharMensaje } = require('./sockets/sockets');
const bodyParser = require('body-parser');
const cors = require('cors');

// body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// cors
app.use(cors({origin: true, credentials: true}));
// rutas
app.use(require('./routes/router'));
// sockets
io.on('connection', (socket) => {
    console.log('a user connected');
    desconectar(socket);
    escucharMensaje(socket, io);
});

// levantar servidor
server.listen(port, () => {
  console.log('Server listening at port %d', port);
});