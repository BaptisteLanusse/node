var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes à l\'accueil');
})
.get('/sous-sol', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
})
.get('/etage/:etagenum/chambre', function(req, res) {
	if (isNaN(req.params.etagenum)){
		res.status(404).send('L\'Etage spécifié ne peut pas être trouvé');
	} else if (req.params.etagenum >= 0 && req.params.etagenum < 4){
    	res.render('chambre.ejs', {etage: req.params.etagenum});
	} else {
		res.status(404).send('Mauvais numéro d\'étage');
	}
})
.get('/compter/:nombre', function(req, res) {
	var noms = ['Robert', 'Jacques', 'David'];
	res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
})
.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Page introuvable !');
});

app.listen(8080);