var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/user', require('../modules/user/user.route'))
router.use('/address', require('../modules/address/address.route') )
router.use('/product', require('../modules/product/product.route'))
router.use('/order', require('../modules/orderline/orderline.route'))

module.exports = router;
