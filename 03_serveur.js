const express = require('express');
const fs = require("fs");
const app = express();
app.use(express.static('public'));



app.get('/formulaire', function (req, res) {

 	console.log(__dirname);
 	res.sendFile( __dirname + "/public/html/" + "formulaire.html" );


});


 app.get('/membres', (req, res) => {

 	fs.readFile( __dirname + "/public/data/" + "membres.json", 'utf8', function (err, data) {

 		
 		console.log( data );
 		res.end( data );
 	});
});

app.get('/', (req, res) => {

 console.log('accueil')
 res.end('<h1>Accueil</h1>')

})

app.get('/traiter_get', function (req, res) {

 // Preparer l'output en format JSON

console.log('la route /traiter_get')

// on utilise l'objet req.query pour récupérer les données GET
 reponse = {
 prenom:req.query.prenom,
 nom:req.query.nom,
 telephone:req.query.telephone,
 courriel:req.query.courriel
 };

console.log(reponse);
fs.readFile(__dirname + "/public/data/" + "membres.json", 'utf8', function (err, data){

	let variable = JSON.parse(data)
	variable.push(reponse)
	let autrevar = JSON.stringify(variable)
	fs.writeFile(__dirname + "/public/data/" + "membres.json", autrevar, function(err, data){

		console.log("allo");

	})
 res.end(JSON.stringify(reponse));
})


})



let server = app.listen(8081, function () {

	let host = server.address().address
	let port = server.address().port
 
 	console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})