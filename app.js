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

    socket.on('msgSever', function(data){

        socket.emit('notification_on', {apelido: data.apelido, msg: data.msg });

        socket.broadcast.emit('notification_on', {apelido: data.apelido, msg: data.msg });
        if(parseInt(data.ape) == 0){

            socket.emit('user_on', {apelido: data.apelido });
            socket.broadcast.emit('user_on', {apelido: data.apelido });

        }

    });
    
});