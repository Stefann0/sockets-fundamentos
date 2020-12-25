var socket = io();

//escuchar
socket.on('connect', function(){
    console.log('conectado al servidor');
});


socket.on('disconnect',function () {
    console.log('Perdimos conexion al servidor');   
})

//emit son para enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Stefan',
    mensaje: 'Hola Mundo'
}, (resp) => {
    console.log('respuesta server', resp);
});

//escuchar informacion
socket.on('enviarMensaje', (resp) =>{
    console.log('Info del servidor',resp);
});