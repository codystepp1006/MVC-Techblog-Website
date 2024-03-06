// this  enables routing in this file.  
const router = require('express').Router();
//this is importing the api folder
const apiRoutes = require('./api');
//http://localhost:3001/api/ 
//define initial route of api and import the index file from the api folder
//first localhost:xxxx/api
router.use('/api', apiRoutes);


module.exports = router;