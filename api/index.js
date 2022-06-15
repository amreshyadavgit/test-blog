const express = require('express');
const router = express.Router();

const { find, findOne, update, create, deleteOne } = require('./blog')

router.get('/blog', find);
router.get('/blog/:id', findOne);
router.put('/blog/:id', update);
router.post('/blog', create);
router.delete('/blog/:id', deleteOne);

module.exports = router;