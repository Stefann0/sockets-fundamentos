const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const { callbackify } = require('util');

const app = express();
let server = require('http').createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//IO = comunicacion con del backend
module.exports. io = socketIO(server);
require('./sockets/sockets.js');


server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});