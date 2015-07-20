/*var http = require('http');
var url = require('url');

var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message) {
	console.log(message);
});*/

/*var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    }
    else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
    res.end();
});
server.listen(8080);*/

/*var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end("Bonjour le monde");
});

server.on('close', function() {
	console.log("tchao");
})

server.listen(8080);

server.close();*/

/*jeu.emit('gameover', 'Vous avez perdu !');*/

/*var monmodule = require('./module');

monmodule.direBonjour();
monmodule.direByeBye();*/

var markdown = require('markdown').markdown;

console.log(markdown.toHTML('Un paragraphe en **markdown** !'));