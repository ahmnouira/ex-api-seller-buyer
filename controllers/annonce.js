var Annonce = require('../models/annonce');

module.exports = {
  post: function(req, res) {

    var newAnnonce = new Annonce ({
      nom : req.body.nom,
    });

   newAnnonce.save(function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      }
      else {
        res.json({status: "OK", mgs: "Annonce Saved "})
      }
    });
  },

get: function(req, res) {
    if (req.params.id) {
    Annonce.findOne({_id: req.params.id},function(err, annonce) {
      if (err) {
      res.json({status: "error", msg: err })
    } else {
      res.json(annonce)
    }

    })
  } else {
    Annonce.find({}, function(err, annonces) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json(annonces)
      }
    });
  }
},

delete: function(req, res) {
  if(req.params.id) {
    Annonce.deleteOne({_id: req.params.id},function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: "Annnonce Delated"})
      }
    });
  } else {
    Annonce.deleteMany({}, function(err) {
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        res.json({status: "OK", mgs: " ALL Annnoce Delated"})
      }
    });
}

},

put: function(req, res) {
  if(req.params.id) {
    Annonce.findOne({_id: req.params.id}, function(err, old_annonce){
      if (err) {
        res.json({status: "error", msg: err })
      } else {
        var updated_annonce =  {
        nom : req.body.nom ? req.body.nom : old_annonce.nom,
      }
      Annonce.updateOne({_id:req.params.id}, updated_annonce, function(err) {
        if  (err) {
         res.json({status: "error", msg: err })
       } else {
         res.json({status: "OK", mgs: "Annonce Updated "})
       }
      });
  }
});


}


}

}
