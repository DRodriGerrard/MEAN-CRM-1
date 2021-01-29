const router = require('express').Router();
const controller = require('./customers.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getOneById);
router.post('/', controller.createOne);
router.put('/:id', controller.putOne);
router.patch('/:id', controller.patchOne);
router.delete('/:id', controller.removeOne);

module.exports = router;