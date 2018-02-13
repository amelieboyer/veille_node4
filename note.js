app.get('/membres', (req, res) => {

 	fs.readFile( __dirname + "/public/data/" + "membres.json", 'utf8', function (err, data) {

 		if(err) throw err;
 		let collection = JSON.parse('[' + data + ']')

 	});

 	res.end(transforme_en_tableau(collection))


/*********************************************************/


 	const fs = require('fs');

	fs.appendFile('unfichier.txt', 'chaîne de caractère', function (err) {
  if (err) throw err;
  console.log('Sauvegardé');
});



/*********************************************************/


function copyData(reponse, destination) {

 fs.readFile(source, 'utf8',  (err, data) => {

	 if (err) throw err;

 	// Effectuer un traitement modifier data
 	fs.writeFile (destination, data, (err) => {

 		if (err) throw err;
 		console.log('Terminé');
 	});
 });

}


/*************************************************/

app.use(express.static('public'));

const transforme_en_tableau = (collection) =>
{

let chaine = '<table>'
for(elm of collection){

	for (p in elm){


	}

}

chaine += '</table>'
return chaine

}