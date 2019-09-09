mongoose = require('mongoose');

var Schema = mongoose.Schema;


var produitSchema  = new Schema ({
  nom:{ type: String, trim: true, required: true },
  prix: {type: Number,   required: true },
  libelle: {type: String, trim: true, required: true},

});

var Produit = mongoose.model('Produit', produitSchema)

module.exports = Produit;
