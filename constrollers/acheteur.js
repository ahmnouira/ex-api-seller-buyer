var Acheteur = require('../models/acheteur');


module.exports = {
  post: function(req, res) {

    var newAcheteur = new Acheteur ({
      nom : req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      password: req.body.password,
      tel: req.body.tel
    });

    newAcheteur.save(function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      }
      else {
        res.json({status: "OK", mgs: "Acheter Saved "})
      }
    });
  },

get: function(req, res) {
    if (req.params.id) {
    Acheteur.findOne({_id: req.params.id},function(err, acheteur) {
      if (err) {
      res.json({status: "error", msg: err })
    } else {
      res.json(acheteur)
    }

    })
  } else {
    Acheteur.find({}, function(err, acheteurs) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json(acheteurs)
      }
    });
  }
},


delete: function(req, res) {
  if(req.params.id) {
    Acheteur.deleteOne({_id: req.params.id},function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: "Acheteur Delated"})
      }
    });
  } else {
    Acheteur.deleteMany({}, function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: " ALL Acheteur Delated"})
      }
    });
}

},

put: function(req, res) {
  if(req.params.id) {
    Acheteur.findOne({_id: req.params.id}, function(err, old_acheteur){
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        var updated_acheteur =  {
        nom : req.body.nom ? req.body.nom : old_acheteur.nom,
        prenom: req.body.prenom ? req.body.prenom : old_acheteur.prenom,
        email : req.body.email ? req.body.email : old_acheteur.email,
        tel : req.body.tel ? req.body.tel : old_acheteur.tel
      }

      Acheteur.updateOne({_id:req.params.id}, updated_acheteur, function(err) {
        if  (err) {
         res.json({status: "error", msg: err })
       } else {
         res.json({status: "OK", mgs: "Acheteur Updated "})
       }
      });
  }
});

}


}

}
