var Categorie = require('../models/categorie');

module.exports = {
  post: function(req, res) {

    var newCategorie = new Categorie ({
      nom : req.body.nom,
    });

    newCategorie.save(function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      }
      else {
        res.json({status: "OK", mgs: "Categorie Saved "})
      }
    });
  },

get: function(req, res) {
    if (req.params.id) {
    Categorie.findOne({_id: req.params.id},function(err, categorie) {
      if (err) {
      res.json({status: "error", msg: err })
    } else {
      res.json(categorie)
    }

    })
  } else {
    Categorie.find({}, function(err, categories) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json(categories)
      }
    });
  }
},


delete: function(req, res) {
  if(req.params.id) {
    Categorie.deleteOne({_id: req.params.id},function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: "Categorie Delated"})
      }
    });
  } else {
    Produit.deleteMany({}, function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: " ALL Categorie Delated"})
      }
    });
}

},

put: function(req, res) {
  if(req.params.id) {
    Categorie.findOne({_id: req.params.id}, function(err, old_categorie){
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        var updated_categorie =  {
        nom : req.body.nom ? req.body.nom : old_categorie.nom,
      }

      Categorie.updateOne({_id:req.params.id}, updated_categorie, function(err) {
        if  (err) {
         res.json({status: "error", msg: err })
       } else {
         res.json({status: "OK", mgs: "Categorie Updated "})
       }
      });
  }
});


}


}

}
