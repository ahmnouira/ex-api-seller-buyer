var Produit = require('../models/produit');

module.exports = {
  post: function(req, res) {

    var newProduit = new Produit ({
      nom : req.body.nom,
      prix: req.body.prix,
      libelle: req.body.libelle
    });

    newProduit.save(function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      }
      else {
        res.json({status: "OK", mgs: "Produit Saved "})
      }
    });
  },

get: function(req, res) {
    if (req.params.id) {
    Produit.findOne({_id: req.params.id},function(err, produit) {
      if (err) {
      res.json({status: "error", msg: err })
    } else {
      res.json(produit)
    }

    })
  } else {
    Produit.find({}, function(err, produits) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json(produits)
      }
    });
  }
},


delete: function(req, res) {
  if(req.params.id) {
    Produit.deleteOne({_id: req.params.id},function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: "Produit Delated"})
      }
    });
  } else {
    Produit.deleteMany({}, function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: " ALL Produit Delated"})
      }
    });
}

},

put: function(req, res) {
  if(req.params.id) {
    Produit.findOne({_id: req.params.id}, function(err, old_produit){
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        var updated_produit =  {
        nom : req.body.nom ? req.body.nom : old_produit.nom,
        prix: req.body.prix ? req.body.prix : old_produit.prix,
        libelle : req.body.libelle ? req.body.libelle : old_produit.libelle
      }

      Produit.updateOne({_id:req.params.id}, updated_produit, function(err) {
        if  (err) {
         res.json({status: "error", msg: err })
       } else {
         res.json({status: "OK", mgs: "Produit Updated "})
       }
      });
  }
});


}


}

}
