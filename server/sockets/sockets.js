const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('cliente desconectado');
    });
} 

const escucharMensaje = (cliente, socketIO) => {
    cliente.on('mensaje', (payload) => {
        console.log(payload);
        socketIO.emit('nuevo-mensaje', payload);
    });
}

module.exports = {
    desconectar,
    escucharMensaje
}