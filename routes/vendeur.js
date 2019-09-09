var vendeur = require('../constrollers/vendeur');
var router = require('express').Router();

router.post('/',  vendeur.post);
router.get('/', vendeur.get);
router.get('/:id', vendeur.get);
router.delete('/:id', vendeur.delete);
router.delete('/', vendeur.delete);
router.put('/:id', vendeur.put);

module.exports = router;
