const express = require('express')
const app = express()  
const port = 3000

const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/apinode');

app.use(express.urlencoded());
app.use(express.json())

const postRoute = require('./routes/launchRoute.js');
//toutes les routes définies dans postRoute seront préfixées par /posts
app.use('/', postRoute);

//méthode d express pour lancer le serveur sur le port défini
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

