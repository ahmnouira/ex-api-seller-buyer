var produit = require('../constrollers/produit');
var router = require('express').Router();

router.post('/',  produit.post);
router.get('/', produit.get);
router.get('/:id', produit.get);
router.delete('/:id', produit.delete);
router.delete('/', produit.delete);
router.put('/:id', produit.put);

module.exports = router;
