//This file is basically setting up the application to run on a server. express 
// will be used to run the front end on this. 

const path = require('path');
const express = require('express');
const routes= require('./routes');
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static('./public'));

app.use(routes);

app.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, 'public/home.html'))
);

app.get('/login', (req, res)=>
    res.sendFile(path.join(__dirname, 'public/login.html'))
);
// app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
//     );

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);

