mongoose = require('mongoose');

var Schema = mongoose.Schema;

var baseOptions = {
  discriminatorKey: 'type',
  type: 'Users'
}

var vendeurSchma  = new Schema ({
  nom:{ type: String, trim: true, required: true },
  prenom: {type: String, trim: true, required: true },
  email: {type: String, trim: true, required: true},

},  baseOptions );


var Vendeur = mongoose.model('Vendeur', vendeurSchma)

module.exports = Vendeur;
