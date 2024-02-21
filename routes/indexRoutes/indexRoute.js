const express = require('express');

const indexController = require('../../controller/indexController/indexController').indexControl;
const indexController2 = require('../../controller/indexController/indexController').saveControl;
const router = express.Router();


router.get('/', indexController);
router.post('/', indexController2);


module.exports = router;
