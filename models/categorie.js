mongoose = require('mongoose');

var Schema = mongoose.Schema;


var categorieSchema  = new Schema ({
  nom:{ type: String, trim: true, required: true },
});

var Categorie = mongoose.model('Categorie', categorieSchema)

module.exports = Categorie;
