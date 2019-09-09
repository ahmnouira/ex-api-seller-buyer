const express = require('express');
const db = require('./models/db')
const bodyParser = require('body-parser');

const vendeurRoute = require('./routes/vendeur');
const acheteurRoute = require('./routes/acheteur');
const produitRoute = require('./routes/produit');
const categorieRoute = require('./routes/categorie');
const annonceRoute  =  require('./routes/annonce');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/vendeur', vendeurRoute);
app.use('/api/acheteur', acheteurRoute);
app.use('/api/produit', produitRoute);
app.use('/api/categorie', categorieRoute);
app.use('/api/annonce', annonceRoute);

app.listen('4000', function(err){
  console.log('server running at http://localhost:4000 ');
});
