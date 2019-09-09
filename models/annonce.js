mongoose = require('mongoose');
moment = require('moment');

var Schema = mongoose.Schema;

var annonceSchema  = new Schema ({
  date:{ type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a') },
  nom: {type:String, required: true, trim: true}

});

var Annonce = mongoose.model('Annnoce', annonceSchema)

module.exports = Annonce;
