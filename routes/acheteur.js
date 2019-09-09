var acheteur = require('../constrollers/acheteur');
var router = require('express').Router();

router.post('/',  acheteur.post);
router.get('/', acheteur.get);
router.get('/:id', acheteur.get);
router.delete('/:id', acheteur.delete);
router.delete('/', acheteur.delete);
router.put('/:id', acheteur.put);

module.exports = router;
