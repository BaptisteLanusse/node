var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent'),
    fs = require('fs');

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    // On signale aux autres clients qu'il y a un nouveau venu

    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    socket.on('nouveau_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', socket.pseudo);
    });

    // Dès qu'on reçoit un "message" (clic sur le bouton), on le note dans la console
    socket.on('message', function (message) {
        // On récupère le pseudo de celui qui a cliqué dans les variables de session
        message = ent.encode(message);
        socket.emit('self_message', {message: message});
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    }); 
});


server.listen(8080);