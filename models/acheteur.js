mongoose = require('mongoose');
const Vendeur = require('./vendeur');
const bcrypt = require('bcrypt');
const saltRounds = 10;

var Schema = mongoose.Schema;

var AcheterSchema = new Schema ({

        password: {type: String, required: true},
        tel : {type: Number}
})

AcheterSchema.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds)
  next();
});

var Acheter = Vendeur.discriminator('Acheter',AcheterSchema)

module.exports = Acheter;
