var app = require('./config/server');

var server = app.listen(3000, function(){
    console.log('servidor ON');
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){

    console.log('usuario conectou');
    
    socket.on('disconnect', function(){
        console.log('usuario desconectado');
    });
    
});