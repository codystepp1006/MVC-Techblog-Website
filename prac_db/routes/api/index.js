const router = require('express').Router();

const account = require('./loginroutes');
//second  api/account
router.use('/account', account);

module.exports = router;