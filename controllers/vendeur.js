var Vendeur = require('../models/vendeur');


module.exports = {
  post: function(req, res) {

    var newVendeur = new Vendeur ({
      nom : req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email
    });

    newVendeur.save(function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      }
      else {
        res.json({status: "OK", mgs: "vendeur Saved "})
      }
    });
  },

get: function(req, res) {
    if (req.params.id) {
    Vendeur.findOne({_id: req.params.id},function(err, vendeur) {
      if (err) {
      res.json({status: "error", msg: err })
    } else {
      res.json(vendeur)
    }

    })
  } else {
    Vendeur.find({}, function(err, vendeurs) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json(vendeurs)
      }
    });
  }
},


delete: function(req, res) {
  if(req.params.id) {
    Vendeur.deleOne({_id: req.params.id},function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: "Vendeur Delated"})
      }
    });
  } else {
    Vendeur.deleteMany({}, function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: " ALL Vendeur Delated"})
      }
    });
}

},

put: function(req, res) {
  if(req.params.id) {
    Vendeur.findOne({_id: req.params.id}, function(err, old_vendeur){
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        var updated_vendeur =  {
        nom : req.body.nom ? req.body.nom : old_vendeur.nom,
        prenom: req.body.prenom ? req.body.prenom : old_vendeur.prenom,
        email : req.body.email ? req.body.email : old_vendeur.email
      }

      Vendeur.updateOne({_id:req.params.id}, updated_vendeur, function(err) {
        if  (err) {
         res.json({status: "error", msg: err })
       } else {
         res.json({status: "OK", mgs: "Vendeur Updated "})
       }
      });
  }
});


}


}

}
