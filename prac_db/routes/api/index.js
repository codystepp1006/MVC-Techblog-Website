const router = require('express').Router();

const account = require('./loginroutes');
const blogpost = require('./blogpostroutes');
//second  api/account
router.use('/account', account);
router.use('/blogpost', blogpost)

module.exports = router;