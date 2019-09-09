var categorie = require('../constrollers/categorie');
var router = require('express').Router();

router.post('/',  categorie.post);
router.get('/', categorie.get);
router.get('/:id', categorie.get);
router.delete('/:id', categorie.delete);
router.delete('/', categorie.delete);
router.put('/:id', categorie.put);

module.exports = router;
