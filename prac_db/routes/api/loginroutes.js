//This is actually ccreating the routes that we need to carry information from the front end 
// to the database. 
const router = require('express').Router();
// const { json } = require('body-parser');
const { Account } = require('../../models');

const db = require('../../db/connections');

// this just means api/account
router.get('/', async (req, res) => {
    const postData = await Account.findAll();
    //return res.json(Accountdata);
    console.info(`made it to get`);
    // res.status(200).json({cool: 'beans'});
    return res.json(postData);
  });


//note: needs to be async dont miss that
//ALSO these are the third endpoints for our api URL's and testint.
router.post('/createaccount', async (req, res) => {
    console.info(req.body.email);


    const sql ='INSERT INTO kenworth_db.account (email,password) VALUES(' + '\'' +  req.body.email + '\'' + ',' + '\'' + req.body.password + '\'' + ');'

    var response =  db.query(sql);
    res.status(200).json({cool: sql});
    //res.status(200).json(readAndAppend(req.body.id, req.body.email, req.body.password));

  });

  module.exports = router;
