var annonce = require('../constrollers/annonce');
var router = require('express').Router();

router.post('/',  annonce.post);
router.get('/', annonce.get);
router.get('/:id', annonce.get);
router.delete('/:id', annonce.delete);
router.delete('/', annonce.delete);
router.put('/:id', annonce.put);

module.exports = router;
